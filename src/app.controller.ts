import { Controller, Get, Version } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller({ path: "/" })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Version("1")
  @Get("version-one")
  getVersion(): string {
    return "This is the version 1 for the app controller!";
  }
}
