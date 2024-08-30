import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ForgetPassword = () => {
  const [isLinkSent, setIsLinkSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();

  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    const res = await forgetPassword(data);

    if (res?.data?.success) {
      setIsLinkSent(true);
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-0 min-h-screen flex items-center justify-center py-8">
      {isLinkSent ? (
        <h1 className="text-xl text-gray-100">
          Check your email for password reset link.
        </h1>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Type Your Email Here:</Label>
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
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 mt-6"
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      )}
    </section>
  );
};

export default ForgetPassword;
