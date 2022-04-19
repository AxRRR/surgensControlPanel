const { Schema, model } = require('mongoose');

const ReportsSchema = Schema({
  report_user: {
    type: Schema.Types.ObjectId,
    ref: 'auth',
  },
  report_description: {
    type: String,
    require: true,
  },
  report_title: {
    type: String,
    required: true,
  },
  report_invoice: {
    type: String,
  },
  report_createdAt: {
    type: Date,
  },
  report_status: {
    type: Boolean,
    require: true,
  },
});

export const Reports = model('reports', ReportsSchema);
