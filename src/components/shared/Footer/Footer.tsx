import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

import visa from "../../../assets/images/footer/visa.svg";
import shopPay from "../../../assets/images/footer/shop-pay.svg";
import paypal from "../../../assets/images/footer/paypal.svg";
import mastercard from "../../../assets/images/footer/mastercard.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section>
      <div className="bg-top bg-cover bg-no-repeat">
        <div className="bg-black h-full pt-8">
          <div className="max-w-7xl mx-auto px-3 lg:px-0">
            {/* Footer Top */}
            <div className=" border-b py-5 border-gray-400 space-y-8 lg:flex items-center justify-between gap-10">
              {/* Subscribe */}
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-gray-200">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h3>
                <div className="flex w-full max-w-xl items-center space-x-2">
                  <Input
                    className="focus-visible:ring-offset-0  md:w-96"
                    type="email"
                    placeholder="Enter your email address..."
                  />
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 w-36"
                    type="submit"
                  >
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
              {/* Border */}
              <div className="hidden lg:block  h-16 w-[1px] border-r border-gray-400"></div>

              <div className="flex-1 flex flex-col md:flex-row justify-between gap-8 md:gap-10">
                {/* Social */}
                <div className="space-y-2 ">
                  <h3 className="font-semibold text-gray-200">JOIN US ON:</h3>
                  <div className="flex items-center gap-4">
                    <Link to="https://web.facebook.com/">
                      <svg
                        className="text-gray-200 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                      </svg>
                    </Link>
                    <Link to="https://www.instagram.com/">
                      <svg
                        className="text-gray-200 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </Link>
                    <Link to="https://www.youtube.com/">
                      <svg
                        className="text-gray-200 size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 576 512"
                      >
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                      </svg>
                    </Link>
                    <Link to="https://www.twitter.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200 size-6"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* Border */}
                <div className="hidden lg:block h-16 w-[1px] border-r border-gray-400"></div>
                {/* Contact */}
                <div>
                  <h3 className="font-semibold text-gray-200">
                    TALK TO A CAMPING EXPERT
                  </h3>
                  <div className="flex items-center font-bold text-2xl gap-1">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200 size-8"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M38.3 241.3L15.1 200.6c-9.2-16.2-8.4-36.5 4.5-50C61.4 106.8 144.7 48 256 48s194.6 58.8 236.4 102.6c12.9 13.5 13.7 33.8 4.5 50l-23.1 40.7c-7.5 13.2-23.3 19.3-37.8 14.6l-81.1-26.6c-13.1-4.3-22-16.6-22-30.4V144c-49.6-18.1-104-18.1-153.6 0v54.8c0 13.8-8.9 26.1-22 30.4L76.1 255.8c-14.5 4.7-30.3-1.4-37.8-14.6zM32 336c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V336zm0 96c0-8.8 7.2-16 16-16H80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V432zM144 320h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V336zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V336zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V432c0-8.8 7.2-16 16-16zM128 432c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V432z" />
                      </svg>
                    </p>
                    <p className="text-orange-500">123-456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* INFORMATION */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-200">ABOUT</h3>
                {/* Links */}
                <div className="flex flex-col gap-2">
                  <Link className="text-gray-400 hover:underline" to="#">
                    About Us
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Blog
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Contact
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Service
                  </Link>
                </div>
              </div>

              {/* SHIPPING */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-200">INFORMATION</h3>
                {/* Links */}
                <div className="flex flex-col gap-2">
                  <Link className="text-gray-400 hover:underline" to="#">
                    Weekly Ad
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Top Brands
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Store Service
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Promos & Coupons
                  </Link>
                </div>
              </div>
              {/* RESOURCES */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-200 uppercase">
                  terms of service
                </h3>
                {/* Links */}
                <div className="flex flex-col gap-2">
                  <Link className="text-gray-400 hover:underline" to="#">
                    Shipping Rates
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Returns & Exchanges
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Best Price Guarantee
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Product Ability & Price
                  </Link>
                </div>
              </div>
              {/* SERVICES */}
              <div>
                <h3 className="font-semibold text-gray-200">
                  PRIVACY & POLICY
                </h3>
                {/* Links */}
                <div className="flex flex-col gap-2">
                  <Link className="text-gray-400 hover:underline" to="#">
                    Helps
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Return Policy
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Customer Service
                  </Link>
                  <Link className="text-gray-400 hover:underline" to="#">
                    Shipping & Delivery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-black/85 py-7 px-3 lg:px-0">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4 md:flex-row justify-between md:items-center">
          {/* Logo */}
          <div className="md:flex justify-center items-center gap-5">
            {/* Logo */}
            <Link to="/" className="hidden lg:flex items-center gap-2">
              <img
                className="max-w-9 lg:max-w-10"
                src={logo}
                alt="mountain-image"
              />
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl uppercase">
                Gearshift
              </h2>
            </Link>
            {/* Border */}
            <div className="hidden lg:block h-12 w-[1px] border-r border-gray-400"></div>
            <p className="text-gray-400 text-sm md:text-base">
              Copyright &copy; 2024{" "}
              <span className="font-bold text-white">Gearshift</span>, All
              Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-gray-400">We accept:</p>

            <img src={visa} alt="visa" />
            <img src={paypal} alt="paypal" />
            <img src={shopPay} alt="shop-pay" />
            <img src={mastercard} alt="mastercard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
