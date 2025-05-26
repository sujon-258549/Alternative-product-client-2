import { useState } from "react";
import {
  BookOpen,
  Code,
  FileText,
  Github,
  Search,
  Key,
  Lock,
  Server,
  Zap,
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Hash,
  Network,
  Globe,
  Users,
  Shield,
  Leaf,
} from "lucide-react";

const DocumentationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Documentation categories
  const categories = [
    { id: "all", name: "All Docs", icon: <BookOpen size={18} /> },
    { id: "getting-started", name: "Getting Started", icon: <Zap size={18} /> },
    { id: "api", name: "API Reference", icon: <Code size={18} /> },
    { id: "guides", name: "User Guides", icon: <FileText size={18} /> },
    { id: "security", name: "Security", icon: <Shield size={18} /> },
    { id: "sustainability", name: "Sustainability", icon: <Leaf size={18} /> },
  ];

  // Sample documentation articles
  const articles = [
    {
      id: 1,
      title: "Platform Architecture Overview",
      description: "Learn how our decentralized infrastructure works",
      category: "getting-started",
      icon: <Network size={20} className="text-blue-500" />,
      popularity: 95,
    },
    {
      id: 2,
      title: "Authentication Methods",
      description: "Implement secure access to our API",
      category: "api",
      icon: <Key size={20} className="text-green-500" />,
      popularity: 87,
    },
    {
      id: 3,
      title: "Data Privacy Controls",
      description: "Configure your privacy settings",
      category: "guides",
      icon: <Lock size={20} className="text-purple-500" />,
      popularity: 92,
    },
    {
      id: 4,
      title: "Running Your Own Node",
      description: "Set up and maintain a network node",
      category: "getting-started",
      icon: <Server size={20} className="text-orange-500" />,
      popularity: 78,
    },
    {
      id: 5,
      title: "Carbon Neutral Operations",
      description: "How we achieve negative emissions",
      category: "sustainability",
      icon: <Leaf size={20} className="text-emerald-500" />,
      popularity: 85,
    },
    {
      id: 6,
      title: "Community Governance Guide",
      description: "Participate in platform decisions",
      category: "guides",
      icon: <Users size={20} className="text-rose-500" />,
      popularity: 88,
    },
  ];

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#424242] to-[#241f1f]  py-14">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col">
            <div className="mb-4 md:mb-0 text-center">
              <h1 className="text-3xl font-bold text-center justify-center text-white flex items-center">
                <BookOpen className="mr-2  text-yellow-600" />
                Platform Documentation
              </h1>
              <p className="text-gray-300 mt-3 text-center mb-10">
                Guides and references for building on our decentralized
                infrastructure
              </p>
            </div>
            <div className="relative mx-auto w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 text-white">
        <div className="flex flex-col lg:flex-row gap-8 my-16">
          {/* Sidebar */}
          <aside
            style={{ boxShadow: "2px 5px 10px", borderRadius: "5px" }}
            className="lg:w-64  flex-shrink-0 bg-[#424242] text-white"
          >
            <div className=" rounded-lg shadow-sm p-4 sticky top-8">
              <h2 className="font-semibold text-lg mb-4 flex items-center">
                <Hash className="mr-2 text-gray-200" />
                Categories
              </h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center w-full px-3 text-white py-2 text-sm rounded-md ${activeCategory === category.id ? "bg-yellow-600 text-black" : "hover:text-black hover:bg-gray-100 text-black"}`}
                  >
                    <span className="mr-2 ">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </nav>

              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-4 flex items-center">
                  <Users className="mr-2 text-gray-200" />
                  Community
                </h2>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-200 hover:text-blue-600 p-2 rounded hover:bg-gray-100"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Discussion Forum
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-200 hover:text-blue-600 p-2 rounded hover:bg-gray-100"
                  >
                    <Github className="mr-2 w-4 h-4" />
                    GitHub Repositories
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-300 hover:text-blue-600 p-2 rounded hover:bg-gray-100"
                  >
                    <Globe className="mr-2 w-4 h-4" />
                    Community Projects
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Documentation Content */}
          <div className="flex-1">
            {/* Popular Articles */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-yellow-400">
                  Most Popular Guides
                </h2>
                <a
                  href="#"
                  className="text-sm font-medium text-yellow-600 hover:text-yellow-800 flex items-center"
                >
                  View all <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles
                  .sort((a, b) => b.popularity - a.popularity)
                  .slice(0, 4)
                  .map((article) => (
                    <article
                      key={article.id}
                      className="bg-[#424242]  rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            {article.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-200 mb-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                              {article.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-600">
                                {
                                  categories.find(
                                    (c) => c.id === article.category
                                  )?.name
                                }
                              </span>
                              <a
                                href="#"
                                className="text-sm font-medium text-yellow-600 hover:text-yellow-800 flex items-center"
                              >
                                Read guide{" "}
                                <ChevronRight className="ml-1 w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </section>

            {/* All Articles */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                {activeCategory === "all"
                  ? "All Documentation"
                  : `${categories.find((c) => c.id === activeCategory)?.name} Articles`}
              </h2>

              {filteredArticles.length > 0 ? (
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="bg-[#424242] rounded-lg shadow-sm overflow-hidden border border-gray-200"
                    >
                      <div className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            {article.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-md font-semibold text-gray-200 mb-1">
                              {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3">
                              {article.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-700">
                                {
                                  categories.find(
                                    (c) => c.id === article.category
                                  )?.name
                                }
                              </span>
                              <a
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-800"
                              >
                                View details{" "}
                                <ChevronRight className="ml-1 w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <Search className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No articles found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-[#424242] to-[#424242] text-white max-w-4xl mx-auto px-4 rounded-md  py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need additional help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our community and support team are ready to assist you with any
            questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center">
              <MessageSquare className="mr-2 w-5 h-5" />
              Join Community Chat
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium flex items-center justify-center">
              <FileText className="mr-2 w-5 h-5" />
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default DocumentationPage;
