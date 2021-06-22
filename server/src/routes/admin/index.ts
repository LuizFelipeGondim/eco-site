import { Router } from "express"

import publicationsAdminRouter from './publicationsAdmin.routes'
import CategoriesAdminRouter from './categoriesAdmin.routes'
import UsersAdminRouter from './usersAdmin.routes'

const adminRouter = Router()

adminRouter.use('/publications', publicationsAdminRouter)
adminRouter.use('/categories', CategoriesAdminRouter)
adminRouter.use('/users', UsersAdminRouter)

export default adminRouter