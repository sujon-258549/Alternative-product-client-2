import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../../redux/features/store"; // Adjust the import path as needed
import { setUser } from "../features/auth/authSlice";
// import { setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  let result = await baseQuery(args, api, extraOptions);

  // @ts-expect-error error
  if (result.error?.data?.err?.StatusCod === 401) {
    const res = await fetch("http://localhost:5000/auth/create-access-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    const newAccessToken = data?.data?.accessToken;
    const user = (api.getState() as RootState).auth.user;
    console.log(newAccessToken);
    if (newAccessToken) {
      // Save the new token to the Redux store
      api.dispatch(setUser({ user, token: newAccessToken }));
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
