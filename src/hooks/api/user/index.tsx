
import { UseUsersResponse } from "./types";
import * as UserApis from "./api"
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const UserKeys = {
    users: ["Users"]
}

const useGetUsersList = (initialData: UseUsersResponse, options?: UseQueryOptions<UseUsersResponse>) => {
    const query = useQuery<UseUsersResponse>({
        queryKey: UserKeys.users,
        queryFn: () => UserApis.getUsersList(),
        initialData,
        ...options
    });
    return query;
}

export { useGetUsersList }