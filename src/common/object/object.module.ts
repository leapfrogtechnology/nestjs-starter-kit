import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ObjectController } from "./controller/object.controller";
import { ObjectEntity } from "./models/object.entity";
import { ObjectService } from "./service/object.service";

@Module({
  imports: [TypeOrmModule.forFeature([ObjectEntity])],
  providers: [ObjectService],
  controllers: [ObjectController],
})
export class ObjectModule {}
