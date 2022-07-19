import { Body, Controller, Get, Post, Version } from "@nestjs/common";
import { Observable } from "rxjs";
import { ObjectI } from "../models/object.interface";
import { ObjectService } from "../service/object.service";

@Controller()
export class ObjectController {
  constructor(private objectService: ObjectService) {}

  @Version("1")
  @Post("objects")
  add(@Body() object: ObjectI): Observable<ObjectI> {
    return this.objectService.add(object);
  }
  @Version("2")
  @Get("objects")
  findAll(): Observable<ObjectI[]> {
    return this.objectService.findAll();
  }
}
