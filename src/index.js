const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));

// routes
app.use(require("./routes"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// listening the Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
