/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: `/contact/create-contact`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),
    findContactMe: builder.query({
      query: (id) => ({
        url: `/contact/contactForMe/${id}`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
    findContactHe: builder.query({
      query: (id) => ({
        url: `/contact/contactForHe/${id}`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation({
      query: (productInfo) => ({
        url: `/recommendation/update-my-recommendation/${productInfo.id}`,
        method: "PATCH",
        body: productInfo.data,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useFindContactHeQuery,
  useFindContactMeQuery,
  useDeleteContactMutation,
} = contactApi;
