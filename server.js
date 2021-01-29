require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
