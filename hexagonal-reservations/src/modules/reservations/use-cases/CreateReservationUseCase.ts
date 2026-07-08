import { Reservation } from "../domain/Reservation";
import { ReservationRepository } from "../domain/ReservationRepository";

interface CreateReservationDTO {
  customerName: string;
  date: string;
}

export class CreateReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async execute(data: CreateReservationDTO) {
    const reservation = Reservation.create(
      data.customerName,
      new Date(data.date),
    );

    await this.reservationRepository.save(reservation);

    return reservation.toJSON();
  }
}
