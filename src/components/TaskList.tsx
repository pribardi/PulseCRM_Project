import React from 'react';
import { useTasksStore } from '../store/tasks';
import { formatDate } from '../lib/utils';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const priorityColors = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-red-100 text-red-800',
};

export function TaskList() {
  const tasks = useTasksStore((state) => state.tasks);
  const updateTask = useTasksStore((state) => state.updateTask);

  const sortedTasks = [...tasks].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const handleComplete = (taskId: string) => {
    updateTask(taskId, { status: 'completed' });
  };

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {sortedTasks.map((task, taskIdx) => (
          <li key={task.id}>
            <div className="relative pb-8">
              {taskIdx !== tasks.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={
                      task.status === 'completed'
                        ? 'bg-green-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                        : 'bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    }
                  >
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="h-5 w-5 text-white" aria-hidden="true" />
                    ) : (
                      <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                    )}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {task.title}{' '}
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          priorityColors[task.priority]
                        }`}
                      >
                        {task.priority}
                      </span>
                    </p>
                    {task.description && (
                      <p className="mt-1 text-sm text-gray-700">{task.description}</p>
                    )}
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={task.dueDate.toISOString()}>
                      {formatDate(task.dueDate)}
                    </time>
                    {task.status !== 'completed' && (
                      <button
                        onClick={() => handleComplete(task.id)}
                        className="ml-2 text-indigo-600 hover:text-indigo-900"
                      >
                        Complete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}