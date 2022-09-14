import express from 'express';
import fs from 'fs';

const app = express();

app.listen(4000, () => {
    console.log("Server is running on port 4000.")
})

app.get('/student/details', (req, res) => {
    console.log(req.body);
    fs.readFile('./student.json', "utf-8", (err, data) => {

        if (err) {
            console.log(err);
        }
        res.end(data);
    });
});

