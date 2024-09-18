import { QueryResponse } from "@/types/common";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
}

export interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export type UseUsersResponse = QueryResponse<UserInterface>;
