const express = require("express");

const router = express.Router();

const Profile = require("../models/Profile");


// SAVE PROFILE

router.post("/save", async (req, res) => {

    try {

        const profile = new Profile(req.body);

        await profile.save();

        res.status(201).json({

            message: "Profile Saved Successfully"

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            error: "Server Error"

        });

    }

});

module.exports = router;