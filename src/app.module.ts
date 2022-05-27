import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const envFilePath: string = path.join(
  __dirname,
  "common",
  "envs",
  `.env${process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""}`
);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
