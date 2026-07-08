import { Reservation } from "./Reservation";

export interface ReservationRepository {
  save(reservation: Reservation): Promise<void>;
  findAll(): Promise<Reservation[]>;
}
