const AdminDashboard = () => {
  return (
    <section className="px-3 lg:px-0">
      {/* summary view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        <div className="h-60 w-full lg:w-60 flex flex-col items-center justify-center p-4 rounded-xl bg-blue-500  min-w-36">
          <p className="text-neutral-100 text-lg">Total Bookings</p>
          <h3 className="text-6xl font-bold ">34</h3>
        </div>
        <div className="h-60 w-full lg:w-60 flex flex-col items-center justify-center p-4 rounded-xl bg-green-500  min-w-36">
          <p className="text-neutral-100 text-lg">Available Cars</p>
          <h3 className="text-6xl font-bold ">34</h3>
        </div>

        <div className="h-60 w-full lg:w-60 flex flex-col items-center justify-center p-4 rounded-xl bg-orange-500  min-w-36">
          <p className="text-neutral-100 text-lg">Revenue</p>
          <h3 className="text-6xl font-bold ">$34</h3>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
