import { Router } from "express"

import publicationsAdminRouter from './publicationsAdmin.routes'

const adminRouter = Router()

adminRouter.use('/publications', publicationsAdminRouter)

export default adminRouter