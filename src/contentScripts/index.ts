/* eslint-disable no-console */

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(async() => {
  console.info('[vitesse-webext] Hello world from content script')

  const data = await browser.storage.local.get('blackList')

  if (data.blackList == undefined) return

  const blackList: string[] = data.blackList.split('\n')

  const htmlCollection = document.getElementsByClassName('entry-image')
  const targets = Array.from(htmlCollection)

  targets.forEach((target) => {
    const a = target
    const href = a?.getAttribute('href')
    if (href == null) return

    blackList.forEach((url) => {
      if (href.match(url)) {
        target.parentNode?.parentNode?.removeChild(target.parentNode)
        console.log(`delete: ${href}`)
      }
    })
  })
})()
