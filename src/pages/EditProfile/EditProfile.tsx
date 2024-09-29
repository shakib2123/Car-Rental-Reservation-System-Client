import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setUser } from "@/redux/features/auth/authSlice";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type TEditForm = {
  name: string;
  email: string;
  phone: string;
};

const EditProfile = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [updateUser] = useUpdateUserMutation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditForm>();
  const onSubmit: SubmitHandler<TEditForm> = async (data) => {
    const userData = {
      id: user?._id,
      userInfo: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    };
    const res = await updateUser(userData).unwrap();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __v, updatedAt, createdAt, isDeleted, ...userInfo } = res.data;

    if (res?.success) {
      dispatch(setUser({ user: userInfo }));
      toast.success("Profile Info Updated Successfully!");
      navigate(-1);
    } else {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 p-6 bg-second rounded-xl space-y-3 w-full"
      >
        {/* User information */}

        <div className="grid w-full items-center gap-1.5 relative">
          <Label htmlFor="name">Name:</Label>
          <Input
            defaultValue={user?.name}
            className="md:w-80 focus-visible:ring-offset-0"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors?.name && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5 relative">
          <Label htmlFor="phone">Phone:</Label>
          <Input
            defaultValue={user?.phone}
            className="md:w-80 focus-visible:ring-offset-0"
            type="text"
            id="phone"
            {...register("phone", { required: true })}
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm">Phone is required</p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5 relative pb-4">
          <Label htmlFor="email">Email:</Label>
          <Input
            defaultValue={user?.email}
            className="md:w-80 focus-visible:ring-offset-0"
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
