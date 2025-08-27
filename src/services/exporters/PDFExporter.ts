import { IExporter } from "./IExporters";
import { Estudiante } from "../../models/Estudiante";
import { jsPDF } from "jspdf"; // librería para pdf

export class PDFExporter implements IExporter {
  async export(estudiante: Estudiante): Promise<Buffer> {
    const doc = new jsPDF();
    doc.text(`Ficha del Alumno`, 20, 20);
    doc.text(`Legajo: ${estudiante.legajo}`, 20, 40);
    doc.text(`Apellido: ${estudiante.apellido}`, 20, 50);
    doc.text(`Nombre: ${estudiante.nombre}`, 20, 60);
    doc.text(`Facultad: ${estudiante.facultad}`, 20, 70);

    return doc.output("arraybuffer"); // lo devuelvo como buffer
  }
}
