/**
 * https://github.com/jsdom/jsdom
 */
import { JSDOM } from 'jsdom'

let $: JSDOM

export const jsdomParser = {
  init(content: string): void {
    $ = new JSDOM(content)
  },
  getText(selector: string): string {
    const dom = $.window.document.querySelector(selector)
    if (dom) {
      return dom.textContent || ''
    }
    return ''
  },
  getHTML(selector: string): string {
    const dom = $.window.document.querySelector(selector)
    if (dom) {
      return dom.innerHTML || ''
    }
    return ''
  },
}
