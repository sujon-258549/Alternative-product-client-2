import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ProductDetails = () => {
  // Main product data
  const product = {
    productName: "Wireless Bluetooth Headphones",
    brandName: "SoundMax",
    price: 49.99,
    originalPrice: 69.99,
    currency: "USD",
    description:
      "High-fidelity wireless headphones Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore reprehenderit magnam iure enim, perspiciatis veniam ut minima repellendus, accusantium odio officia optio tempora possimus ex voluptas dignissimos expedita laudantium quae! with active noise cancellation, long battery life, and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore reprehenderit magnam iure enim, perspiciatis veniam ut minima repellendus, accusantium odio officia optio tempora possimus ex voluptas dignissimos expedita laudantium quae! comfortable ear cups. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore reprehenderit magnam iure enim, perspiciatis veniam ut minima repellendus, accusantium odio officia optio tempora possimus ex voluptas dignissimos expedita laudantium quae! lorem",
    shortDescription: "Noise-cancelling wireless headphones ",
    productUrl:
      "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
    isInStock: true,
    categories: "Electronics",
    weight: 350,
    isDigital: false,
    createdAt: "2025-05-21T06:51:38.177+00:00",
    updatedAt: "2025-05-21T06:51:38.177+00:00",
  };

  // Recommendations using same data structure
  const recommendations = [
    {
      productName: "Sports Wireless Earbuds",
      brandName: "SoundMax",
      price: 39.99,
      originalPrice: 59.99,
      productUrl:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
    },
    {
      productName: "Over-Ear Studio Headphones",
      brandName: "AudioPro",
      price: 149.99,
      originalPrice: 199.99,
      productUrl:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
    },
    {
      productName: "Wireless Neckband Headphones",
      brandName: "SoundMax",
      price: 29.99,
      originalPrice: 49.99,
      productUrl:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
    },
    {
      productName: "Noise Cancelling Earbuds",
      brandName: "AudioPro",
      price: 79.99,
      originalPrice: 99.99,
      productUrl:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
    },
    {
      productName: "Noise Cancelling Earbuds",
      brandName: "AudioPro",
      price: 79.99,
      originalPrice: 99.99,
      productUrl:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
    },
  ];

  // Currency formatter
  // interface Product {
  //     productName: string;
  //     brandName: string;
  //     price: number;
  //     originalPrice: number;
  //     currency?: string;
  //     description?: string;
  //     shortDescription?: string;
  //     productUrl: string;
  //     isInStock?: boolean;
  //     categories?: string;
  //     weight?: number;
  //     isDigital?: boolean;
  //     createdAt?: string;
  //     updatedAt?: string;
  // }

  // interface Recommendation {
  //     productName: string;
  //     brandName: string;
  //     price: number;
  //     originalPrice: number;
  //     productUrl: string;
  // }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <section className="container">
      <div className=" py-10">
        {/* Main Product Section */}
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-gray-200 rounded-xl p-4 ">
            <img
              src={product.productUrl}
              alt={product.productName}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-3xl text-white  font-bold">
              {product.productName}
            </h1>
            <div className="text-lg text-gray-300">{product.brandName}</div>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-yellow-600">
                {formatPrice(product.price)}
              </span>
              <span className="text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-300 font-bold text-green-800 px-4 py-2 rounded-lg inline-block">
                {product.isInStock ? "In Stock" : "Out of Stock"}
              </div>
              <p className="text-gray-400">{product.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm text-gray-500">Category</h3>
                  <p className="font-medium">{product.categories}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm text-gray-500">Weight</h3>
                  <p className="font-medium">{product.weight}g</p>
                </div>
              </div>
              <Link to={"/add-recommendation"}>
                <Button className="mt-2  w-full    text-black text-sm py-6 font-bold rounded-lg btn-bg transition-all">
                  Add Recommended
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="bg-[#424242] rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2">
                <img
                  src={item.productUrl}
                  alt={item.productName}
                  className="w-full h-48 rounded-sm mb-4"
                />
                <h3 className="font-semibold text-gray-300 mb-1">
                  {item.productName.slice(0, 15)}
                </h3>
                <p className="text-gray-400 text-sm mb-2 ">{item.brandName}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-blue-600">
                    {formatPrice(item.price)}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {formatPrice(item.originalPrice)}
                  </span>
                </div>
                <Link to={"/recommendation-Details-page"}>
                  <button className="mt-4 w-full btn-bg text-gray-900 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
