/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SpecificLogger } from "./middleware/specificMiddleware";
import { UsersController } from "./users.controller";

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SpecificLogger).exclude("users/history").forRoutes(UsersController);
  }
}
