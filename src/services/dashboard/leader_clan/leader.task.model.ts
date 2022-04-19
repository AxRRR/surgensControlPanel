const { Schema, model } = require('mongoose');

const TasksSchema = Schema({
  task_title: {
    type: String,
    require: true,
  },
  task_description: {
    type: String,
    require: true,
  },
  task_createAt: {
    type: Date,
  },
  task_invoice: {
    type: String,
  },
  task_status: {
    type: Boolean,
  },
});

export const Tasks = model('tasks', TasksSchema);
