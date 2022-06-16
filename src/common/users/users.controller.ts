import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get()
  userInfo(): string {
    return "Could you please check the Request Logged from specific middleware?";
  }

  @Get("history")
  userHistory(): Record<string, unknown> {
    return { id: 1, Name: "Leap Frog" };
  }
}
