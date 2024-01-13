// Create web server 
// 1. Create a new express app
// 2. Create a route handler for a GET request to /posts
// 3. Create a route handler for a POST request to /posts
// 4. Listen on port 4000 for incoming requests

const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create an object to store comments
const commentsByPostId = {};

// Create a route handler for a GET request to /posts
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create a route handler for a POST request to /posts
app.post('/posts/:id/comments', (req, res) => {
    // Generate a random ID for the comment
    const commentId = randomBytes(4).toString('hex');
    // Retrieve the content of the comment
    const {content} = req.body;
    // Retrieve the array of comments for the post
    const comments = commentsByPostId[req.params.id] || [];
    // Push the new comment to the array
    comments.push({id: commentId, content});
    // Store the array of comments in the object
    commentsByPostId[req.params.id] = comments;
    // Send the new comment back to the client
    res.status(201).send(comments);
});

// Listen on port 4000 for incoming requests
app.listen(4001, () => {
    console.log('Listening on 4001');
});