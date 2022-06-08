import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { EmployeeModule } from "./common/employee/employee.module";
import { Logger } from "./common/middleware/auth";
import { UsersController } from "./common/users/users.controller";
import { BlogsService } from "./common/blogs/blogs.service";
import { PostsController } from "./common/posts/posts.controller";
import { LoginModule } from "./common/middleware/login.module";
// import { homeLogger } from "./common/middleware/home";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const envFilePath: string = path.join(
  __dirname,
  "common",
  "envs",
  `.env${process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""}`
);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }), EmployeeModule, LoginModule],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, BlogsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes({ path: "users", method: RequestMethod.POST });
  }
}
