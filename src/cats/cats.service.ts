import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
    findAll(): string {
        return 'This is cat world!.';
    }
}
