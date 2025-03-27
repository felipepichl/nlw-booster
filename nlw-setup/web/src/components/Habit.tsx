import React from 'react'

interface HabitProps {
  completed: number
}

export function Habit({ completed }: HabitProps) {
  return (
    <div className='bg-zinc-900'>Habit {completed}</div>
  )
}