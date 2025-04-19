import { motion } from "framer-motion"

const Home = ({ navigate }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-purple-400 to-indigo-600 text-white">
      <motion.h1
        className="text-6xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Habit Tracker
      </motion.h1>
      <motion.p
        className="text-xl mb-12 text-center max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Master your habits, master your life. Start your journey to self-improvement today.
      </motion.p>
      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("register")}
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("dashboard")}
          className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-purple-600 transition duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </main>
  )
}

export default Home

