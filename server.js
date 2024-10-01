const express = require("express");
const connectDB = require("./dbConnection");
const errorhandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/project",require("./routers/projectRoutes"));
app.use(errorHandler);


app.listen(port,() =>{ 
    console.log(`Server running on port ${port}`);
});

