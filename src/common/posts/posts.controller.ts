import { Controller, Get } from "@nestjs/common";

@Controller("posts")
export class PostsController {
  @Get("post-list")
  postList() {
    return "post List";
  }
  @Get("post-add")
  postAdd() {
    return "post add";
  }
}
