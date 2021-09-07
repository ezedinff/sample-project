export enum UserRole{
  ADMIN,
  USER
}

export enum Gender {
  MALE,
  FEMALE
}

export class Address {
  country!: string;
  city!: string;
}


export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  role!: UserRole;
  birthDate!: Date;
  password!: string;
  gender!: Gender;
  address?: Address; // optional
  photo?: string; // optional
}
