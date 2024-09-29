import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bookings"],
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),

    getSingleBooking: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),

    handleBookingStatus: builder.mutation({
      query: (data) => {
        return {
          url: `/bookings/${data.id}`,
          method: "PATCH",
          body: { status: data.status },
        };
      },
      invalidatesTags: ["bookings"],
    }),

    updateBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings/update-booking/${data.id}`,
        method: "PUT",
        body: data.updatedBooking,
      }),
      invalidatesTags: ["bookings"],
    }),
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/cancel-booking/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
  useGetSingleBookingQuery,
  useHandleBookingStatusMutation,
  useUpdateBookingMutation,
  useCancelBookingMutation,
} = bookingApi;
