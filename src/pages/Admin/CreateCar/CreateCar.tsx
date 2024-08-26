import Logo from "@/components/shared/Logo/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useCreateCarMutation } from "@/redux/features/car/carApi";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Inputs = {
  name: string;
  model: string;
  year: string;
  features: string;
  pricePerHour: number;
  image: string;
  description: string;
  isElectric: boolean;
  location: string;
  color: string;
};

const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const CreateCar = () => {
  const [loading, setLoading] = useState(false);

  const user = useAppSelector(selectCurrentUser);

  const [createCar, { isLoading }] = useCreateCarMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const imgData = await response.json();

    setLoading(false);
    const toastId = toast.loading("Signing in...");

    const carData = {
      name: data.name,
      model: data.model,
      year: data.year,
      features: [data.features],
      pricePerHour: Number(data.pricePerHour),
      image: imgData.data.url,
      description: data.description,
      isElectric: Boolean(data.isElectric),
      location: data.location,
      color: data.color,
      ownerEmail: user?.email,
      ownerName: user?.name,
    };

    try {
      const res = await createCar(carData);
      console.log(res);
      console.log(res.data?.success);

      if (res.data?.success) {
        toast.success(res?.data?.message, { id: toastId });
        navigate("/admin/manage-cars");
      }
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center px-3 py-8">
      <div className="shadow-custom-light p-8 rounded-xl">
        <div className="max-w-8 mx-auto flex items-center justify-center mb-6">
          <Logo />
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 text-center mb-8">
          Create a new car!
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {/* Name */}
            <div>
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
            {/* Model */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="model">Model:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="model"
                  {...register("model", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Model is required</p>
              )}
            </div>
            {/* Year */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="year">Year:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="year"
                  {...register("year", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Year is required</p>
              )}
            </div>
            {/* Features */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="features">Features:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="features"
                  {...register("features", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Features is required</p>
              )}
            </div>
            {/* Price per hour */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="pricePerHour">Price per hour:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="number"
                  id="pricePerHour"
                  {...register("pricePerHour", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">
                  Price per hour is required
                </p>
              )}
            </div>
            {/* image */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="image">Image:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="file"
                  id="image"
                  {...register("image", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Image is required</p>
              )}
            </div>
            {/* description */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="description">Description:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="description"
                  {...register("description", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Description is required</p>
              )}
            </div>
            {/* isElectric */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="isElectric">Is Electric:</Label>
                <Controller
                  name="isElectric"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="md:w-80 focus-visible:ring-offset-0">
                        <SelectValue placeholder="Select a option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={"false"}>No</SelectItem>
                          <SelectItem value={"true"}>Yes</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Is Electric is required</p>
              )}
            </div>
            {/* Location */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location">Location:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="location"
                  {...register("location", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Location is required</p>
              )}
            </div>
            {/* Color */}
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="color">Color:</Label>
                <Input
                  className="md:w-80 focus-visible:ring-offset-0"
                  type="text"
                  id="color"
                  {...register("color", { required: true })}
                />
              </div>
              {errors?.name && (
                <p className="text-red-500 text-sm">Color is required</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={loading || isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 mt-6"
          >
            {loading || isLoading ? "Loading..." : "Add Car"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateCar;
