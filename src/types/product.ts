// User/Author type
interface Address {
  village: string;
  district: string;
  subDistrict: string;
  post: string;
  postCode: string;
}

interface SocialMediaLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}

interface Author {
  _id: string;
  address: Address;
  createdAt: string;
  dateOfBirth: string;
  email: string;
  fullName: string;
  gender: string;
  isBlock: boolean;
  isDelete: boolean;
  password: string;
  phone: number;
  profileImage: string;
  role: string;
  secondaryPhone: number;
  socialMesaLink: SocialMediaLinks;
  updatedAt: string;
  __v: number;
}

// Product type
export interface TProduct {
  _id: string;
  authorId: Author;
  productName: string;
  brandName: string;
  price: number;
  originalPrice: number;
  currency: string;
  categories: string;
  description: string;
  shortDescription: string;
  productUrl?: string;
  recommendationImage?: string;
  isInStock: boolean;
  isDigital: boolean; // Note: This is a string in the response, but might be better as boolean
  weight: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// API Response type
export interface TProductApiResponse {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: TProduct[];
}
