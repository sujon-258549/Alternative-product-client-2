import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import LoadingSpinner from "../Common/LoadingSpinner";
import "../product/allProduct.css";
import ResponsivePagination from "react-responsive-pagination";
import { Link } from "react-router";
import { categories } from "../product/category";
import { useGetAllRecommendedQuery } from "@/redux/features/recommended/recommended";
interface Product {
  _id: string;
  productName: string;
  brandName: string;
  price: number;
  originalPrice?: number;
  recommendationImage: string;
  shortDescription: string;
  categories: string;
  isInStock: boolean;
  isDigital: boolean;
}

interface QueryParam {
  name: string;
  value: string | number | boolean;
}

const PRICE_RANGE_MIN = 0;
const PRICE_RANGE_MAX = 50000;

const AllRecommended = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCategoriesData, setSelectedCategoriesData] = useState<
    QueryParam[]
  >([]);
  const [digitalOnly, setDigitalOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, maxPrice] = priceRange;
  const [page, setCurrentPage] = useState<string>("1");
  const limit = "8";
  console.log(minPrice, maxPrice);

  // Prepare query parameters
  const queryParams: QueryParam[] = [
    // { name: "minPrice", value: minPrice },
    // { name: "maxPrice", value: maxPrice },
    { name: "searchTerm", value: searchQuery },
    { name: "page", value: page },
    { name: "limit", value: limit },
    ...(digitalOnly ? [{ name: "isDigital", value: true }] : []),
    ...selectedCategoriesData,
  ];

  const {
    data: productsData,
    isLoading,
    error,
  } = useGetAllRecommendedQuery(queryParams);

  const products = (productsData?.data as unknown as Product[]) || [];
  const totalPage = productsData?.meta.totalPage;

  // Update category query params when selected categories change
  useEffect(() => {
    const categoryParams = selectedCategories.map((category) => ({
      name: "categories",
      value: category,
    }));
    setSelectedCategoriesData(categoryParams);
  }, [selectedCategories]);
  console.log(selectedCategories);
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    setSearchQuery(searchInput?.value || "");
  };

  const handleDigitalFilterChange = (checked: boolean | string) => {
    setDigitalOnly(checked === true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-10">
        Error loading products. Please try again later.
      </div>
    );
  }

  return (
    <section className="mb-10 md:mb-20">
      <div className="container">
        <h1 className="text-3xl btn-bg rounded-md mb-5 md:mb-10 text-white md:text-5xl font-bold text-center py-5 md:py-10 mt-10">
          All Recommendation
        </h1>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Filters Sidebar */}
          <aside className="md:min-w-[250px] order-2 md:order-1">
            <Card className="p-6 space-y-8 bg-[#424242] text-white">
              {/* Price Range Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Price Range</h3>
                <Slider
                  value={priceRange}
                  onValueChange={(value) =>
                    setPriceRange(value as [number, number])
                  }
                  min={PRICE_RANGE_MIN}
                  max={PRICE_RANGE_MAX}
                  step={100}
                  className="w-full custom-slider"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Categories Filter */}
              <div className="space-y-3 max-h-[560px] overflow-y-auto">
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

              {/* Digital Filter */}
              <div className="space-y-3">
                <h3 className="font-medium">Digital</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="digital-only"
                    checked={digitalOnly}
                    onCheckedChange={handleDigitalFilterChange}
                  />
                  <Label htmlFor="digital-only">Digital Only</Label>
                </div>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 order-1 md:order-2">
            {/* Search Form */}
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-md mx-auto mb-5 md:mb-10 lg:mb-16"
            >
              <Label htmlFor="product-search" className="sr-only">
                Search products
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  name="search"
                  type="search"
                  id="product-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search products..."
                  defaultValue={searchQuery}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 btn-bg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Products Grid */}
            <div className="mb-5  md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
              {products.length > 0 ? (
                products.slice(0, 12).map((product, idx) => (
                  <div
                    key={`${product._id}-${idx}`}
                    className="rounded-2xl h-[320px] bg-[#424242] p-3 shadow hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <img
                      src={product.recommendationImage}
                      alt={product.productName}
                      className="w-full h-48 md:h-44 lg:h-32 object-cover rounded-xl mb-3"
                      loading="lazy"
                    />
                    <h2 className="text-lg font-semibold line-clamp-1 text-white">
                      {product.productName}
                    </h2>
                    <p className="text-sm text-gray-300 mb-1">
                      {product.brandName.slice(0, 15)}
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
                      {product.shortDescription.slice(0, 15)}
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
                <div className="col-span-full">
                  <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-[#424242] rounded-2xl text-center">
                    {/* Animated sad face icon */}
                    <div className="relative mb-6">
                      <svg
                        className="w-24 h-24 text-gray-300 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        {/* Tear drop */}
                        <path
                          fill="currentColor"
                          d="M12 18c0 .5-.3.9-.7 1.2-.4.3-1 .3-1.4 0-.4-.3-.7-.7-.7-1.2h3z"
                          className="animate-pulse opacity-70"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      No Recommendations Found
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-md mx-auto">
                      We couldn't find any products matching your filters. Try
                      adjusting your search criteria or browse our full
                      collection.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => {
                          setSelectedCategories([]);
                          setPriceRange([PRICE_RANGE_MIN, PRICE_RANGE_MAX]);
                          setDigitalOnly(false);
                          setSearchQuery("");
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Clear All Filters
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="text-white border-gray-400 hover:bg-gray-700"
                      >
                        <Link to="/all-recommended">Browse All Products</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <ResponsivePagination
                current={parseInt(page)}
                total={totalPage ?? 1}
                onPageChange={(page) => setCurrentPage(page.toString())}
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AllRecommended;
