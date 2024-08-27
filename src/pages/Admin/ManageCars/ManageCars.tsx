import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { Link } from "react-router-dom";

const ManageCars = () => {
  const { data: carData, isLoading } = useGetAllCarsQuery(undefined);
  console.log("carData", carData);

  return (
    <section className="lg:flex gap-8 ">
      <div className="">
        <DashboardSidebar sidebarType="admin" />
        <DashboardNavbar sidebarType="admin" />
      </div>
      <div className="lg:p-8 text-white max-w-screen-xl mx-auto">
        <Link to="/admin/create-car">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
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
            {carData?.data?.map((car) => (
              <TableRow key={car?.name}>
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
                <TableCell className="text-sm">{car?.features}</TableCell>
                <TableCell className="text-sm">{car?.pricePerHour}</TableCell>
                <TableCell className="text-right  flex flex-col lg:flex-row items-center gap-2 ">
                  <Link to={`/update-cars/${car?._id}`}>
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
                    // onClick={() => handleDelete(item._id)}
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
    </section>
  );
};

export default ManageCars;
