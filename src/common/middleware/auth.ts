/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if(req.headers["api_token"] === "my_token"){
      console.log("Request is coming...", req.headers,req.url);      
 }else{
  throw new BadRequestException("Invalid Token !");
 }

    next();
  }
}
