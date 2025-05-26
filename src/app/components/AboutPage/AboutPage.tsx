import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users,
  Globe,
  Shield,
  Clock,
  Leaf,
  Globe2,
  Cpu,
  GitBranch,
  Lock,
  Cloud,
  Server,
  Box,
  Network,
  Code2,
  Database,
  Check,
} from "lucide-react";
import { Link } from "react-router";

const AboutPage = () => {
  const platformStats = [
    { value: "2018", label: "Founded", icon: <Clock className="w-5 h-5" /> },
    {
      value: "2.4M+",
      label: "Active users",
      icon: <Users className="w-5 h-5" />,
    },
    { value: "86", label: "Countries", icon: <Globe2 className="w-5 h-5" /> },
    {
      value: "100%",
      label: "Open source",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      value: "240+",
      label: "Contributors",
      icon: <GitBranch className="w-5 h-5" />,
    },
    {
      value: "Zero",
      label: "Carbon footprint",
      icon: <Leaf className="w-5 h-5" />,
    },
  ];

  const platformFeatures = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Decentralized Architecture",
      description:
        "No single point of failure with our distributed node network",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy by Design",
      description: "End-to-end encryption and zero-knowledge proofs",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Sustainable Cloud",
      description: "100% renewable energy-powered infrastructure",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Interoperable",
      description: "Seamless integration with existing ecosystems",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Modular Components",
      description: "Customize your stack with plug-and-play modules",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Sovereignty",
      description: "You own your data, always",
    },
  ];

  const governancePrinciples = [
    {
      title: "Transparent",
      description: "All decisions and development happen in the open",
    },
    {
      title: "Inclusive",
      description: "Anyone can participate regardless of technical skill",
    },
    {
      title: "Progressive",
      description: "Continuous improvement through community feedback",
    },
    {
      title: "Sustainable",
      description: "Long-term thinking over short-term gains",
    },
  ];

  return (
    <div className="">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#424242] to-[#241f1f] text-white py-24 md:py-32">
        <div className="container text-center relative z-10 px-4">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1 mb-6">
            <span className="text-sm font-medium">
              The Alternative Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building the Future{" "}
            <span className="text-yellow-400">Differently</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            An open, sustainable, and community-governed platform that puts
            people before profits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/about-documentation"}>
              {" "}
              <Button className="px-8 py-4 btn-bg cursor-pointer">
                Explore Documentation
              </Button>
            </Link>
            <Link to={"https://www.facebook.com/groups/910922460161297/"}>
              <Button variant="outline" className="px-8 py-4 cursor-pointer">
                Join Our Community
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      </section>

      {/* 2. Mission Statement */}
      <section className="py-16 md:py-20 mx-4">
        <div className="max-w-5xl mx-auto bg-[#424242] text-white rounded-2xl shadow-sm p-5 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="bg-green-50 p-1 rounded-sm inline-flex">
                <img
                  src="Our Radical Proposition.png"
                  className="rounded-sm"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Radical Proposition
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                In a world dominated by extractive platforms, we're building an
                alternative that returns power to users. Our platform is
                community-owned, open-source, and designed for sustainability
                from the ground up.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">No surveillance</span>
                </div>
                <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <Leaf className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Carbon negative</span>
                </div>
                <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">User-governed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Platform Stats */}
      <section className=" md:py-10 lg:py-16 ">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-[#424242] rounded-xl"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-300 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Stack */}
      <section className="py-20 ">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white font-bold mb-4">
              Radically Different Technology
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Built on principles of decentralization, privacy, and
              sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {platformFeatures.map((feature, index) => (
              <Card
                key={index}
                className="py-5 px-3  hover:shadow-lg bg-[#424242] text-white transition-all hover:-translate-y-1 border-0"
              >
                <div className="w-10 h-10 rounded-full mx-auto bg-green-50 flex items-center justify-center text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-[16px] font-bold text-center ">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center text-sm -mt-3">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Governance Model */}
      <section className=" pb-20 md:py-20 ">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="/government.png"
                alt="Governance model diagram"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl text-white font-bold mb-6">
                Community-Led Governance
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Unlike traditional platforms, we're governed by our users
                through a transparent decentralized autonomous organization
                (DAO). Every voice matters in shaping our future.
              </p>

              <div className="space-y-4">
                {governancePrinciples.map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-200">
                        {principle.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700">
                Participate in Governance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sustainability */}
      <section className=" pt-10 md:py-10 lg:pt-0 bg-gradient-to-br from-[#424242] to-[#241f1f] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Designed for the Planet
              </h2>
              <p className="text-lg text-green-100 mb-6">
                We've built the first truly sustainable alternative platform
                with a negative carbon footprint. Our infrastructure runs on
                100% renewable energy and actively removes CO₂ from the
                atmosphere.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Leaf className="w-6 h-6 text-green-300 mr-4" />
                  <span>200% renewable energy usage</span>
                </div>
                <div className="flex items-center">
                  <Server className="w-6 h-6 text-green-300 mr-4" />
                  <span>Energy-efficient protocol design</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-green-300 mr-4" />
                  <span>1% of revenue funds environmental projects</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/sustainability-chart.png"
                alt="Sustainability metrics"
                className="w-full h-auto -mt-12 md:-mt-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-20 ">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#424242] to-[#241f1f] text-white rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Alternative?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands who've already left extractive platforms behind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/login"}>
                {" "}
                <Button className="px-8 py-4 btn-bg text-yellow-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
              <a href="https://www.facebook.com/groups/910922460161297/">
                <Button
                  variant="outline"
                  className="px-8 py-4 text-white border-white hover:bg-white/10"
                >
                  Talk to Our Community
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
