const { Schema, model } = require('mongoose');

const NewsSchema = Schema({
  post_owner: [
    {
      type: Schema.Types.ObjectId,
      ref: 'auth',
    },
  ],
  post_text: {
    type: String,
    require: true,
  },
  post_title: {
    type: String,
    required: true,
  },
  post_img: {
      type: String
  },
  post_createdAt: {
      type: Date
  }
});

export const News = model('news', NewsSchema);
