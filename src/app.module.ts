import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProjectsModule,
    NestjsFormDataModule,
    MongooseModule.forRoot('mongodb://localhost/nest') , 
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname),
    // }),
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
