# uploadVideos_backend
This is a Node.js backend for uploading videos using Express.js, Sequelize, Multer, and MySQL. It provides a RESTful API for uploading videos
## Installation
Clone the repository: git clone https://github.com/thamerh/uploadVideos_backend.git
Install dependencies: npm install
Set up the database: create a new MySQL database and run the SQL script located in database.sql
Configure : add your database  info in Video model
Start the server: npm start


### Uploading a video

To upload a video, send a POST request to /api/videos with the following form data:

title: the title of the video
description: the description of the video
file: the video file (must be a .mp4 file)
The API will respond with a JSON object containing the following properties:

id: the ID of the uploaded video
title: the title of the uploaded video
description: the description of the uploaded video
filename: the filename of the uploaded video
mimetype: the MIME type of the uploaded video
size: the size of the uploaded video
createdAt: the date and time the video was uploaded




## Made By

- [@thamerh](https://github.com/thamerh)