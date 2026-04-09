const express = require("express");
const app = express();
const path = require("path");

// Tell Express to use EJS
app.set("view engine", "ejs");

// Tell Express where static files are
app.use(express.static(path.join(__dirname, "public")));

// Route for homepage
app.get("/", (req, res) => {
  res.render("index");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
