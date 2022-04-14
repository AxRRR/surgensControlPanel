const { Schema, model } = require('mongoose');

const recomendationsSchema = Schema({
  recommended_name: [
    {
      type: Schema.Types.ObjectId,
      ref: 'auth',
    },
  ],
  ascent_member: [
    {
      type: Schema.Types.ObjectId,
      ref: 'auth',
    },
  ],
  recommended_description: {
    type: String,
    require: true,
  },
  recommended_type: {
    type: String,
    required: true,
  },
});

export const Recomendations = model('recomendations', recomendationsSchema);
