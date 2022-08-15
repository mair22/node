const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class SiteController {
  //[GET] /
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     next(err);
    //     // res.status(400).json({ error: 'ERROR!!!' });
    //   }
    // });
    // res.render('home');
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses : multipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

const newController = require("./NewsController");
