const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  try {
    // be sure to include its associated Products
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try {
    // be sure to include its associated Products
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if(!categoryById) {
      res.status(404).json({message: "No Category with that id was found!"})
    }
    res.status(200).json(categoryById)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const categoryToCreate = await Category.create(req.body)
    res.status(200).json(categoryToCreate)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {

  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {

  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
