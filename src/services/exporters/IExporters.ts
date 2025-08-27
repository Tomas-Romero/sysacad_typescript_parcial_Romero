import { Estudiante } from "../../models/Estudiante";

export interface IExporter {
  export(estudiante: Estudiante): Promise<any>;
}
