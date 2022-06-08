import { Body, Controller, Get, HttpCode, Param, Post, Query } from "@nestjs/common";
import { BlogsService } from "../blogs/blogs.service";
@Controller("users")
export class UsersController {
  constructor(private blogService: BlogsService) {}
  @Post()
  userInfo(): string {
    return "USER PAGE";
  }
  @Get("history")
  userHistory(): Record<string, unknown> {
    return { id: 1, Name: "Leap Frog" };
  }
  @Post("add-user")
  @HttpCode(201)
  addUser(@Body() Record: any): string {
    console.log("data", Record);
    return "User Added";
  }
  @Get("lists/:id")
  listUser(@Param() Record: any): string {
    console.log("list", Record);
    return "Userid" + " " + Record.id;
  }
  @Get("list")
  listFilterUser(@Query() Record: any): string {
    console.log("query", Record);
    return "list query user" + " " + Record.id;
  }
  @Get("year*")
  detailPage(): string {
    return "Details of this Year!";
  }
  @Get("blog-list")
  async blogList(): Promise<any[]> {
    return this.blogService.findData();
  }
  @Post("blog-add")
  blogAdd(@Body() record: any) {
    this.blogService.create(record);
  }
}
