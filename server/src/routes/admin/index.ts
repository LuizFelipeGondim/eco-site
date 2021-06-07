import { Router } from "express"

import publicationsAdminRouter from './publicationsAdmin.routes'
import CategoriesAdminRouter from './categoriesAdmin.routes'

const adminRouter = Router()

adminRouter.use('/publications', publicationsAdminRouter)
adminRouter.use('/categories', CategoriesAdminRouter)

export default adminRouter