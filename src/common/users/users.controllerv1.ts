import { Controller, Get } from "@nestjs/common";

@Controller({
  version: "1",
})
export class UsersControllerV1 {
  @Get("users")
  userInfo(): string {
    return "Could you please check the Request Logged from specific middleware(Controller version)?";
  }
}
