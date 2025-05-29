/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TProductApiResponse } from "@/types/product";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/product/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"],
    }),

    getAllProduct: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TProductApiResponse) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["product"],
    }),
    getMyProduct: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/product/my-product",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TProductApiResponse) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["product"],
    }),
    findOneProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    deleteMyProduct: builder.mutation({
      query: (id) => ({
        url: `/product/my-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (productInfo) => ({
        url: `/product/my-product/${productInfo.id}`,
        method: "PATCH",
        body: productInfo.data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetMyProductQuery,
  useFindOneProductQuery,
  useDeleteMyProductMutation,
  useUpdateProductMutation,
} = productApi;
