import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { IoEye, IoEyeOff } from "react-icons/io5";
import Logo from "@/components/shared/Logo/Logo";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};
const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isConfirmShowPassword, setIsConfirmShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center my-14">
      <div className="rounded-xl shadow-custom-light shadow-gray-600 p-6 md:py-8">
        <div className="max-w-8 mx-auto flex items-center justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-gray-100 text-2xl font-semibold text-center mb-8">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name:</Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
            </div>
            {errors?.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email:</Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            {errors?.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div>
            <div className="grid w-full items-center gap-1.5 relative">
              <Label htmlFor="password">Password:</Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0"
                type={`${isShowPassword ? "text" : "password"}`}
                id="password"
                {...register("password", { required: true })}
              />
              <p
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="absolute right-2 top-[67%] -translate-y-1/2 text-gray-100 cursor-pointer p-1 "
              >
                {isShowPassword ? <IoEye /> : <IoEyeOff />}
              </p>
            </div>
            {errors?.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>
          {/* Confirm password */}
          <div>
            <div className="grid w-full items-center gap-1.5 relative">
              <Label htmlFor="confirmPassword">Confirm Password:</Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0"
                type={`${isConfirmShowPassword ? "text" : "password"}`}
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
              />
              <p
                onClick={() => setIsConfirmShowPassword(!isConfirmShowPassword)}
                className="absolute right-2 top-[67%] -translate-y-1/2 text-gray-100 cursor-pointer p-1 "
              >
                {isConfirmShowPassword ? <IoEye /> : <IoEyeOff />}
              </p>
            </div>
            {errors?.confirmPassword && (
              <p className="text-red-500 text-sm">
                Confirm Password is required
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                className="w-4 h-4 rounded  focus:ring-0"
                type="checkbox"
                required
                {...register("terms", { required: true })}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept{" "}
                <Link
                  to="/terms-and-condition"
                  className="text-orange-500 font-semibold"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>
            {errors?.terms && (
              <p className="text-red-500 text-sm mt-2">
                Terms & Conditions is required
              </p>
            )}
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Sign Up
          </Button>
          <p className="text-gray-100">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 font-semibold">
              Login now!
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
