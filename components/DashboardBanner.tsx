const DashboardBanner = () => {
  return (
    <div className="shadow-lg w-full p-4 bg-white rounded-md">
      <h1 className=" text-3xl md:text-3xl font-medium tracking-wide text-blue-900 py-2">
        Bienvenue sur Dashboard{" "}
        <span className="  text-red-400">ATF - Management</span> 👋
      </h1>
      <p className="md:text-lg ">
        Gardez le contrôle sur vos membres, suivez leurs performances en
        compétition et pilotez la vie du club jusqu’au bout ! 🥋
      </p>
    </div>
  );
};

export default DashboardBanner;
