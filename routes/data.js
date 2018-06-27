var express = require('express');
var population = require('../models/populationdata');
var router = express.Router();

//Read the data from database
router.get('/read',(req,res,next)=>{
  population.find(function(err,data){
    if(err){console.log(err)
    }else{
      res.json(data);
    }
  })
});

//Submit the new data to the database
router.post('/create',(req,res,next)=>{
  let populationdata = new population({
    Year:req.body.Year,
    Population:req.body.Population,
    GrowthRate:req.body.GrowthRate,
    Growth:req.body.Growth
  });

populationdata.save((err,data)=>{
  if(err){
    res.json({err:'failed to add contact'});
  }else{
    res.json({msg:'data added succesfully.'})
  }
});
});

//update the data stored in database
router.put('/update',(req,res)=>{
    let populationdata = {
      Year:req.body.Year,
      Population:req.body.Population,
      GrowthRate:req.body.GrowthRate,
      Growth:req.body.Growth
    }
  population.findByIdAndUpdate(req.body._id,{$set:populationdata},{new:true},(err,data)=>{
    if(err){console.lo(err)
    }else{
      res.send(data);
    }
  })

});

//Delete the selected data from database
router.delete('/delete/:id',(req,res)=>{
    population.findOneAndRemove({_id:req.params.id},(err,data)=>{
      if(err){console.log(err)
      }else{
        res.send(data);
      }
    })

})
module.exports = router;
