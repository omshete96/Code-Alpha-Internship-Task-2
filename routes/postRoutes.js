const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { user, content } = req.body;

    const newPost = new Post({ user, content });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username').exec();
        res.json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
