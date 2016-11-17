var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

// Use native promises
mongoose.Promise = global.Promise;

module.exports = {
  displayAllAnimals: function(req, res){
    Animal.find({}, function(err, results) {
    res.render('index', {animals: results});
    });
  },

  createNewAnimal: function(req, res){
    var animal = new Animal({animalType: req.body.animalType, age: req.body.age, color: req.body.color});
    animal.save(function(err) {
      if(err) {
        console.log('something went wrong');
      }
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added an animal!');
        res.redirect('/');
      }
    });
  },

  displayOne: function(req, res){
    Animal.find({_id: req.params.id }, function(err, results){
    res.render('animal_info', {animalInfo: results[0]});
    });
  },

  editInfo: function(req, res){
    Animal.find({_id: req.params.id}, function(err, results){
    res.render('edit_animal', {editAnimalInfo: results[0]});
    });
  },

  displayEditInfo: function(req, res){
    Animal.findOne({_id: req.params.id}, function(err, results){
      results.animalType = req.body.animalType
      results.age = req.body.age
      results.color = req.body.color
      results.save(function(err) {
        if(err) {
          console.log('could not save updated info');
        }
        else { // else console.log that we did well and then redirect to the root route
          console.log('successfully saved a user!');
        }
      })
      res.redirect('/animals/'+ req.params.id)
    })
  },

  deleteAnimal: function(req, res){
    Animal.remove({_id: req.params.id}, function(err, results){
      if(err) {
        console.log('could not delete animal');
      }
      else{
        console.log('successfully deleted animal');
      }
      res.redirect('/');
    })
  }
}// ending module.exports
