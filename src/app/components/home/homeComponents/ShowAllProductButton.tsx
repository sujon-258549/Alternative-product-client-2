import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ShowAllProductButton = () => {
  return (
    <div>
      <Link to={"/allproduct"}>
        <Button className="bg-yellow-400 text-black mt-10 p-5">
          {" "}
          Show All Product
        </Button>
      </Link>
    </div>
  );
};

export default ShowAllProductButton;
