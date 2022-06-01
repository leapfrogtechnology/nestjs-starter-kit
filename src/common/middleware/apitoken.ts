/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ApiToken implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);

    next();
  }
}
