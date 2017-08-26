const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/folder/:path([A-Za-z0-9/]{0,})', (req, res) => {
    // console.log("folder: " + req.params.path);
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.get(`${API}/posts`)
  //   .then(posts => {
  //     res.status(200).json(posts.data);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error)
  //   });
    var fs = require('fs');
    var dirname = '/Users/Axenu/' + req.params.path;
    var res_files = [];
    fs.realpath(dirname, function(err, path) {
        if (err) {
            // console.log(err);
            res.status(500).send("No such directory")
            return;
        }
        // console.log('Path is : ' + path);
    });
    fs.readdir(dirname, function(err, files) {
        if (err) return;
        files.forEach(function(f) {
            // console.log('Files: ' + f);
            if (f[0] != '.') {
                file = {};
                file['name'] = f;
                stats = fs.statSync(dirname+"/"+f);
                file["size"] = stats.size;
                file["created_date"] = stats.birthtime;
                if (stats.isFile()) {
                    file["type"] = "file";
                } else if (stats.isDirectory()) {
                    file["type"] = "directory";
                } else {
                    file["type"] = "unknown";
                }
                res_files.push(file);
            }
        });
        res.status(200).json(res_files);
    });
    // res.status(200).json(files);
});

module.exports = router;
