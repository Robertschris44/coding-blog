const { model, Schema } = require("mongoose");

const blogSchema = new Schema({
  description: String,
  authorName: String,
  createdAt: String,
  comments: [
    {
      body: String,
      authorName: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      authorName: String,
      createdAt: String,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "authors",
  },
});

module.exports = model("Blog", blogSchema);
