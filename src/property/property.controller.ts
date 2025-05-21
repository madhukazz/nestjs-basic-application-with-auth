import { Body, Controller, Delete, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create.property.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request.header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/update.property.dto';

@Controller('property')
export class PropertyController {
    constructor(private propertyService:PropertyService){}

    @Get()
    findAll(){
        return this.propertyService.findAll();
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
