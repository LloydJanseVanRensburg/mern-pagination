require("dotenv").config({ path: "./config.env" });
const path = require('path')
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middleware/error");

connectDB();

const app = express();

app.use(express.json());
//https://git.heroku.com/enigmatic-temple-25922.git
//https://enigmatic-temple-25922.herokuapp.com/
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/admin", require("./routes/adminRoute"));
app.use("/api/v1/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);


console.log("buidl path", path.join(__dirname,'/client/build'));
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'/client/build')));
    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
}else{
    app.get('/',(req,res) => {
        res.send("Api running")
    }); 
}
const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });
