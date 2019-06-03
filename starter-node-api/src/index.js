import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import members from './routes/members';
import uri from './config/db';

const app = express();

mongoose.connect(uri, {useNewUrlParser: true});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({ limit: "50mb"}));
app.use(cors());

app.use("/api/members", members);

app.get("/*", (req, res) => {
    res.json("Page not found")
});

app.listen(8082, () => console.log("Listen port 8082"));
