/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";

@Controller({
  version: "2",
})
export class UsersControllerV2 {
  @Get("users")
  userHistory(): Record<string, unknown> {
    return { id: 1, Name: "Leap Frog", version: "v2" };
  }
}
