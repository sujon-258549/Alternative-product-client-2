import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NoProductFound = ({ categoryName }: { categoryName?: string }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg text-center bg-gradient-to-br from-purple-900/80 to-indigo-900/80 rounded-3xl p-8 shadow-2xl border border-indigo-500/30 overflow-hidden relative"
      >
        {/* Floating bubbles background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Glowing center element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg mb-6">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-200">
            Oops! Nothing Here
          </h3>

          <p className="mt-3 text-indigo-100/90 text-lg">
            {categoryName
              ? `The "${categoryName}" galaxy seems empty right now.`
              : "Our cosmic inventory is currently void of matching items."}
          </p>

          <div className="mt-8">
            <Link to="/">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10">Explore Other Galaxies</span>
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 rounded-full" />
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-indigo-200/70">
            Or try adjusting your cosmic filters
          </p>
        </div>

        <style>{`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default NoProductFound;
