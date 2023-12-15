const mongoose = require('mongoose');
const User = require('../models/UserModel');

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const createdUser = await User.create({ userName, password });
      res.locals.createdUser = createdUser;
      return next();
    } catch (err) {
      if (err)
        return next({
          log: "Error occured in userController.createUser",
          status: 500,
          message: { err: "An error occured" },
        });
    }
  };

  module.exports = userController;