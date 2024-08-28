import { Link } from "react-router-dom";
import logoImage from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className={`h-8  flex items-center gap-2`}>
        <img src={logoImage} alt="Logo" className="w-full h-full" />
        <h2 className="uppercase text-2xl font-semibold text-gray-100">
          Gearshift
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
