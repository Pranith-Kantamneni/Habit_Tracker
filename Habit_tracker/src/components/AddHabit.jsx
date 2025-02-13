"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const AddHabit = ({ navigate, addHabit }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [daysPerWeek, setDaysPerWeek] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addHabit({ name, description, daysPerWeek: Number.parseInt(daysPerWeek, 10) })
    navigate("dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Habit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Habit Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="daysPerWeek" className="block text-sm font-medium text-gray-700 mb-2">
              Days per Week
            </label>
            <input
              type="number"
              id="daysPerWeek"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="1"
              max="7"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(e.target.value)}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add Habit
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default AddHabit

