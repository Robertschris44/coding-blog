const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators");
const { SECRET_KEY } = require("../../config");
const Author = require("../../models/Author");

function generateToken(author) {
  return jwt.sign(
    {
      id: author.id,
      email: author.email,
      authorName: author.authorName,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = {
  Mutation: {
    async login(_, { authorName, password }) {
      const { errors, valid } = validateLoginInput(authorName, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const author = await Author.findOne({ authorName });

      if (!author) {
        errors.general = "Author not found";
        throw new UserInputError("Author not found", { errors });
      }

      const match = await bcrypt.compare(password, author.password);
      if (!match) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }

      const token = generateToken(author);

      return {
        ...author._doc,
        id: author._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { authorName, email, password, confirmPassword } }
    ) {
      // Validate author data
      const { valid, errors } = validateRegisterInput(
        authorName,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      // TODO: Make sure author doesnt already exist
      const author = await Author.findOne({ authorName });
      if (author) {
        throw new UserInputError("AuthorName is taken", {
          errors: {
            authorName: "This authorName is taken",
          },
        });
      }
      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newAuthor = new Author({
        email,
        authorName,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newAuthor.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
