import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { posix } from 'node:path/posix';
import { CatService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatService) { }

    @Get('profile')
    findAll(): string {
        return this.catService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Get()
    async findall(): Promise<any[]> {
        return [];
    }

}
