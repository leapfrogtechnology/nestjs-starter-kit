import { Controller, Get, Version } from "@nestjs/common";

@Controller()
export class UsersController {
  @Version("1")
  @Get("users")
  userInfo(): string {
    return "Could you please check the Request Logged from specific middleware?";
  }

  @Version("2")
  @Get("users")
  userHistory(): Record<string, unknown> {
    return { id: 1, Name: "Leap Frog", version: "v2" };
  }
}
