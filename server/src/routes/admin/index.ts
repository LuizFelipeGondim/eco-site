import { Router } from "express"

import newsAdminRouter from './newsAdmin.routes'

const adminRouter = Router()

adminRouter.use('/news', newsAdminRouter)

export default adminRouter