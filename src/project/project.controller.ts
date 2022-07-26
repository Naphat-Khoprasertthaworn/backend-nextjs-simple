import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProjectDTO } from 'src/dto/project.dto';
import { ProjectService } from './project.service';
@Controller('project')
export class ProjectController {

    constructor(private projectService:ProjectService) {}

    @Get()
    getProjectAll(@Query('name') projectName ?:string):ProjectDTO[]{
        if(projectName){
            return this.projectService.findByCondition((project)=>{
                return project.name.includes(projectName)
            })
        }
        return this.projectService.findAll()
    }

    @Get(':id')
    getProjectById(@Param('id') id:string):ProjectDTO{
        return this.projectService.findById(Number(id))
    }
}
