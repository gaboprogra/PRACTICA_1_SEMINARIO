export type ReservationStatus = "PENDING" | "CONFIRMED";

export interface ReservationProps {
  id: string;
  customerName: string;
  date: Date;
  status: ReservationStatus;
}

export class Reservation {
  private constructor(private readonly props: ReservationProps) {}

  static create(customerName: string, date: Date): Reservation {
    if (!customerName || customerName.trim().length === 0) {
      throw new Error("El nombre del cliente es obligatorio");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reservationDate = new Date(date);
    reservationDate.setHours(0, 0, 0, 0);

    if (reservationDate < today) {
      throw new Error("No se puede crear una reserva con fecha anterior a hoy");
    }

    return new Reservation({
      id: Date.now().toString(),
      customerName,
      date,
      status: "CONFIRMED",
    });
  }

  toJSON() {
    return {
      id: this.props.id,
      customerName: this.props.customerName,
      date: this.props.date,
      status: this.props.status,
    };
  }
}
