import { baseApi } from "@/redux/api/baseApi";
import { TUser } from "@/types/user";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    updateUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/update",
        method: "PATCH",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/auth",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TUser) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["user"],
    }),
    createAccessToken: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/create-access-token",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    forgetPassword: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    resetPassword: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    changePassword: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/change-password",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/auth/get-me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useCreateAccessTokenMutation,
  useLoginMutation,
  useGetMeQuery,
  useRegisterUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
  useGetAllUserQuery,
} = authApi;
