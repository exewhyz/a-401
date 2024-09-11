import express from "express";

const router = express.Router();

export const getHomeRoute = router.get("/", (req, res) => {
  // res.send("Hello from Server");
  res.status(200).json({ success: true, message: "Hello from Server" });
});
