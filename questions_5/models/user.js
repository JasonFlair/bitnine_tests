// User model
const mongoose = require('mongoose');

// user collection schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  }
});

// Create a unique index on 'email' field to enforce uniqueness of email field.
// making unique: true alone does not enforce it.
userSchema.index({ email: 1 }, { unique: true });

// sorting out the id which is represented as '_id' usually.
userSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
userSchema.set('toJSON', {
  virtuals: true,
});

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;
