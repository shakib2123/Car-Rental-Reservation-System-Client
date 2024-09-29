import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { IoEye, IoEyeOff } from "react-icons/io5";
import Logo from "@/components/shared/Logo/Logo";

import { toast } from "sonner";
import { useSignUpMutation } from "@/redux/features/auth/authApi";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  terms: boolean;
};

interface IErrorData {
  message: string;
}

const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isConfirmShowPassword, setIsConfirmShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Password and Confirm Password does not match");
    }

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    const res = await signUp(userData);

    if (res?.data?.success) {
      toast.success("Registered Successfully!");
      navigate("/login");
    } else if (res?.error && "data" in res.error) {
      const errorData = res.error.data as IErrorData;
      toast.error(errorData.message);
    }
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center py-14 text-gray-100">
      <div className="rounded-xl shadow-custom-light shadow-gray-600 p-6 md:py-8">
        <div className="max-w-8 mx-auto flex items-center justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-gray-100 text-2xl font-semibold text-center mb-8">
          Create a new account!
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-[370xp] text-gray-900 dark:text-gray-100"
        >
          <div className="">
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-gray-100" htmlFor="name">
                Name:
              </Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0 "
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
              <Label className="text-gray-100" htmlFor="email">
                Email:
              </Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0 "
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
              <Label className="text-gray-100" htmlFor="password">
                Password:
              </Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0 "
                type={`${isShowPassword ? "text" : "password"}`}
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be more than 6 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password must be less than 16 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{6,16}$/,
                    message:
                      "Password must contain at least one uppercase letter and one number",
                  },
                })}
              />
              <p
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="absolute right-2 top-[67%] -translate-y-1/2 text-gray-900 dark:text-gray-100 cursor-pointer p-1 "
              >
                {isShowPassword ? <IoEye /> : <IoEyeOff />}
              </p>
            </div>
            {errors?.password && (
              <p className="text-red-500 text-sm max-w-[300px]">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm password */}
          <div>
            <div className="grid w-full items-center gap-1.5 relative">
              <Label className="text-gray-100" htmlFor="confirmPassword">
                Confirm Password:
              </Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0 "
                type={`${isConfirmShowPassword ? "text" : "password"}`}
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be more than 6 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password must be less than 16 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{6,16}$/,
                    message:
                      "Password must contain at least one uppercase letter and one number",
                  },
                })}
              />
              <p
                onClick={() => setIsConfirmShowPassword(!isConfirmShowPassword)}
                className="absolute right-2 top-[67%] -translate-y-1/2 text-gray-900 dark:text-gray-100 cursor-pointer p-1 "
              >
                {isConfirmShowPassword ? <IoEye /> : <IoEyeOff />}
              </p>
            </div>
            {errors?.confirmPassword && (
              <p className="text-red-500 text-sm max-w-[300px]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-gray-100" htmlFor="phone">
                Phone:
              </Label>
              <Input
                className="md:w-80 focus-visible:ring-offset-0 "
                type="phone"
                id="phone"
                {...register("phone", { required: true })}
              />
            </div>
            {errors?.phone && (
              <p className="text-red-500 text-sm">Phone is required</p>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <input
                id="terms "
                className="w-4 h-4 rounded  focus:ring-0"
                type="checkbox"
                required
                {...register("terms", { required: true })}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-100"
              >
                Accept{" "}
                <Link
                  to="/terms-and-conditions"
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
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Sign Up
          </Button>
          <div>
            <p className="text-gray-100">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-semibold">
                Sign In now!
              </Link>
            </p>
            <p className="text-gray-100">
              Read our{" "}
              <Link to="/privacy-policy" className="text-orange-500">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-and-conditions" className="text-orange-500">
                Terms of Service
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
