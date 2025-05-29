import { Button } from "@/components/ui/button";
import { useFindOneProductQuery } from "@/redux/features/product/product";
import { Link, useParams } from "react-router";

const ProductDetails = () => {
  const { _id } = useParams();
  const { data: products, isLoading } = useFindOneProductQuery(_id);
  const product = products?.data;

  // Recommendations data
  const recommendations = [
    {
      id: 1,
      productName: "Sports Wireless Earbuds",
      brandName: "SoundMax",
      price: 39.99,
      originalPrice: 59.99,
      productUrl:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg",
    },
    // ... other recommendation items
  ];

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );

  return (
    <section className="container mx-auto px-4 ">
      {/* Main Product Section */}
      <div className="grid py-10 items-center grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fadeIn">
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
                product?.isInStock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product?.isInStock ? "In Stock" : "Out of Stock"}
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

            <Link to={`/add-recommendation/${product._id}`}>
              <Button className="w-full py-6 cursor-pointer btn-bg font-bold transition-all hover:scale-[1.02]">
                Add Recommended
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <h2 className="text-2xl font-bold mb-6 text-yellow text-center text-foreground">
        Recommended Products
      </h2>
      <div className="border-b border-yellow-400 max-w-2xl mx-auto px-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-10 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="bg-[#424242] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-4">
              <img
                src={item.productUrl}
                alt={item.productName}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                {item.productName}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {item.brandName}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  {formatPrice(item.price)}
                </span>
                {item.originalPrice > item.price && (
                  <span className="text-muted-foreground line-through text-sm">
                    {formatPrice(item.originalPrice)}
                  </span>
                )}
              </div>
              <Link to={`/recommendation-details/${item.id}`}>
                <Button
                  variant="outline"
                  className="mt-4 w-full transition-colors"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
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
  );
};

export default ProductDetails;
