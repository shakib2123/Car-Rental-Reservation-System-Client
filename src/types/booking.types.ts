import { TCar } from "./Car.type";
import { TUser } from "./user.type";

export type TBooking = {
  _id: string;
  date: string;
  user: TUser;
  car: TCar;
  GPS: boolean;
  childSeat: boolean;
  creditCard: string;
  drivingLicense: string;
  passport: string;
  startTime: string;
  endTime: null | string;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
  status: string;
  returned: boolean;
  isPaid: boolean;
  __v: number;
};
