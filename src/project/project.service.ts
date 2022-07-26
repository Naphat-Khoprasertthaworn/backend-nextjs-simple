import { Injectable } from '@nestjs/common';
import { ProjectDTO } from 'src/dto/project.dto';
@Injectable()
export class ProjectService {

    private projects:ProjectDTO[] = [
        {name:'te1',image:'test1',id:1},
        {name:'tst2',image:'test2',id:2},
        {name:'tet3',image:'test3',id:3}
    ]

    findAll():ProjectDTO[]{
        return this.projects
    }

    findById(id:number){
        return this.projects.find((p)=>p.id === id)
    }

    findByCondition(predicate : (project:ProjectDTO)=>boolean){
        return this.projects.filter(p=>predicate(p))
    }
}
