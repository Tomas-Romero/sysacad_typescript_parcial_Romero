import { IExporter } from "./IExporters";
import { Estudiante } from "../../models/Estudiante";

export class JSONExporter implements IExporter {
  async export(estudiante: Estudiante): Promise<any> {
    return estudiante; //lo devuelvo como json
  }
}
