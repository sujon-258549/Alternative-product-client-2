import { useState } from "react";
import { useDeleteMyProductMutation } from "@/redux/features/product/product";
import LoadingSpinner from "../Common/LoadingSpinner";
import ResponsivePagination from "react-responsive-pagination";
import { FiExternalLink } from "react-icons/fi";
import Swal from "sweetalert2";
import ".././product/pagination.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucideDelete, Pencil } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router";
import { categories } from "../product/category";
import { useGetMyRecommendedQuery } from "@/redux/features/recommended/recommended";

const MyRecommended = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [digitalFilter, setDigitalFilter] = useState<string>();
  const [page, setCurrentPage] = useState<string>("1");
  const limit = "5";

  // handel isDigital
  console.log(page.toString());

  // const [deleteProduct] = useDeleteProductMutation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search =
      (form.elements.namedItem("search") as HTMLInputElement)?.value || "";
    setSearchQuery(search);
  };

  const [deleteMyProduct] = useDeleteMyProductMutation();

  const handleDelete = async (productId: string) => {
    Swal.fire({
      title: "Confirm Deletion",
      html: `
      <div class="text-center">
        <svg class="w-20 h-20 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <h3 class="text-xl font-bold text-gray-800 mt-4">Are you sure?</h3>
        <p class="text-gray-600 mt-2">This action cannot be undone</p>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg mx-2 transition-all duration-300",
        cancelButton:
          "bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg mx-2 transition-all duration-300",
        popup: "rounded-xl border-0 shadow-xl",
      },
      backdrop: `
      rgba(0,0,0,0.4)
      url("/images/trash-icon-animated.gif")
      center top
      no-repeat
    `,
      showClass: {
        popup: "animate__animated animate__fadeIn animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut animate__faster",
      },
      background: "#ffffff",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      reverseButtons: true,
      focusConfirm: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteMyProduct(productId);
        Swal.fire({
          title: "Deleted!",
          html: `
          <div class="text-center">
            <svg class="w-20 h-20 mx-auto text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 class="text-xl font-bold text-gray-800 mt-4">Successfully deleted!</h3>
            <p class="text-gray-600 mt-2">The item has been removed</p>
          </div>
        `,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          background: "#ffffff",
          showClass: {
            popup: "animate__animated animate__zoomIn animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__zoomOut animate__faster",
          },
        });
      }
    });
  };

  const queryParams = [{ name: "searchTerm", value: searchQuery }];
  console.log(queryParams);
  if (selectedCategory !== "" && selectedCategory !== "All-Category") {
    queryParams.push({ name: "categories", value: selectedCategory });
  }
  if (page) {
    queryParams.push({
      name: "page",
      value: page.toString(),
    });
  }
  if (limit) {
    queryParams.push({
      name: "limit",
      value: limit.toString(),
    });
  }
  if (digitalFilter !== "all" && digitalFilter !== undefined) {
    queryParams.push({
      name: "isDigital",
      // @ts-expect-error string
      value: digitalFilter === "digital" ? true : false,
    });
  }
  console.log(digitalFilter);
  const { data: myProducts, isLoading } = useGetMyRecommendedQuery(queryParams);
  console.log(myProducts);
  const products = myProducts?.data || [];
  const totalPage = myProducts?.meta.totalPage;
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Get unique categories for filter dropdown

  // Filter products based on search and filters

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-[#424242] my-6 text-slate-200 md:my-10 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">My Products</h2>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="grid grid-cols-1  md:max-w-xl lg:max-w-7xl mx-auto lg:grid-cols-3 items-center gap-4">
            {/* Category Filter */}
            <div>
              <h2 className="text-xl font-bold mb-2">Search Fields</h2>
              <form onSubmit={handleSearchSubmit} className="w-full">
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
            </div>
            <div>
              <Label
                htmlFor="category-filter"
                className="text-xl font-bold mb-2"
              >
                Category
              </Label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger
                  className="w-full py-[25px] border-2"
                  id="category-filter"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white ">
                  {categories.map((category) => (
                    <SelectItem
                      className="bg-[#424242] mt-1 text-white hover:bg-[#424242d2] hover:text-white"
                      key={category}
                      value={category}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Digital/Physical Filter */}
            <div>
              <Label
                htmlFor="digital-filter"
                className="text-xl font-bold mb-2"
              >
                Product Type
              </Label>
              <Select onValueChange={(value) => setDigitalFilter(value)}>
                <SelectTrigger
                  id="digital-filter"
                  className="w-full py-[25px] border-2"
                >
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem
                    className="bg-[#424242] mt-1 text-white hover:bg-[#424242d2] hover:text-white"
                    value="all"
                  >
                    All
                  </SelectItem>
                  <SelectItem
                    className="bg-[#424242] mt-1 text-white hover:bg-[#424242d2] hover:text-white"
                    value="digital"
                  >
                    Digital
                  </SelectItem>
                  <SelectItem
                    className="bg-[#424242] mt-1 text-white hover:bg-[#424242d2] hover:text-white"
                    value="analog"
                  >
                    Analog
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <Table>
          <TableCaption>List of all your products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Digital</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <img
                        src={product?.recommendationImage}
                        alt={product?.productName}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{product.productName}</p>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.brandName}</TableCell>
                  <TableCell>{product.categories}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through">
                          {product.originalPrice} {product.currency}
                        </span>
                      )}
                      <span className="font-medium">
                        {product.price} {product.currency}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.isDigital
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.isDigital ? "Digital" : "Analog"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.isDigital === "true"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {product.isDigital === "true" ? "Digital" : "Physical"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={`/product-update/${product._id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                        >
                          <Pencil className="h-4 w-4 cursor-pointer mr-2" />
                          Edit
                        </Button>
                      </Link>
                      <Link to={`/my-recommended-Details/${product._id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer"
                        >
                          <FiExternalLink className="h-4  w-4 mr-2" />
                          Details
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-700 cursor-pointer"
                        size="sm"
                      >
                        <LucideDelete className="h-4 w-4 mr-2 cursor-pointer" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  No products found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div>
          <ResponsivePagination
            current={parseInt(page)}
            total={totalPage ?? 1}
            onPageChange={(page) => setCurrentPage(page.toString())}
          />
        </div>
      </div>
    </section>
  );
};

export default MyRecommended;
