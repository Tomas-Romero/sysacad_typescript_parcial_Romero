import { Request, Response } from "express";
import { EstudianteService } from "../services/EstudianteService";
import { JSONExporter } from "./services/exporters/JSONExporter";
import { PDFExporter } from "../services/exporters/PDFExporter";
import { IExporter } from "../services/exporters/IExporters";

const studentService = new StudentService();

export const getStudentFile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { format } = req.query;

  try {
    const student = await studentService.getStudentById(id);

    let exporter: IExporter;

    if (format === "pdf") {
      exporter = new PDFExporter();
      const pdfBuffer = await exporter.export(student);
      res.setHeader("Content-Type", "application/pdf");
      res.send(Buffer.from(pdfBuffer));
    } else {
      exporter = new JSONExporter();
      const json = await exporter.export(student);
      res.json(json);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al generar la ficha del alumno" });
  }
};
