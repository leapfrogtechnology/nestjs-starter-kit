/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { homeLogger } from "./home";

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class LoginModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(homeLogger).forRoutes({ path: "/", method: RequestMethod.POST });
      }
}
