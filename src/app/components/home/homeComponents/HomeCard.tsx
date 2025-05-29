import { Button } from "@/components/ui/button";
import ShowAllProductButton from "./ShowAllProductButton";
import { useGetAllProductQuery } from "@/redux/features/product/product";
import LoadingSpinner from "../../Common/LoadingSpinner";
import { Link } from "react-router";

const HomeCard = () => {
  const { data: productsData, isLoading } = useGetAllProductQuery([
    {
      name: "limit",
      value: "12",
    },
  ]);
  console.log(productsData);
  const products = productsData?.data;
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      <h1 className="text-3xl  text-white md:text-5xl font-bold text-center py-5 md:py-10 mt-10">
        Product
      </h1>
      <div className="p-0.5 mb-0 px-4 md:mb-10 lg:mb-16 max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
      <div className=" mb-5 md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {products &&
          products.slice(0, 12).map((product, idx) => (
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
                to={`product-details/${product._id}`}
              >
                <Button className="mt-2 w-full cursor-pointer  text-sm py-2 rounded-lg btn-bg transition-all">
                  Recommended
                </Button>
              </Link>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center">
        {products && products.length >= 12 && <ShowAllProductButton />}
      </div>
    </div>
  );
};

export default HomeCard;
