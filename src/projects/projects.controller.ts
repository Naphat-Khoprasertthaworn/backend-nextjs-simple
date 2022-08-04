import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './imageFile-helper';
import { Observable, of } from 'rxjs';
import { join } from 'path';


@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imageFile',{
    storage: diskStorage({
      destination:'./database/imageFiles/projects',
      filename:editFileName
    }),
    fileFilter:imageFileFilter,
  }))
  create(@UploadedFile() file:Express.Multer.File , @Body() createProjectDto: CreateProjectDto) {
    console.log(file)
    createProjectDto.image = 'http://localhost:3000/api/projects/project-image/'+file.filename
    console.log('in controller',createProjectDto)
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll() {
    console.log('it work! find')
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }

  @Get('project-image/:imagename')
  findProjectImage(@Param('imagename') imagename, @Res() res):Observable<Object>{
    return res.sendFile(join(process.cwd(),'database/imageFiles/projects/'+imagename))
  }
}
