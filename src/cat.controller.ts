/* eslint-disable prettier/prettier */
import { Controller, Get, Version } from "@nestjs/common";

@Controller()
export class CatController {
  @Version("1")
  @Get("cat")
  catAllV1(): string {
    return "returns all cats for version 1";
  }

  @Version("2")
  @Get("cat")
  catAllV2(): string {
    return " returns all cats for version 2";
  }
}
