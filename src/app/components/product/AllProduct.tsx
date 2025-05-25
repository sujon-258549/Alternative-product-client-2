import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
const datas = [
  {
    productName: "Wireless Earbuds Pro",
    brandName: "SoundBeats",
    price: 89.99,
    originalPrice: 119.99,
    currency: "USD",
    description:
      "Premium wireless earbuds with active noise cancellation and 24hr battery life.",
    shortDescription: "ANC wireless earbuds",
    productUrl:
      "https://img.freepik.com/free-photo/green-wireless-earbuds_53876-97332.jpg",
    isInStock: true,
    categories: "Electronics",
    weight: 50,
    isDigital: false,
  },
  {
    productName: "Yoga Mat (Eco-Friendly)",
    brandName: "FlexiMat",
    price: 29.95,
    originalPrice: 39.99,
    currency: "USD",
    description:
      "Non-slip yoga mat made from recycled materials with carrying strap.",
    shortDescription: "Eco yoga mat",
    productUrl:
      "https://img.freepik.com/free-photo/green-yoga-mat_23-2149234203.jpg",
    isInStock: true,
    categories: "Fitness",
    weight: 1200,
    isDigital: false,
  },
  {
    productName: "Smart Plant Pot",
    brandName: "UrbanGrow",
    price: 49.99,
    currency: "USD",
    description:
      "Self-watering smart pot with moisture sensors and app connectivity.",
    shortDescription: "IoT plant pot",
    productUrl:
      "https://img.freepik.com/free-photo/smart-plant-pot_23-2149234205.jpg",
    isInStock: true,
    categories: "Home",
    weight: 800,
    isDigital: false,
  },
  {
    productName: "Premium VPN Subscription",
    brandName: "CyberShield",
    price: 59.99,
    originalPrice: 79.99,
    currency: "USD",
    description:
      "1-year subscription for ultra-fast VPN service with global servers.",
    shortDescription: "Annual VPN access",
    productUrl:
      "https://img.freepik.com/free-vector/green-server-room-background_23-2149234207.jpg",
    isInStock: true,
    categories: "Digital Services",
    weight: 0,
    isDigital: true,
  },
  {
    productName: "Ergonomic Keyboard",
    brandName: "TypeEasy",
    price: 79.95,
    currency: "USD",
    description:
      "Split-design mechanical keyboard with wrist support and RGB lighting.",
    shortDescription: "Ergo mechanical keyboard",
    productUrl:
      "https://img.freepik.com/free-photo/green-ergonomic-keyboard_23-2149234209.jpg",
    isInStock: true,
    categories: "Electronics",
    weight: 950,
    isDigital: false,
  },
  {
    productName: "Reusable Coffee Cup",
    brandName: "EcoCup",
    price: 14.99,
    originalPrice: 19.99,
    currency: "USD",
    description:
      "Insulated stainless steel cup with leak-proof lid (350ml capacity).",
    shortDescription: "Thermal travel mug",
    productUrl:
      "https://img.freepik.com/free-photo/green-reusable-cup_23-2149234211.jpg",
    isInStock: true,
    categories: "Kitchen",
    weight: 300,
    isDigital: false,
  },
  {
    productName: "Fitness Tracker Band",
    brandName: "ActiveLife",
    price: 39.99,
    originalPrice: 149.99,
    currency: "USD",
    description:
      "Water-resistant activity tracker with heart rate monitor and OLED display.",
    shortDescription: "Basic fitness band",
    productUrl:
      "https://img.freepik.com/free-photo/green-fitness-band_23-2149234213.jpg",
    isInStock: true,
    categories: "Wearables",
    weight: 25,
    isDigital: false,
  },
  {
    productName: "Online Photography Course",
    brandName: "PhotoMaster",
    price: 99.99,
    originalPrice: 149.99,
    currency: "USD",
    description:
      "12-week digital course covering composition, lighting, and editing.",
    shortDescription: "Digital photography class",
    productUrl:
      "https://img.freepik.com/free-vector/green-camera-lens-background_23-2149234215.jpg",
    isInStock: true,
    categories: "Education",
    weight: 0,
    isDigital: true,
  },
  {
    productName: "Air Purifier",
    brandName: "PureAir",
    price: 129.99,
    currency: "USD",
    description:
      "HEPA filter air purifier for rooms up to 40m² with smart sensors.",
    shortDescription: "Smart air purifier",
    productUrl:
      "https://img.freepik.com/free-photo/green-air-purifier_23-2149234217.jpg",
    isInStock: true,
    categories: "Home Appliances",
    weight: 3500,
    isDigital: false,
  },
  {
    productName: "Wireless Car Charger",
    brandName: "AutoCharge",
    price: 24.99,
    originalPrice: 34.99,
    currency: "USD",
    description: "15W fast charging pad with anti-slip surface for vehicles.",
    shortDescription: "Car wireless charger",
    productUrl:
      "https://img.freepik.com/free-photo/green-car-charger_23-2149234219.jpg",
    isInStock: true,
    categories: "Automotive",
    weight: 150,
    isDigital: false,
  },
  {
    productName: "Resistance Band Set",
    brandName: "FlexiFit",
    price: 19.99,
    currency: "USD",
    description: "5-piece set with varying resistance levels (light to heavy).",
    shortDescription: "Workout bands",
    productUrl:
      "https://img.freepik.com/free-photo/green-resistance-bands_23-2149234221.jpg",
    isInStock: true,
    categories: "Fitness",
    weight: 500,
    isDigital: false,
  },
  {
    productName: "Blender Bottle",
    brandName: "MixIt",
    price: 9.99,
    originalPrice: 14.99,
    currency: "USD",
    description: "700ml shaker bottle with stainless steel mixer ball.",
    shortDescription: "Protein shaker",
    productUrl:
      "https://img.freepik.com/free-photo/green-blender-bottle_23-2149234223.jpg",
    isInStock: true,
    categories: "Kitchen",
    weight: 200,
    isDigital: false,
  },
  {
    productName: "Digital Cookbook Subscription",
    brandName: "ChefBox",
    price: 7.99,
    currency: "USD",
    description:
      "Monthly access to 100+ recipes with step-by-step video guides.",
    shortDescription: "Monthly recipe access",
    productUrl:
      "https://img.freepik.com/free-vector/green-kitchen-background_23-2149234225.jpg",
    isInStock: true,
    categories: "Digital Services",
    weight: 0,
    isDigital: true,
  },
  {
    productName: "Desk Organizer",
    brandName: "NeatSpace",
    price: 22.5,
    currency: "USD",
    description: "Bamboo desktop organizer with compartments for stationery.",
    shortDescription: "Wooden desk organizer",
    productUrl:
      "https://img.freepik.com/free-photo/green-desk-organizer_23-2149234227.jpg",
    isInStock: true,
    categories: "Office",
    weight: 600,
    isDigital: false,
  },
  {
    productName: "Sleep Headphones",
    brandName: "DreamPhones",
    price: 34.99,
    originalPrice: 49.99,
    currency: "USD",
    description: "Ultra-thin Bluetooth headphones built into a sleep mask.",
    shortDescription: "Bedtime headphones",
    productUrl:
      "https://img.freepik.com/free-photo/green-sleep-headphones_23-2149234229.jpg",
    isInStock: true,
    categories: "Electronics",
    weight: 120,
    isDigital: false,
  },
];
const AllProduct = () => {
  return (
    <section className="mb-10 md:mb-20">
      <div className="container">
        <h1 className="text-3xl btn-bg rounded-md mb-5 md:mb-10 text-white md:text-5xl font-bold text-center py-5 md:py-10 mt-10">
          All Product
        </h1>
        <div className="flex gap-5">
          <Card className="p-6 space-y-8 bg-white">
            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <Slider
                defaultValue={[0, 425955]}
                min={0}
                max={425955}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0</span>
                <span>425,955</span>
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-3">
              <h3 className="font-medium">Availability</h3>
              <div className="space-y-2">
                {["In Stock", "Pre Order", "Up Coming"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox id={`availability-${option}`} />
                    <Label htmlFor={`availability-${option}`}>{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Processor */}
            <div className="space-y-3">
              <h3 className="font-medium">Processor</h3>
              <div className="space-y-2">
                {["Intel", "AMD", "Apple"].map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`processor-${brand}`} />
                    <Label htmlFor={`processor-${brand}`}>{brand}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* RAM */}
            <div className="space-y-3">
              <h3 className="font-medium">RAM</h3>
              <div className="space-y-2">
                {["2 GB", "4 GB", "8 GB", "16 GB", "32 GB", "64 GB"].map(
                  (ram) => (
                    <div key={ram} className="flex items-center space-x-2">
                      <Checkbox id={`ram-${ram}`} />
                      <Label htmlFor={`ram-${ram}`}>{ram}</Label>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* SSD */}
            <div className="space-y-3">
              <h3 className="font-medium">SSD</h3>
              <div className="space-y-2">
                {["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"].map((ssd) => (
                  <div key={ssd} className="flex items-center space-x-2">
                    <Checkbox id={`ssd-${ssd}`} />
                    <Label htmlFor={`ssd-${ssd}`}>{ssd}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphics */}
            <div className="space-y-3">
              <h3 className="font-medium">Graphics</h3>
              <div className="space-y-2">
                {[
                  "Shared / Integrated",
                  "Dedicated 2GB",
                  "Dedicated 4GB",
                  "Dedicated 6GB",
                  "Dedicated 8GB",
                  "Dedicated 12GB",
                  "Dedicated 16GB",
                  "Dedicated 24GB",
                  "Dedicated 32GB",
                ].map((gpu) => (
                  <div key={gpu} className="flex items-center space-x-2">
                    <Checkbox id={`gpu-${gpu}`} />
                    <Label htmlFor={`gpu-${gpu}`}>{gpu}</Label>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className=" mb-5 md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
            {datas.slice(0, 12).map((product, idx) => (
              <div
                key={idx}
                className="border rounded-2xl bg-[#424242] p-3 shadow hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <img
                  src={product.productUrl}
                  alt={product.productName}
                  className="w-full h-48 md:h-44 lg:h-32 object-cover rounded-xl mb-3"
                />
                <h2 className="text-lg font-semibold line-clamp-1 text-white">
                  {product.productName.slice(0, 10)}
                </h2>
                <p className="text-sm text-gray-300 mb-1">
                  {product.brandName}
                </p>
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
                <Button className="mt-2 w-full btn-bg text-sm py-2 rounded-lg  transition-all">
                  Recommended
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
