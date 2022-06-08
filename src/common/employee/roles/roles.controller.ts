import { Controller, Get } from "@nestjs/common";

@Controller("roles")
export class RolesController {
  @Get()
  roleHistory(): string {
    return "Roles History Page";
  }
  @Get("demo-page")
  roleHistoryDemo(): string {
    return "Role History Demo Page";
  }
}
