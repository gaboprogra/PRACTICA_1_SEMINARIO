import express from "express";

import { CreateReservationUseCase } from "./modules/reservations/use-cases/CreateReservationUseCase";
import { ReservationController } from "./modules/reservations/infrastructure/ReservationController";

import { InMemoryReservationRepository } from "./modules/reservations/infrastructure/InMemoryReservationRepository";
import { JsonReservationRepository } from "./modules/reservations/infrastructure/JsonReservationRepository";

const app = express();

app.use(express.json());

// Cambiando SOLO esta línea cambias el adaptador
//const reservationRepository = new InMemoryReservationRepository();

// Si quieres probar con JSON después, cambias por esto:
const reservationRepository = new JsonReservationRepository();

const createReservationUseCase = new CreateReservationUseCase(
  reservationRepository,
);

const reservationController = new ReservationController(
  createReservationUseCase,
);

app.post("/reservations", (req, res) => {
  reservationController.create(req, res);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
