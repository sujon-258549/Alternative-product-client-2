import { Button } from "@/components/ui/button";
import { useGetAllProductQuery } from "@/redux/features/product/product";
import { Link, useParams } from "react-router";
import LoadingSpinner from "../Common/LoadingSpinner";
import ResponsivePaginationComponent from "react-responsive-pagination";
import { useEffect, useState } from "react";
import NoProductFound from "./NoProductFound";

const CategoryProduct = () => {
  const { name } = useParams();
  const limit = "6";
  const [page, setCurrentPage] = useState<string>("1");

  // Build queryParams as a single array/object to pass as the first argument
  const queryParams: { name: string; value: string }[] = [];
  if (name) {
    queryParams.push({ name: "categories", value: name });
  }
  if (page) {
    queryParams.push({ name: "page", value: page });
  }
  if (limit) {
    queryParams.push({ name: "limit", value: limit });
  }

  const { data: productsData, isLoading } = useGetAllProductQuery(queryParams);

  useEffect(() => {
    // No need to update queryParams here, as it's built on each render
  }, [name, page, limit]);

  console.log(productsData);
  const products = productsData?.data;
  const totalPage = productsData?.meta?.totalPage;
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      <h1 className="text-shadow">{name} Category Products</h1>

      <div className="p-0.5  px-4  mb-10  lg:mb-16 max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
      <div className=" mb-5 md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, idx) => (
            <div
              key={idx}
              className="rounded-2xl  bg-[#424242] p-3 shadow hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <img
                src={product.productUrl}
                alt={product.productName}
                className="w-full h-48 md:h-44 lg:h-32 object-cover rounded-xl mb-3"
              />
              <h2 className="text-lg font-semibold line-clamp-1 text-white">
                {product.productName.slice(0, 10)}
              </h2>
              <p className="text-sm text-gray-300 mb-1">{product.brandName}</p>
              <p className="text-base font-bold text-green-600">
                ${product.price.toFixed(2)}{" "}
                {product.originalPrice !== undefined && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-300 line-clamp-2 my-2">
                {product.shortDescription.slice(0, 20)}
              </p>
              <Link
                className="cursor-pointer"
                to={`/product-details/${product._id}`}
              >
                <Button className="mt-2 w-full cursor-pointer  text-sm py-2 rounded-lg btn-bg transition-all">
                  Recommended
                </Button>
              </Link>
            </div>
          ))
        ) : (
          <NoProductFound categoryName={name} />
        )}
      </div>
      <div className="flex justify-center">
        <ResponsivePaginationComponent
          current={parseInt(page)}
          total={totalPage ?? 1}
          onPageChange={(page) => setCurrentPage(page.toString())}
        />
      </div>
    </div>
  );
};

export default CategoryProduct;
