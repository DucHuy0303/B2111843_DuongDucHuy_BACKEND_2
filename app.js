const express = require("express");
const cors = require("cors");
const contactRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use((req, res, next) =>{
    return next(new ApiError(404, "Resources not found"));
})
app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        massage: error.message || "Internal Server Error",
    });
});
app.get("/",(req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

app.use("/api/contacts", contactRouter);

module.exports = app;