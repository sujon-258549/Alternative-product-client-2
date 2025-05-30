/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TRecommendedApi } from "@/types/recommended";

const recommendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (productInfo) => ({
        url: `/recommendation/create-recommended/${productInfo.id}`,
        method: "POST",
        body: productInfo.data,
      }),
      invalidatesTags: ["recommended"],
    }),

    getAllRecommended: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/recommendation",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TRecommendedApi) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["recommended"],
    }),

    findOneContact: builder.query({
      query: (id) => ({
        url: `/recommendation/${id}`,
        method: "GET",
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/recommendation/my-recommendation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["recommended"],
    }),
    updateContact: builder.mutation({
      query: (productInfo) => ({
        url: `/recommendation/update-my-recommendation/${productInfo.id}`,
        method: "PATCH",
        body: productInfo.data,
      }),
      invalidatesTags: ["recommended"],
    }),
  }),
});

export const { useCreateContactMutation } = recommendedApi;
