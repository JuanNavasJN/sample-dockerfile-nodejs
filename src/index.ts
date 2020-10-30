import express from "express";

const app = express();

app.use("/", (req: any, res: any) => {
    res.json("Hello from digital ocean app platform wit Dockerfile and tsc");
});

app.use("/testing", (req: any, res: any) => {
    res.json("Helloasdasdadasd asdd");
});

app.listen(3000, "0.0.0.0", function () {
    console.log("Web Server listening on port " + 3000);
    console.log("mode: " + process.env.NODE_ENV);
});
