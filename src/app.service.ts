import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string{
    console.log(process.env.DATABASE_NAME);
    console.log(process.env.SECRET_KEY);
    return 'Hello Docker!';
  }
}
