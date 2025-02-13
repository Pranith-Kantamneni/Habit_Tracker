"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Home from "./components/Home"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import AddHabit from "./components/AddHabit"
import Navbar from "./components/Navbar"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [habits, setHabits] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Load habits from localStorage on initial render
    const savedHabits = localStorage.getItem("habits")
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits))
    }
  }, [])

  useEffect(() => {
    // Save habits to localStorage whenever they change
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  const navigate = (page) => {
    setCurrentPage(page)
  }

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, id: Date.now(), streak: 0, freezes: 3 }])
  }

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map((habit) => (habit.id === updatedHabit.id ? updatedHabit : habit)))
  }

  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 text-gray-800">
      {user && <Navbar navigate={navigate} user={user} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {currentPage === "home" && <Home navigate={navigate} />}
          {currentPage === "register" && <Register navigate={navigate} setUser={setUser} />}
          {currentPage === "dashboard" && (
            <Dashboard navigate={navigate} habits={habits} updateHabit={updateHabit} user={user} />
          )}
          {currentPage === "add-habit" && <AddHabit navigate={navigate} addHabit={addHabit} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App

