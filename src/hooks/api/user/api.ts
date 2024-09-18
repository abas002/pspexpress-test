import { UseUsersResponse } from "./types";

const baseUrl = "https://jsonplaceholder.typicode.com/";

const getUsersList = async (): Promise<UseUsersResponse> => {
  const res = await fetch(baseUrl + `users`, {
    method: "get",
  });
  return res.json();
};

export { getUsersList };
