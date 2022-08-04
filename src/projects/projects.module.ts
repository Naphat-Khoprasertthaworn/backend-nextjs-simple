import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project,ProjectSchema } from './schemas/project.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[MongooseModule.forFeature([{name:Project.name,schema:ProjectSchema}]),
            MulterModule.register({
              dest:'./database/imageFile/projects'
            })
          ],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
