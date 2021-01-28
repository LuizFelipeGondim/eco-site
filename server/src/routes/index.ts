import { Router } from "express"

import sessionsRouter from './sessions.routes'
import usersRouter from './users.routes'
import homeRouter from './home.routes'

const routes = Router()

routes.use('/sessions', sessionsRouter)
routes.use('/users', usersRouter)
routes.use('/', homeRouter)

export default routes