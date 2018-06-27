var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var populationSchema = new Schema({
  Year:{
    type:Number,
    required:true
  },
  Population:{
    type:Number,
    required:true
  },
  GrowthRate:{
    type:String,
    required:true
  },
  Growth:{
    type:Number,
    required:true
  }
},{collection:'delhipopulationdata'});

module.exports= mongoose.model('delhipopulationdata',populationSchema);
