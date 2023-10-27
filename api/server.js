require("dotenv").config({ path: "./config.env" });

// express app
const express = require("express");
const app = express();
const cors = require("cors");


//mongodb connection imported
const { connectMongoDB } = require("./connection");

//middleware imported
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

//Routers
const studentRouter = require("./routes/student");
const userRouter = require("./routes/user");
const teacherRouter = require("./routes/teacher");
const {
    checkForAuthenticationCookie,
} = require("./middlewares/authentication");

//connection
connectMongoDB(process.env.MONGO_URI)
    .then(console.log("MongoDB Database is connected"))
    .catch((err) => {
        console.log("MongoDB err", err);
    });

//authentication
app.use(cors({
    origin : "http://localhost:3000",
    credentials: true,
}));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

//routes
app.use("/", userRouter);
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);

//server inisiated
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
});
