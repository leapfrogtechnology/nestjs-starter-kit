import { Injectable } from "@nestjs/common";

@Injectable()
export class BlogsService {
  private readonly blogs: any[] = []; //creating an instance at first
  create(data: any) {
    this.blogs.push(data); //pushing the data into it
  }
  findData(): any[] {
    return this.blogs;
  }
}
