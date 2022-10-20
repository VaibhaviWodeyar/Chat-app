const express = require('express');
const { createChat, userChats, findChat } = require('../controllers/chatController');
const router = express.Router();


router.post("/chat", createChat)
router.get("/:userId", userChats)
router.get("find/findId/:secondId", findChat)
module.exports = router;