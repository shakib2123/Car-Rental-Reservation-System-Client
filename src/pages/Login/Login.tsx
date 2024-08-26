import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { IoEye, IoEyeOff } from "react-icons/io5";
import Logo from "@/components/shared/Logo/Logo";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/verifyToken";
import { useAppDispatch } from "@/redux/hook";
import { setUser, TUser } from "@/redux/features/auth/authSlice";

type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastId = toast.loading("Signing in...");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in successfully", { id: toastId, duration: 2000 });

      navigate(`/${user?.role}/dashboard`);
    } catch (err) {
      console.log(err?.status);

      toast.error(err?.data?.message, {
        action: (
          <Button
            onClick={() => navigate("/password-recovery")}
            className="text-orange-500"
          >
            Recover the password
          </Button>
        ),
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center my-14">
      <div className="rounded-xl shadow-custom-light shadow-gray-600 p-6 md:py-8">
        <div className="max-w-8 mx-auto flex items-center justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-gray-100 text-2xl font-semibold text-center mb-8">
          Sign In to your account!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="pb-2">
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

          <Link to="/forget-password" className="text-orange-500 ">
            Forgot Password?
          </Link>

          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Sign In
          </Button>
          <div>
            <p className="text-gray-100">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-orange-500 font-semibold">
                Sign Up Free!
              </Link>
            </p>
            <p>
              Read our{" "}
              <Link to="/privacy-policy" className="text-orange-500">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-and-condition" className="text-orange-500">
                Terms of Service
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
