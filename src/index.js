const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.json("Hello from digital ocena app platform wit Dockerfile");
});

process.env.PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, "0.0.0.0", function () {
    console.log("Web Server listening on port " + process.env.PORT);
});
