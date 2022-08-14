// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

// TODO: Create an aggregate function to get the number of students overall
const headCount = async () =>
  User.aggregate()
    // Your code here
    .then((numberOfUserss) => numberOfUsers);

// Execute the aggregate method on the Student model and calculate the overall grade by using the $avg operator
const thought = async (userId) =>
  User.aggregate([
    // TODO: Ensure we include only the student who can match the given ObjectId using the $match operator
    {
      // Your code here
    },
    {
      $unwind: '$thoughts',
    },
    // TODO: Group information for the student with the given ObjectId alongside an overall grade calculated using the $avg operator
    {
      // Your code here
    },
  ]);

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user by id
  getSingleUser(req, res) {
    //this could also be User.findById
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      //populating thoughts and friends
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  //updating user, needs updating
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      // include push statement here for updating thoughts and friends
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(video)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //this should be delete user
  // Delete a student and remove them from the course
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'There is no user with that Id.' })
          : Thought.findOneAndUpdate(
            { users: req.params.userId },
            { $pull: { users: req.params.userId } },
            { new: true }
          ),
        //   Reaction.findOneAndUpdate(
        //     { users: req.params.userId },
        //     { $pull: { users: req.params.userId } },
        //     { new: true }

        // )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
            message: 'User created, but no thought with this id',
          })
          : res.json({ message: 'User successfully deleted' })
      )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({
            message: 'User deleted, but no reactions found with this id',
          })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // { users: req.params.userId },
  // { $pull: { users: req.params.userId } },
  // { new: true }


  //this needs to be add friend
  // Add an assignment to a student
  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res
            .status(404)
            .json({ message: 'No friend found with that ID' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },

  //this needs to be remove friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res
            .status(404)
            .json({ message: 'No friend found with that ID.' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};
