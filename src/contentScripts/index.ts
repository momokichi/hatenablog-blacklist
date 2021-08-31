/* eslint-disable no-console */
import { onMessage } from 'webext-bridge'

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info('[vitesse-webext] Hello world from content script')

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  })

  const blackList = ['https://example.hatenablog.com/*']

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
