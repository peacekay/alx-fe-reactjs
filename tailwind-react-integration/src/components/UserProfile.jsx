function UserProfile() {
  return (
    <div className="bg-gray-100 p4 sm:p-8 max-w-xs sm: mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out md:p-8 sm:p-4 max-w-sm h-36 md:max-w-sm md:text-xl user-profile">
      <img
        className="rounded-full w24 h24 sm:w-36 sm:h36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 mt-4 hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 text-sm sm:text-base mt-2 max-w sm: max-w md:max-w-sm md:text-xl">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
