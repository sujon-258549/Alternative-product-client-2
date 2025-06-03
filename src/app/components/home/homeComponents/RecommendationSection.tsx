import { Button } from "@/components/ui/button";
import { useGetAllRecommendedQuery } from "@/redux/features/recommended/recommended";
import { Link } from "react-router";

// const recommendations = [
//   {
//     authorId: "507f1f77bcf86cd799439011",
//     recommendationAuthorId: "507f1f77bcf86cd799439012",
//     productId: "607d1f77bcf86cd799439013",
//     productName: "Wireless Noise Cancelling Headphones",
//     brandName: "SoundMaster",
//     price: 199.99,
//     originalPrice: 249.99,
//     currency: "$",
//     description:
//       "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
//     shortDescription: "Noise cancelling wireless headphones",
//     isInStock: true,
//     categories: "Electronics, Audio, Headphones",
//     weight: 0.45,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439011",
//     recommendationAuthorId: "507f1f77bcf86cd799439013",
//     productId: "607d1f77bcf86cd799439014",
//     productName: "Organic Cotton T-Shirt",
//     brandName: "EcoWear",
//     price: 29.99,
//     originalPrice: 29.99,
//     currency: "$",
//     description:
//       "100% organic cotton t-shirt with a relaxed fit and sustainable production.",
//     shortDescription: "Sustainable organic cotton tee",
//     isInStock: true,
//     categories: "Clothing, Men, T-Shirts",
//     weight: 0.2,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439012",
//     recommendationAuthorId: "507f1f77bcf86cd799439014",
//     productId: "607d1f77bcf86cd799439015",
//     productName: "Stainless Steel Water Bottle",
//     brandName: "HydroFlask",
//     price: 34.95,
//     originalPrice: 39.95,
//     currency: "$",
//     description:
//       "Double-walled vacuum insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
//     shortDescription: "Insulated water bottle",
//     isInStock: true,
//     categories: "Accessories, Outdoor",
//     weight: 0.38,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439013",
//     recommendationAuthorId: "507f1f77bcf86cd799439015",
//     productId: "607d1f77bcf86cd799439016",
//     productName: "Smart Watch Pro",
//     brandName: "TechGear",
//     price: 179.99,
//     originalPrice: 199.99,
//     currency: "$",
//     description:
//       "Fitness tracking smartwatch with heart rate monitor, GPS, and 7-day battery life.",
//     shortDescription: "Advanced fitness smartwatch",
//     isInStock: false,
//     categories: "Electronics, Wearables",
//     weight: 0.05,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439014",
//     recommendationAuthorId: "507f1f77bcf86cd799439016",
//     productId: "607d1f77bcf86cd799439017",
//     productName: "JavaScript: The Definitive Guide (eBook)",
//     brandName: "O'Reilly",
//     price: 39.99,
//     originalPrice: 49.99,
//     currency: "$",
//     description:
//       "Comprehensive guide to JavaScript programming for beginners and experts alike.",
//     shortDescription: "Complete JavaScript reference",
//     isInStock: true,
//     categories: "Books, Programming, Digital",
//     weight: 0,
//     isDigital: "true",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439015",
//     recommendationAuthorId: "507f1f77bcf86cd799439017",
//     productId: "607d1f77bcf86cd799439018",
//     productName: "Ceramic Coffee Mug Set",
//     brandName: "HomeEssentials",
//     price: 24.95,
//     originalPrice: 24.95,
//     currency: "$",
//     description:
//       "Set of 4 premium ceramic coffee mugs with comfortable handles.",
//     shortDescription: "Elegant coffee mug set",
//     isInStock: true,
//     categories: "Home, Kitchen",
//     weight: 1.2,
//     isDigital: "false",
//     recommendationImage:
//       "https://img.freepik.com/premium-vector/dark-blue-lighting-effect-background-cosmetic_127132-84.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439016",
//     recommendationAuthorId: "507f1f77bcf86cd799439018",
//     productId: "607d1f77bcf86cd799439019",
//     productName: "Yoga Mat",
//     brandName: "FitLife",
//     price: 49.99,
//     originalPrice: 59.99,
//     currency: "$",
//     description: "Eco-friendly non-slip yoga mat with carrying strap.",
//     shortDescription: "Premium yoga mat",
//     isInStock: true,
//     categories: "Fitness, Yoga",
//     weight: 1.5,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439017",
//     recommendationAuthorId: "507f1f77bcf86cd799439019",
//     productId: "607d1f77bcf86cd799439020",
//     productName: "Bluetooth Speaker",
//     brandName: "AudioTech",
//     price: 89.99,
//     originalPrice: 99.99,
//     currency: "$",
//     description:
//       "Portable waterproof Bluetooth speaker with 20-hour battery life.",
//     shortDescription: "Waterproof portable speaker",
//     isInStock: true,
//     categories: "Electronics, Audio",
//     weight: 0.68,
//     isDigital: "false",
//     recommendationImage:
//       "https://img.freepik.com/premium-psd/product-social-media-banner-template_160623-141.jpg?uid=R190067195&ga=GA1.1.547461502.1745654198&semt=ais_hybrid&w=740",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439018",
//     recommendationAuthorId: "507f1f77bcf86cd799439020",
//     productId: "607d1f77bcf86cd799439021",
//     productName: "Leather Wallet",
//     brandName: "UrbanStyle",
//     price: 59.95,
//     originalPrice: 59.95,
//     currency: "$",
//     description:
//       "Genuine leather wallet with RFID protection and multiple card slots.",
//     shortDescription: "Premium leather wallet",
//     isInStock: false,
//     categories: "Accessories, Men",
//     weight: 0.15,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439019",
//     recommendationAuthorId: "507f1f77bcf86cd799439021",
//     productId: "607d1f77bcf86cd799439022",
//     productName: "Digital Art Course",
//     brandName: "CreativeSkills",
//     price: 79.99,
//     originalPrice: 99.99,
//     currency: "$",
//     description:
//       "Comprehensive digital art course covering fundamentals to advanced techniques.",
//     shortDescription: "Learn digital art online",
//     isInStock: true,
//     categories: "Education, Digital, Art",
//     weight: 0,
//     isDigital: "true",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439020",
//     recommendationAuthorId: "507f1f77bcf86cd799439022",
//     productId: "607d1f77bcf86cd799439023",
//     productName: "Air Fryer",
//     brandName: "KitchenPro",
//     price: 129.99,
//     originalPrice: 149.99,
//     currency: "$",
//     description:
//       "5.8-quart digital air fryer with 7 cooking presets and dishwasher-safe parts.",
//     shortDescription: "Versatile kitchen air fryer",
//     isInStock: true,
//     categories: "Home, Kitchen, Appliances",
//     weight: 5.2,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439021",
//     recommendationAuthorId: "507f1f77bcf86cd799439023",
//     productId: "607d1f77bcf86cd799439024",
//     productName: "Running Shoes",
//     brandName: "RunFast",
//     price: 119.95,
//     originalPrice: 119.95,
//     currency: "$",
//     description:
//       "Lightweight running shoes with responsive cushioning for all-day comfort.",
//     shortDescription: "Performance running shoes",
//     isInStock: true,
//     categories: "Sports, Running, Shoes",
//     weight: 0.3,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439022",
//     recommendationAuthorId: "507f1f77bcf86cd799439024",
//     productId: "607d1f77bcf86cd799439025",
//     productName: "Wireless Charging Pad",
//     brandName: "PowerUp",
//     price: 24.99,
//     originalPrice: 29.99,
//     currency: "$",
//     description:
//       "Qi-certified wireless charging pad compatible with most smartphones.",
//     shortDescription: "Fast wireless charger",
//     isInStock: true,
//     categories: "Electronics, Accessories",
//     weight: 0.12,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1587033411394-68e368a2c9b3?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439023",
//     recommendationAuthorId: "507f1f77bcf86cd799439025",
//     productId: "607d1f77bcf86cd799439026",
//     productName: "Scented Candle Set",
//     brandName: "HomeFragrance",
//     price: 34.99,
//     originalPrice: 34.99,
//     currency: "$",
//     description:
//       "Set of 3 soy wax candles with natural essential oils in relaxing scents.",
//     shortDescription: "Luxury scented candles",
//     isInStock: true,
//     categories: "Home, Decor",
//     weight: 0.8,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format",
//   },
//   {
//     authorId: "507f1f77bcf86cd799439024",
//     recommendationAuthorId: "507f1f77bcf86cd799439026",
//     productId: "607d1f77bcf86cd799439027",
//     productName: "Backpack",
//     brandName: "TravelGear",
//     price: 79.99,
//     originalPrice: 89.99,
//     currency: "$",
//     description:
//       "Durable waterproof backpack with laptop compartment and USB charging port.",
//     shortDescription: "Travel backpack with USB port",
//     isInStock: true,
//     categories: "Travel, Accessories",
//     weight: 0.95,
//     isDigital: "false",
//     recommendationImage:
//       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format",
//   },
// ];

const RecommendationSection = () => {
  const { data: recommendedData } = useGetAllRecommendedQuery([
    { name: "limit", value: "6" },
  ]);
  const recommendations = recommendedData?.data;
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-shadow">Recommended Products</h1>
      <div className="p-0.5  mb-6  px-4 md:mb-10 lg:mb-16 max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm" />

      <div className="mb-5 md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {recommendations?.slice(0, 12).map((recommendation) => (
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
            <Link to={`/my-recommended-Details/${recommendation._id}`}>
              <button className="mt-2 w-full cursor-pointer text-sm py-2 rounded-lg btn-bg transition-all">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pb-5 md:pb-14 lg:pb-20">
        {recommendations && recommendations.length >= 6 && (
          <Link to={"/all-recommended"}>
            <Button className="btn-bg mt-10 p-5">
              {" "}
              Show All Recommendation
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RecommendationSection;
