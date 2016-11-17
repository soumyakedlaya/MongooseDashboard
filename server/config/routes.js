var animals = require('../controllers/animals.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    animals.displayAllAnimals(req, res)
  });
  app.get('/animals/new', function(req, res) {
    res.render('new_animal');
  });
  app.post('/animals', function(req, res) {
    animals.createNewAnimal(req, res);
  });
  app.get('/animals/:id', function(req, res){
    animals.displayOne(req, res);
  });
  app.get('/animals/:id/edit', function(req, res){
    animals.editInfo(req, res);
  });
  app.post('/animals/:id', function(req, res){
    animals.displayEditInfo(req, res);
  });
  app.post('/animals/:id/destroy', function(req, res){
    animals.deleteAnimal(req, res);
  });
}//end module.exports
