import fs from "fs/promises";
import path from "path";

import { Reservation } from "../domain/Reservation";
import { ReservationRepository } from "../domain/ReservationRepository";

export class JsonReservationRepository implements ReservationRepository {
  private filePath = path.join(__dirname, "reservations.json");

  async save(reservation: Reservation): Promise<void> {
    const reservations = await this.findAllRaw();

    reservations.push(reservation.toJSON());

    await fs.writeFile(this.filePath, JSON.stringify(reservations, null, 2));
  }

  async findAll(): Promise<Reservation[]> {
    return [];
  }

  private async findAllRaw(): Promise<any[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
}
