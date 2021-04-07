import { Router } from "express"

import sessionsRouter from './sessions.routes'
import usersRouter from './users.routes'
import homeRouter from './home.routes'
import publicationsRouter from './publications.routes'
import adminRouter from './admin'

const routes = Router()

routes.use('/admin', adminRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/users', usersRouter)
routes.use('/', homeRouter)
routes.use('/publications', publicationsRouter)

export default routes