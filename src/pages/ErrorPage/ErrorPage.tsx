import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404.gif";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 flex flex-col items-center justify-center py-8">
      <div className="max-w-lg">
        <img className="w-full h-full " src={NotFoundImage} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold text-gray-100">Page Not Found</h2>
        <Link to="/">
          <Button className="bg-orange-500 hover:bg-orange-600 mt-4">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
