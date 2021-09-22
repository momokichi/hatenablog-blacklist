/* eslint-disable no-console */

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(async() => {
  console.info('[vitesse-webext] Hello world from content script')

  const data = await browser.storage.local.get('blackList')
  const blackList: string[] = data.blackList.split('\n')

  const htmlCollection = document.getElementsByClassName('serviceTop-entry-recommend')
  const targets = Array.from(htmlCollection)

  targets.forEach((target) => {
    const a = target.firstElementChild
    const href = a?.getAttribute('href')
    if (href == null) return

    blackList.forEach((url) => {
      if (href.match(url)) {
        target.parentNode?.removeChild(target)
        console.log(`delete: ${href}`)
      }
    })
  })
})()
