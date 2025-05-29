import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create.property.dto';
import { UpdatePropertyDto } from './dto/update.property.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';

@Injectable()
export class PropertyService {


    constructor(@InjectRepository(Property) private propertyRepo: Repository<Property>){}
    
    async findAll(paginationDto: PaginationDto) {
        const property = await this.propertyRepo.find({
            skip: paginationDto.skip,
            take: paginationDto.limit ?? DEFAULT_PAGE_SIZE,
        });
        if(!property) throw new NotFoundException();
        return property;
    }

    async findOne(id: number) {
        const property = await this.propertyRepo.findOne({
            where: {
                id
            }
        })

        if(!property) throw new NotFoundException();

        return property;
    }

    async create(dto: CreatePropertyDto) {
        return await this.propertyRepo.save(dto)
    }

    async update(id: number, dto: UpdatePropertyDto) {
        return this.propertyRepo.update({ id }, dto);
    }

    async delete(id: number){
        return this.propertyRepo.delete({
            id,
        })
    }
    
}
