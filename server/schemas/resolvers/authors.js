const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../../config");
const Author = require("../../models/Author");

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { authorName, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO: Validate Author Data
      // TODO: Make sure user doesn't already exist
      // TODO: Hash password and create auth token

      password = await bcrypt.hash(password, 12);

      const newAuthor = new Author({
        email,
        authorName,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newAuthor.save();
      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          authorName: res.authorName,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
