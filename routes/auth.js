const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send("Holaa")
})

module.exports = router