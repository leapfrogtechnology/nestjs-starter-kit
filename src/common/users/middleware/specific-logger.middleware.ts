/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class SpecificLogger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request logged from specific Middleware...", req.url, req.headers);
    next();
  }
}
