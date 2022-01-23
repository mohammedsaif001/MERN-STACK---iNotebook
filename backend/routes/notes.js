const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
   const obj = {
       name : 'Villain',
       mesg : 'Gonna Rule the world'
   }
    res.json(obj);
})

module.exports = router;