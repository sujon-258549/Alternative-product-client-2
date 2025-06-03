/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router";
import LoadingSpinner from "../Common/LoadingSpinner";
import ResponsivePagination from "react-responsive-pagination";
import { useGetRecommendedRelatedProductQuery } from "@/redux/features/recommended/recommended";
import { useFindOneProductQuery } from "@/redux/features/product/product";
import { skipToken } from "@reduxjs/toolkit/query";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductDetails = () => {
  const { _id } = useParams();
  console.log(_id);
  const { data: productData } = useFindOneProductQuery(_id);
  const [page, setCurrentPage] = useState<string>("1");
  const limit = "5";

  // Prepare product and data for related products query
  const product = productData?.data;
  const data = {
    args: [
      { name: "limit", value: limit },
      { name: "page", value: page },
    ],
    id: product?._id,
  };

  // Always call the hook, but it will only fetch if product?.productId is defined
  const {
    data: recommendedRelatedProduct,
    isLoading,
    isError,
  } = useGetRecommendedRelatedProductQuery(product ? data : skipToken);
  const recommendations = recommendedRelatedProduct?.data ?? [];
  const totalPage = recommendedRelatedProduct?.meta?.totalPage;
  if (isLoading)
    return (
      <div className="">
        <LoadingSpinner />
      </div>
    );

  if (isError)
    return (
      <div className="text-center py-20 text-red-500 animate-pulse">
        Error loading product
      </div>
    );

  console.log(product);
  if (!product)
    return <div className="text-center py-20">Product not found</div>;

  function formatPrice(price: any): import("react").ReactNode {
    if (typeof price === "number") {
      return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
    return price;
  }

  return (
    <div>
      {" "}
      <section className="container ">
        {/* Main Product Section */}
        {/* Recommended Product */}
        <div className="py-10 bg-[#424242] m-0 md:m-5 p-5 mt-5 md:mt-10 rounded-md">
          <div className="grid  items-center grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fadeIn">
            {/* Product Image */}
            <div className="bg-card rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={product?.productUrl}
                alt={product?.productName}
                className="w-full h-auto max-h-[500px] object-contain rounded-md transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl text-yellow-600 font-bold text-foreground">
                {product?.productName}
              </h1>
              <div className="text-lg text-amber-500 text-muted-foreground">
                {product?.brandName}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl text-white font-bold text-primary">
                  {formatPrice(product?.price)}
                </span>
                {product?.originalPrice > product?.price && (
                  <span className="text-muted-foreground text-gray-400 line-through">
                    {formatPrice(product?.originalPrice)}
                  </span>
                )}
              </div>

              <div className="space-y-6">
                <div
                  className={`inline-block px-4 py-2 rounded-lg font-bold ${
                    product?.isDigital
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product?.isDigital ? "Digital" : "Analog"}
                </div>

                <p className="text-muted-foreground text-gray-400">
                  {product?.description}
                </p>

                <div className="grid grid-cols-2 gap-6 animate-fadeIn delay-500">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Category
                    </h3>
                    <p className="font-semibold text-indigo-600">
                      {product.categories}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Weight
                    </h3>
                    <p className="font-semibold text-indigo-600">
                      {product.weight}g
                    </p>
                  </div>
                </div>
              </div>
              <Link to={`/add-recommendation/${product._id}`}>
                <button className="mt-2 w-full cursor-pointer text-sm py-2 rounded-lg btn-bg transition-all">
                  Add Recommendation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <h2 className="text-2xl font-bold mb-6 text-yellow text-center text-foreground">
          All Recommended Related Products
        </h2>
        <div className="border-b border-yellow-400 max-w-2xl mx-auto px-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-10 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recommendations?.length > 0 ? (
            recommendations?.map((recommendation) => (
              <div
                key={recommendation._id}
                className="border rounded-2xl bg-[#424242] p-3 shadow hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <img
                  src={recommendation.recommendationImage}
                  alt={recommendation.productName}
                  className="w-full h-48 md:h-44 lg:h-32 object-cover rounded-xl mb-3"
                  loading="lazy"
                />
                <h2 className="text-lg font-semibold line-clamp-1 text-white">
                  {recommendation.productName.slice(0, 10)}
                </h2>
                <p className="text-sm text-gray-300 mb-1">
                  {recommendation.brandName}
                </p>
                <p className="text-base font-bold text-green-600">
                  {recommendation.currency}
                  {recommendation.price.toFixed(2)}
                  {recommendation.originalPrice !== recommendation.price && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {recommendation.currency}
                      {recommendation.originalPrice.toFixed(2)}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-300 line-clamp-2 my-2">
                  {recommendation.shortDescription.slice(0, 20)}
                </p>
                <button className="mt-2 w-full cursor-pointer text-sm py-2 rounded-lg btn-bg transition-all">
                  Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              <Card className="col-span-full text-center bg-[#2c2c2c] max-w-xl mx-auto border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    No Recommendations
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Sorry, we couldn't find any products to recommend.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="No data"
                    className="w-28 h-28 mx-auto opacity-50"
                  />
                </CardContent>
              </Card>
            </p>
          )}
        </div>

        <div>
          <ResponsivePagination
            current={parseInt(page)}
            total={totalPage ?? 1}
            onPageChange={(page) => setCurrentPage(page.toString())}
          />
        </div>
        {/* Add these to your global CSS */}
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      </section>
    </div>
  );
};

export default ProductDetails;
