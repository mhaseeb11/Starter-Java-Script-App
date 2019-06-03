import express from  'express';
import Member from '../models/memberSchema';

const Router = express.Router();

Router.post("/saveMember", (req, res) => {
    Member.create(req.body, (err, result) => {
        res.json();
    })
});

Router.get("/fetchAllMembers", (req, res) => {
    Member.find({}, (err, result) => {
        if(err) res.status(500).json("Internal server error")
        res.json(result)
    })
});

Router.delete("/deleteMember/:id", (req, res) => {
    Member.remove({ _id: req.params.id }, (err, result) => {
        if(err) res.status(500).json("Something went wrong")
        res.json();
    })
})

export default Router;