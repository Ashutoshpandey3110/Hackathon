const express = require("express");
const UserVideo = require("../models/UserVideo");

const router = express.Router();

router.post("/completed", async (req, res) => {
  const { userId, videoId, completed } = req.body;
  await UserVideo.findOneAndUpdate(
    { userId, videoId },
    { completed },
    { upsert: true }
  );
  res.send({ success: true });
});

router.get("/:userId/videos", async (req, res) => {
  const videos = await UserVideo.find({ userId: req.params.userId });
  res.json(videos);
});

module.exports = router;