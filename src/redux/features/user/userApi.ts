import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUser: build.mutation({
      query: (data) => {
        return {
          url: `/users/${data?.id}`,
          method: "PUT",
          body: data?.userInfo,
        };
      },
    }),
    updateRole: build.mutation({
      query: (data) => {
        return {
          url: `/users/${data?.id}`,
          method: "PATCH",
          body: { role: data?.role },
        };
      },
      invalidatesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserMutation,
  useUpdateRoleMutation,
  useDeleteUserMutation,
} = userApi;
