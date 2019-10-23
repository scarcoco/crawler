import Koa from 'koa'

import { router } from './routers'
import config from './config'

const app = new Koa()
app.use(router.routes())

app.listen(config.port || 3000)

console.log('Server running on port 3000')
