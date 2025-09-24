"use strict";

const ToDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask(title, id, priority) {
    if (this.tasks.findIndex((task) => task.id === id) === -1) {
      return;
    }
    this.tasks.push({ title: title, id: id, priority: priority });
  },
  delTaskById(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  updateNamePriorityById(title, id, priority) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const task = this.tasks[index];
      task.title = title;
      task.priority = priority;
    }
  },
  sortTasksByPriority() {
    this.tasks.sort((task1, task2) => task1.priority - task2.priority);
  },
};
