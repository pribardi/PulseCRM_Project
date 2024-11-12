import { create } from 'zustand';
import type { Task } from '../types';
import { addDays } from 'date-fns';

interface TasksState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  createFollowUpTask: (contactId: string, daysFromNow: number) => void;
}

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  addTask: (taskData) => {
    const task: Task = {
      id: crypto.randomUUID(),
      ...taskData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  updateTask: (id, taskData) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, ...taskData, updatedAt: new Date() }
          : task
      ),
    }));
  },
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  createFollowUpTask: (contactId, daysFromNow) => {
    const task: Task = {
      id: crypto.randomUUID(),
      title: 'Follow up with contact',
      type: 'follow_up',
      status: 'pending',
      priority: 'medium',
      dueDate: addDays(new Date(), daysFromNow),
      contactId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
}));