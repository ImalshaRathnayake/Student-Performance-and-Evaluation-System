const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("auth")
})

router.get('/test',(req,res)=>{
    res.send("test")
})


module.exports = router;