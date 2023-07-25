// this file contains functions for User endpoints operations
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// hashes user's password.
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
}

class UsersController {
  // create new user
  static async createNewUser(request, response) {
    const { password } = request.body;
    const {name} = request.body;
    const {email} = request.body;
    
    if (!password) {
      return response.status(500).json({error: 'no password sent'});
    }
    if (!email) {
      return response.status(500).json({error: 'no email sent'});
    }
    if (!name) {
      return response.status(500).json({error: 'no name sent'});
    }
    const hashedPassword = hashPassword(password);
    console.log(hashedPassword);
    const newUser = new User({
      name,
      email,
      hashedPassword,
    });
    try {
      const createdUser = await newUser.save();
      console.log(createdUser);
      return response.status(201).json(createdUser);
    } catch (error) {
      if (error.code === 11000) {
        // Handle the duplicate key error
        return response.status(500).json({ error: 'Attempting duplicate entry. A user with the email already exists' });
      }
      // Handle other errors
      return response.status(500).json({ error });
    }
  }

  // login endpoint
  static async loginUser(request, response) {
    const { email } = request.body;
    const { password } = request.body;
    try {
      const user = await User.findOne({ email });
      // compare password provided by user with hashed password in the database.
      const validation = bcrypt.compareSync(password, user.hashedPassword);
      if (validation) {
        return response.status(200).json(
          {
            status: `User, ${user._id} successfully logged in.`,
          },
        );
      }
      return response.status(403).json({ error: 'unauthorised access.' });
    } catch (error) {
      return response.status(404).json({ error: `No user with email ${email}, found.` });
    }
  }
}

module.exports = UsersController;
