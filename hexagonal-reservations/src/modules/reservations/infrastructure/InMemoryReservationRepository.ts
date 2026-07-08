import { Reservation } from "../domain/Reservation";
import { ReservationRepository } from "../domain/ReservationRepository";

export class InMemoryReservationRepository implements ReservationRepository {
  private reservations: Reservation[] = [];

  async save(reservation: Reservation): Promise<void> {
    this.reservations.push(reservation);
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservations;
  }
}
