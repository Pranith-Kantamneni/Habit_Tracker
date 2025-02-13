"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const Dashboard = ({ navigate, habits, updateHabit, user }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleMarkAsDone = (habit) => {
    const today = new Date().toDateString()
    const updatedHabit = {
      ...habit,
      streak: habit.streak + 1,
      completedDates: [...(habit.completedDates || []), today],
    }
    updateHabit(updatedHabit)
  }

  const handleUseFreeze = (habit) => {
    if (habit.freezes > 0) {
      const updatedHabit = {
        ...habit,
        freezes: habit.freezes - 1,
      }
      updateHabit(updatedHabit)
    }
  }

  const events = habits.flatMap((habit) =>
    (habit.completedDates || []).map((date) => ({
      title: habit.name,
      start: new Date(date),
      end: new Date(date),
      allDay: true,
    })),
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome, {user.username}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Habits</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("add-habit")}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mb-4 transition duration-300"
          >
            Add New Habit
          </motion.button>
          <div className="space-y-4">
            {habits.map((habit) => (
              <motion.div
                key={habit.id}
                className="bg-white shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{habit.name}</h3>
                <p className="text-gray-600 mb-4">{habit.description}</p>
                <p className="mb-2">Days per week: {habit.daysPerWeek}</p>
                <p className="mb-2">Current streak: {habit.streak} days</p>
                <p className="mb-4">Freezes available: {habit.freezes}</p>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleMarkAsDone(habit)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Mark as Done
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleUseFreeze(habit)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    disabled={habit.freezes === 0}
                  >
                    Use Freeze
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Habit Calendar</h2>

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={["month"]}
            defaultDate={selectedDate}
            onNavigate={(date) => setSelectedDate(date)}
            className="bg-white shadow-lg rounded-lg p-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

