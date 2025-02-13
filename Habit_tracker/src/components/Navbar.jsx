import { motion } from "framer-motion"

const Navbar = ({ navigate, user }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-8 w-8 cursor-pointer"
                src="/logo.svg"
                alt="Logo"
                onClick={() => navigate("dashboard")}
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("dashboard")}
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
              >
                Dashboard
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("add-habit")}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
              >
                Add Habit
              </motion.a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div>
                <span className="inline-flex rounded-md">
                  <span className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    {user.username}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

