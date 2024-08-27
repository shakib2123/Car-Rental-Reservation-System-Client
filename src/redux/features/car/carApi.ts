import { baseApi } from "@/redux/api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
    }),
    createCar: builder.mutation({
      query: (carData) => ({
        url: "/cars",
        method: "POST",
        body: carData,
      }),
    }),
  }),
});

export const { useGetAllCarsQuery, useCreateCarMutation } = carApi;
