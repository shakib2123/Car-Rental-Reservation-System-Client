import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteCarMutation,
  useGetAllCarsQuery,
} from "@/redux/features/car/carApi";
import { TCar } from "@/types/Car.type";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const ManageCars = () => {
  const { data: carData } = useGetAllCarsQuery(undefined);

  const [deleteCar] = useDeleteCarMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteCar(id).unwrap();
          if (res?.success) {
            Swal.fire({
              title: "Deleted!",
              text: res?.message,
              icon: "success",
            });
          }
        } catch (err: any) {
          Swal.fire({
            text: err?.message,
            icon: "error",
            title: "Oops...",
          });
        }
      }
    });
  };

  return (
    <div className="lg:p-8 text-gray-900 dark:text-white max-w-screen-xl mx-auto my-8 px-3">
      <Link to="/admin/create-car">
        <Button className="bg-orange-500 hover:bg-orange-600">
          Add A New Car
        </Button>
      </Link>
      <Table className="p-12 min-w-[880px] md:w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Features</TableHead>
            <TableHead>Price Per Hour</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carData?.data?.map((car: TCar) => (
            <TableRow key={car?._id}>
              <TableCell>
                <img
                  className="object-cover rounded-lg size-14"
                  src={car?.image}
                  alt={car?.model}
                />
              </TableCell>
              <TableCell className="text-sm">{car?.name}</TableCell>
              <TableCell className="text-sm">{car?.model}</TableCell>
              <TableCell className="text-sm">{car?.year}</TableCell>
              <TableCell className="text-sm max-w-64">
                {car?.features}
              </TableCell>
              <TableCell className="text-sm">{car?.pricePerHour}</TableCell>
              <TableCell className="text-right  flex flex-col lg:flex-row items-center gap-2 ">
                <Link to={`/admin/update-car/${car?._id}`}>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Button>
                </Link>

                <Button
                  onClick={() => handleDelete(car?._id)}
                  variant={"destructive"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageCars;
