/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { SpecificLogger } from "./middleware/specific-logger.middleware";
import { UsersControllerV1 } from "./users.controllerv1";
import { UsersControllerV2 } from "./users.controllerv2";

@Module({
  imports: [UsersModule],
  controllers: [UsersControllerV1, UsersControllerV2],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SpecificLogger).forRoutes({ path: "v1/users", method: RequestMethod.GET });
  }
}
