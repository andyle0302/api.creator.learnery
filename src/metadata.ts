/* eslint-disable */
export default async () => {
  const t = {}
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./auth/dto/auth.dto'),
          {
            AuthDto: {
              clientToken: { required: true, type: () => String },
              sessionId: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./user/dto/edit-user.dto'),
          {
            EditUserDto: {
              email: { required: false, type: () => String },
              firstName: { required: false, type: () => String },
              lastName: { required: false, type: () => String },
            },
          },
        ],
        [import('./category/dto/create-category.dto'), { CreateCategoryDto: {} }],
        [import('./category/dto/update-category.dto'), { UpdateCategoryDto: {} }],
        [import('./category/entities/category.entity'), { Category: {} }],
        [import('./course/entities/course.entity'), { Course: {} }],
      ],
      controllers: [
        [import('./auth/auth.controller'), { AuthController: { signin: {} } }],
        [
          import('./app/app.controller'),
          { AppController: { getHello: {}, getHealth: {} } },
        ],
        [
          import('./user/user.controller'),
          { UserController: { getMe: {}, editUser: {}, deleteUser: {} } },
        ],
        [
          import('./category/category.controller'),
          {
            CategoryController: { create: { type: String }, findAll: { type: [String] } },
          },
        ],
      ],
    },
  }
}
