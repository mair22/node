const newsRouter = require("./news");
const storedRouter = require("./stored");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  
  app.use("/stored", storedRouter);

  app.use("/courses", coursesRouter);

  app.use("/", siteRouter);
}

module.exports = route;
