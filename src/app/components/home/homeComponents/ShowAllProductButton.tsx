import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ShowAllProductButton = () => {
  return (
    <div>
      <Link to={"/all-product"}>
        <Button className="btn-bg mt-10 p-5 cursor-pointer">
          {" "}
          Show All Product
        </Button>
      </Link>
    </div>
  );
};

export default ShowAllProductButton;
