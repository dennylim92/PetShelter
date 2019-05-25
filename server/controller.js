const Pet = require('./models')
const path = require('path')


module.exports = {

  showAll: async (req, res) => {
    const allPet = await Pet.find({}).sort({'type': 1})
      .catch(err => console.error('error ->', err));
    res.json(allPet);
  },

  create: async (req, res) => {
    const newPet = await Pet.create(req.body)
      .catch(err => console.error('error ->', err));
    res.json(newPet);
  },

  update: async (req, res) => {
    const updatePet = await Pet.findByIdAndUpdate({_id: req.params.id}, req.body)
      .catch(err => console.error('error ->', err));
    res.json(updatePet);
  },

  delete: async (req, res) => {
    const deletePet = await Pet.findByIdAndDelete(req.params.id)
      .catch(err => console.error('error ->', err));
    res.json(deletePet);
  },

  showOnePet: async (req, res) => {
    const showPet = await Pet.findById(req.params.id)
      .catch(err => console.error('error ->', err));
    res.json(showPet);
  },

  didNotFind: (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  }


}