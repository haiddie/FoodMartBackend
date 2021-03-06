const express = require('express');
const app = express();
const userRoute = express.Router();
const multer = require('multer')
let UserModel = require('../model/User');
let CategoryModel = require('../model/Category');
let RestaurantModel = require('../model/Restaurant');

userRoute.route('/').get((req, res) => {
  UserModel.find((error, user) => {
    if (error) {
      return next(error)
    } else {
      res.json(user)
      console.log('Users retrieved!')
    }
  })
})


userRoute.route('/create-user').post((req, res, next) => {
  UserModel.create(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User created!')
    }
  })
});

userRoute.route('/signin-user').post((req, res, next) => {
  UserModel.findOne(req.body, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User Found!')
    }
  })
});
 


userRoute.route('/fetch-user/:id').get((req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err)
    } else {
      res.json(user)
      console.log('User retrieved!')
    }
  })
})


userRoute.route('/update-user/:id').put((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body ,
  }, { new: true }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user)
      console.log('User updated!',user)
    }
  })
})

userRoute.route('/delete-user/:id').delete((req, res, next) => {
  UserModel.findByIdAndRemove(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: user
      })
      console.log('User deleted!')
    }
  })
})
/* Category Routes */

userRoute.route('/create-category').post((req, res, next) => {
  console.log('req',req)
  CategoryModel.create(req.body, (err, category) => {
    if (err) {
      return next(err)
    } else {
      res.json(category)
      console.log('Category created!')
    }
  })
});

userRoute.route('/get-categories').get((req, res) => {
  CategoryModel.find((error, category) => {
    if (error) {
      return next(error)
    } else {
      res.json(category)
      console.log('Categories retrieved!')
    }
  })
});


userRoute.route('/update-category/:id').put((req, res, next) => {
  CategoryModel.findByIdAndUpdate(req.params.id, {
    $set: req.body ,
  }, { new: true }, (err, category) => {
    if (err) {
      return next(err);
    } else {
      res.json(category)
      console.log('Category updated!',category)
    }
  })
})


userRoute.route('/delete-category/:id').delete((req, res, next) => {
  CategoryModel.findByIdAndRemove(req.params.id, (error, category) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: category
      })
      console.log('Category deleted!')
    }
  })
})

/* Restaurant Routes */
userRoute.route('/create-restaurant').post((req, res, next) => {
  console.log('req',req)
  RestaurantModel.create(req.body, (err, restaurant) => {
    if (err) {
      return next(err)
    } else {
      res.json(restaurant)
      console.log('Restaurant created!')
    }
  })
});

userRoute.route('/get-restaurants').get((req, res) => {
  RestaurantModel.find((error, restaurant) => {
    if (error) {
      return next(error)
    } else {
      res.json(restaurant)
      console.log('Restaurants retrieved!')
    }
  })
});


userRoute.route('/get-restaurant/:id').get((req, res) => {
  RestaurantModel.findById(req.params.id, (err, restaurant) => {
    if (err) {
      return next(err)
    } else {
      res.json(restaurant)
      console.log('Restaurant retrieved!')
    }
  })
});


userRoute.route('/update-restaurant/:id').put((req, res, next) => {
  RestaurantModel.findByIdAndUpdate(req.params.id, {
    $set: req.body ,
  }, { new: true }, (err, restaurant) => {
    if (err) {
      return next(err);
    } else {
      res.json(restaurant)
      console.log('Restaurant updated!',restaurant)
    }
  })
})


userRoute.route('/delete-restaurant/:id').delete((req, res, next) => {
  RestaurantModel.findByIdAndRemove(req.params.id, (error, restaurant) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: restaurant
      })
      console.log('Restaurant deleted!')
    }
  })
})

module.exports = userRoute;