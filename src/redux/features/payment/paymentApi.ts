import { baseApi } from "@/redux/api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStripeCheckoutSession: builder.mutation({
      query: (data) => ({
        url: "/payment/create-stripe-checkout-session",
        method: "POST",
        body: data,
      }),
    }),
    createAamarPayCheckoutSession: builder.mutation({
      query: (data) => ({
        url: "/payment/create-aamarpay-checkout-session",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateStripeCheckoutSessionMutation,
  useCreateAamarPayCheckoutSessionMutation,
} = paymentApi;
