import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { ObjectEntity } from "../models/object.entity";
import { ObjectI } from "../models/object.interface";

@Injectable()
export class ObjectService {
  constructor(
    @InjectRepository(ObjectEntity)
    private objectRepository: Repository<ObjectEntity>
  ) {}

  add(object: ObjectI): Observable<ObjectI> {
    return from(this.objectRepository.save(object));
  }

  findAll(): Observable<ObjectI[]> {
    return from(this.objectRepository.find());
  }
}
