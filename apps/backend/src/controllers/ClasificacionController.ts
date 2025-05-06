import { Request, Response } from "express";
import Clasificacion from "../models/Clasificacion";

export const getClasificacion = async (_req: Request, res: Response) => {
    try {
        const clasificacion = await Clasificacion.find().sort({ pos: 1 }).lean();
        res.json(clasificacion);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving clasificacion", error });
    }
};