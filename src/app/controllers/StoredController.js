const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ulti/mongoose");

class StoredController {
  //[GET] /courses/created
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("stored/stored-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new StoredController();
