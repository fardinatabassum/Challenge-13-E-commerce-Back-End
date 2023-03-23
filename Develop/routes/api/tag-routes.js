const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  try {
    // be sure to include its associated Product data
    const tagData = await Tag.findAll({
       include: [{model: Product}]
     })
     res.status(200).json(tagData)
   } catch(err) {
     res.status(500).json(err)
   }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  try {
    // be sure to include its associated Product data
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if(!tagById) {
      res.status(404).json({message: "No Tag with that id was found!"})
    }
    res.status(200).json(tagById)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
