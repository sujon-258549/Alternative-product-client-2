import { Link } from "react-router";

export function Footer() {
  return (
    <footer style={{ boxShadow: "2px 2px 25px #fff" }} className="py-10 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex gap-1">
              {" "}
              <img
                src="https://i.ibb.co.com/Z6Yz672w/image-removebg-preview-2.png"
                className="max-h-10"
                alt="logo"
              />
              <span className="text-3xl font-bold text-white">Product</span>
            </h3>
            <p className="text-sm text-muted-foreground text-white">
              Explore 1000+ alternative products for startups, side projects,
              and businesses—covering tools for design, marketing, development,
              analytics, CRM, productivity, teamwork, automation, and more to
              build, grow, and scale smartly.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              {["Overview", "Pricing", "Marketplace", "Features"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-sm text-white text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {["About", "Team", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-white text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {["Help", "Sales", "Advertise", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground text-white hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white text-muted-foreground">
            © 2024 Shadcnblocks.com. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-sm text-white text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              to="#"
              className="text-sm text-white text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
