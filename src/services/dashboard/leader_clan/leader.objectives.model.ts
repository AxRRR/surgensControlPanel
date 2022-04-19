const { Schema, model } = require('mongoose');

const ObjectivesSchema = Schema({
  objective_user: {
    type: Schema.Types.ObjectId,
    ref: 'auth',
  },
  objective_clan: {
    type: String,
    require: true,
  },
  objective_createAt: {
    type: Date,
  },
  objective_invoice: {
    type: String,
  },
  objective_tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'tasks',
  }],
});

export const Objectives = model('objectives', ObjectivesSchema);
