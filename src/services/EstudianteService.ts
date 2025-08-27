import { Estudiante } from "../models/Estudiante";

export class StudentService {
  async getStudentById(id: string): Promise<Estudiante> {

    return {
      legajo: "10289",
      apellido: "Romero",
      nombre: "Tomas",
      facultad: "Facultad de Ingeniería en Sistemas"
    };
  }
}
