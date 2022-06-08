/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class homeLogger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if(req.headers["login_token"] === "my_token"){
      console.log("Request is coming and you are logged in the HOME ROUTE...", req.headers,req.url);      
 }else{
  throw new BadRequestException("Invalid Token !");
 }
    next();
  }
}
