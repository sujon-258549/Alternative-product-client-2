const RecommendationDetails = () => {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationDetails;
