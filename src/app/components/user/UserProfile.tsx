import { useGetMeQuery } from "@/redux/features/auth/authApi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUser,
  FaEdit,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import LoadingSpinner from "../Common/LoadingSpinner";
import { TUser } from "@/types/user";

const UserProfile = () => {
  // Define a type for your user data response

  type GetMeResponse = {
    data: TUser;
  };

  const { data: userData, isLoading } = useGetMeQuery(undefined) as {
    data?: GetMeResponse;
    isLoading: boolean;
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const user = userData?.data;
  console.log(user);
  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-btn">
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-300">Loading your profile...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-gray-700 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-600 border-opacity-30"
      >
        {/* Profile Header with Gradient */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="relative w-32 h-32 rounded-full border-4 border-white/30 shadow-2xl mb-4 md:mb-0 md:mr-6">
              <img
                src={user.profileImage || "/default-avatar.jpg"}
                alt={`${user.fullName}'s profile`}
                className="rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                {user.fullName}
              </h1>
              <div className="flex items-center justify-center md:justify-start mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/20 text-gray-100">
                  <FaUser className="mr-1" />
                  {user.role}
                </span>
              </div>
              <div className="flex justify-center md:justify-start mt-4 space-x-3">
                {user.socialMesaLink?.facebook && (
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={user.socialMesaLink.facebook}
                      target="_blank"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaFacebook size={18} />
                    </Link>
                  </motion.div>
                )}
                {user.socialMesaLink?.twitter && (
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={user.socialMesaLink.twitter}
                      target="_blank"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaTwitter size={18} />
                    </Link>
                  </motion.div>
                )}
                {user.socialMesaLink?.linkedin && (
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={user.socialMesaLink.linkedin}
                      target="_blank"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaLinkedin size={18} />
                    </Link>
                  </motion.div>
                )}
                {user.socialMesaLink?.instagram && (
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={user.socialMesaLink.instagram}
                      target="_blank"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaInstagram size={18} />
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <span className="w-1 h-6 bg-purple-500 mr-3 rounded-full"></span>
              Personal Information
            </h2>

            <div className="flex items-start p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <div className="bg-purple-500/10 p-2 rounded-lg mr-3">
                <FaBirthdayCake className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wider">
                  Date of Birth
                </p>
                <p className="text-white font-medium">
                  {new Date(user.dateOfBirth).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <div className="bg-blue-500/10 p-2 rounded-lg mr-3">
                <FaEnvelope className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-white font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <div className="bg-green-500/10 p-2 rounded-lg mr-3">
                <FaPhone className="text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-white font-medium">{user.phone}</p>
                {user.secondaryPhone && (
                  <p className="text-white font-medium mt-1">
                    {user.secondaryPhone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <div className="bg-amber-500/10 p-2 rounded-lg mr-3">
                <FaMapMarkerAlt className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wider">
                  Address
                </p>
                <p className="text-white font-medium">
                  {user.address?.village}, {user.address?.post}
                  <br />
                  {user.address?.subDistrict}, {user.address?.district}
                  <br />
                  {user.address?.postCode}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <span className="w-1 h-6 bg-indigo-500 mr-3 rounded-full"></span>
              Account Information
            </h2>

            <div className="p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <p className="text-xs text-gray-300 uppercase tracking-wider">
                Account Status
              </p>
              <div className="flex items-center mt-1">
                <span
                  className={`h-2 w-2 rounded-full mr-2 ${user.isBlock ? "bg-red-500 animate-pulse" : "bg-green-500"}`}
                ></span>
                <p
                  className={`font-medium ${user.isBlock ? "text-red-400" : "text-green-400"}`}
                >
                  {user.isBlock ? "Blocked" : "Active"}
                </p>
              </div>
            </div>

            <div className="p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <p className="text-xs text-gray-300 uppercase tracking-wider">
                Gender
              </p>
              <p className="text-white font-medium capitalize">{user.gender}</p>
            </div>

            <div className="p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <p className="text-xs text-gray-300 uppercase tracking-wider">
                Member Since
              </p>
              <p className="text-white font-medium">
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="p-3 bg-gray-600/30 rounded-lg hover:bg-gray-600/50 transition-all duration-200">
              <p className="text-xs text-gray-300 uppercase tracking-wider">
                Last Updated
              </p>
              <p className="text-white font-medium">
                {new Date(user.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-gray-700/50 border-t border-gray-600/30 flex flex-wrap justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 btn-bg text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
          >
            <FaEdit />
            Edit Profile
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 border border-gray-500 text-white rounded-lg hover:bg-gray-600/50 transition-all flex items-center gap-2"
          >
            <FaLock />
            Change Password
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
