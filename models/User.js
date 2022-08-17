const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, "Please enter an email address."],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
        // ref might have to be lowercase
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
        // this might have to be lowercase
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Retrieves length of user's friends array
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });


const User = model('user', userSchema);

module.exports = User;
