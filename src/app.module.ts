import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiToken } from "./common/middleware/apitoken";
import { LoginController } from "./login/login.controller";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const envFilePath: string = path.join(
  __dirname,
  "common",
  "envs",
  `.env${process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""}`
);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiToken).forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
