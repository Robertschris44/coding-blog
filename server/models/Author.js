const { model, Schema } = require("mongoose");

const authorSchema = new Schema({
  authorName: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("Author", authorSchema);
