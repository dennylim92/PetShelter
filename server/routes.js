const controller = require('./controller')


module.exports = function(app) {

  app.get('/pets/show', controller.showAll)
  app.get('/pet/:id', controller.showOnePet)
  app.post('/pet/create', controller.create)
  app.put('/pet/:id', controller.update)
  app.delete('/pet/:id', controller.delete)
  app.all("*", controller.didNotFind)
  

}