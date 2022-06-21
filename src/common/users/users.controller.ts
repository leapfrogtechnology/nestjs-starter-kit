import { Controller, Get, Version } from "@nestjs/common";

@Controller({ path: "users" })
export class UsersController {
  @Version("1")
  @Get()
  userInfo(): string {
    return "Could you please check the Request Logged from specific middleware?";
  }

  @Version("2")
  @Get("history")
  userHistory(): Record<string, unknown> {
    return { id: 1, Name: "Leap Frog", version: "v2" };
  }
}
