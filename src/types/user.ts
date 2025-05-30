type UserInfo = {
  Id: string;
  email: string;
  exp: number; // expiration time (usually in seconds)
  iat: number; // issued at time (usually in seconds)
  role: "user" | "admin"; // adjust roles as needed
};

export type UserTokenPayload = {
  userInfo: UserInfo;
};

export type TUser = {
  meta: any;
  data: any;
  fullName: string;
  profileImage?: string;
  role: string;
  socialMesaLink?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  dateOfBirth: string;
  email: string;
  phone: string;
  secondaryPhone?: string;
  address?: {
    village?: string;
    post?: string;
    subDistrict?: string;
    district?: string;
    postCode?: string;
  };
  isBlock: boolean;
  gender: string;
  createdAt: string;
  updatedAt: string;
};
