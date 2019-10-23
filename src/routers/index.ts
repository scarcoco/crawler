import Koa from 'koa'
import KoaRouter from 'koa-router'

import { jsdomParser, cheerioParser } from '../module/parser'

const router = new KoaRouter()

/**
 * jsdom
 */
router.get('/jsdom', async (ctx: Koa.Context) => {
  jsdomParser.init('<div id="wrap"><p>Hello jsdom</p></div>')
  ctx.body = jsdomParser.getHTML('#wrap')
})

/**
 * cheerio
 */
router.get('/cheerio', async (ctx: Koa.Context) => {
  cheerioParser.init('<div id="wrap"><p>Hello cheerio</p></div>')
  ctx.body = cheerioParser.getHTML('#wrap')
})

/**
 * other
 */
router.get('/*', async (ctx: Koa.Context) => {
  ctx.body = 'Hello World'
})

export {
  router,
}
