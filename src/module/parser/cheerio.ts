/**
 * https://github.com/cheeriojs/cheerio
 */
import cheerio from 'cheerio'


let $: CheerioStatic

export const cheerioParser = {
  init(content: string): void {
    $ = cheerio.load(content)
  },
  getText(selector: string): string {
    if (!$) {
      throw Error('not init')
    }
    return $(selector).text()
  },
  getHTML(selector: string): string {
    if (!$) {
      throw Error('not init')
    }
    return $(selector).html() || ''
  },
}
