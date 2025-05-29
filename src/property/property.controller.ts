import { Body, Controller, Delete, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create.property.dto';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/update.property.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {
    constructor(private propertyService:PropertyService){}

    @Get()
    findAll(@Query() paginationDto: PaginationDto){
        return this.propertyService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id){
        return this.propertyService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreatePropertyDto) {
        return this.propertyService.create(dto) ;
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id,
        @Body()
        body: UpdatePropertyDto,
    ){
        return this.propertyService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id){
        return this.propertyService.delete(id);
    }

}
