import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Logger } from "./common/middleware/logger.middleware";
import { UsersModule } from "./common/users/users.module";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const envFilePath: string = path.join(
  __dirname,
  "common",
  "envs",
  `.env${process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""}`
);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes(AppController);
  }
}
