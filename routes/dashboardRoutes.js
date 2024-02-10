const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send("Hallo gandalf the gay")
});

module.exports = router;