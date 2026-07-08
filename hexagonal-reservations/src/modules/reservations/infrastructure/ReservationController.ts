import { Request, Response } from "express";

import { CreateReservationUseCase } from "../use-cases/CreateReservationUseCase";

export class ReservationController {
  constructor(
    private readonly createReservationUseCase: CreateReservationUseCase,
  ) {}

  async create(req: Request, res: Response) {
    try {
      const reservation = await this.createReservationUseCase.execute(req.body);

      return res.status(201).json({
        message: "Reserva creada correctamente",
        data: reservation,
      });
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  }
}
