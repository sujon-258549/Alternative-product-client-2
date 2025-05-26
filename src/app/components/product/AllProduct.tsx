import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useMemo, useState } from "react";
import { products } from "./Category";

const AllProduct = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(true);
  const [digital, setDigital] = useState(true);

  // Extract unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.categories)));
  }, []);

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Price filter
      const withinPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.categories);

      // Stock filter
      const matchesStock = !inStockOnly || product.isInStock;
      const matchesDigital = !digital || product.isDigital;

      return (
        withinPriceRange && matchesCategory && matchesStock && matchesDigital
      );
    });
  }, [priceRange, selectedCategories, inStockOnly, digital]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Calculate max price for slider
  const maxPrice = Math.max(...products.map((p) => p.price), 10);

  return (
    <section className="mb-10 md:mb-20">
      <div className="container">
        <h1 className="text-3xl btn-bg rounded-md mb-5 md:mb-10 text-white md:text-5xl font-bold text-center py-5 md:py-10 mt-10">
          All Products
        </h1>
        <div className="flex gap-5">
          {/* Filters Sidebar */}
          <Card className="p-6 space-y-8 bg-[#424242] text-white min-w-[250px]">
            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <Slider
                value={priceRange}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
                min={0}
                max={maxPrice}
                step={1}
                className="w-full bg-yellow-500 text-yellow-200 font-bold rounded-md"
              />
              {/* <SliderTrack className="bg-transparent h-3 rounded-full">
                <SliderRange className="bg-[#f24822] h-3 rounded-full" />
              </SliderTrack> */}

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0].toFixed(2)}</span>
                <span>${priceRange[1].toFixed(2)}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h3 className="font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label htmlFor={`category-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-3">
              <h3 className="font-medium">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={inStockOnly}
                    onCheckedChange={() => setInStockOnly(!inStockOnly)}
                  />
                  <Label htmlFor="in-stock">In Stock Only</Label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium">Digital</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-Digital"
                    checked={digital}
                    onCheckedChange={() => setDigital(!digital)}
                  />
                  <Label htmlFor="in-stock">In Digital Only</Label>
                </div>
              </div>
            </div>
          </Card>

          {/* Products Grid */}
          <div className="mb-5 md:mb-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
            {filteredProducts.slice(0, 8).map((product) => (
              <div
                key={product.productName}
                className="border rounded-2xl h-[385px] bg-[#424242] p-3 shadow hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <img
                  src={product.productUrl}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <h2 className="text-lg font-semibold line-clamp-1 text-white">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-300 mb-1">
                  {product.brandName}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-300 line-clamp-2 my-2 flex-1">
                  {product.shortDescription}
                </p>
                <Button className="mt-2 w-full btn-bg text-sm py-2 rounded-lg transition-all">
                  {product.isDigital ? "View Details" : "Add to Cart"}
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
