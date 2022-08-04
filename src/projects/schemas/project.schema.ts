import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";


export type ProjectDocument = Project & Document;

@Schema()
export class Project {
    @Prop()
    name:string;

    @Prop()
    detail:string;

    @Prop()
    image:string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

