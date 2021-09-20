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
  friends?: Array<number>; // id
}
// users [1,2,3,4,5,6,7,8,9]
// current_user 1
// friends: [2, 3, 5]
// no_friend: [4,6,7,8,9]
// mutual_friends

export class UserResponse {
  user!: User;
  access!: string;
  refresh!: string;
}
