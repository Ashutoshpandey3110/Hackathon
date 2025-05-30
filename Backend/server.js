const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");
const { MONGO_URI, PORT } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI);

console.log("MongoDb is Connected");

app.use("/api/video", videoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));