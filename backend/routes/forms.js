import express from "express";
import StartData from "../models/start.js";

const router = new express.Router();

//@description:testing
router.get("/hi", async (req, res) => {
  try {
    res.send("Route working.");
  } catch (error) {
    res.status(400).send();
  }
});

//@description submitting starter data
//@route POST /api/get_started
//@access Public
router.post("/api/get_started", async (req, res) => {
  try {
    const { firstName, lastName, email, contact, budget, description } =
      req.body;

    const user = await StartData.create({
      firstName,
      lastName,
      email,
      contact,
      budget,
      description,
    });

    if (user) {
      res.status(201).json({
        firstName,
        lastName,
        email,
        contact,
        budget,
        description,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    // console.log("Yoooo");
    res.status(401).send(error.message);
  }
});

export default router;
