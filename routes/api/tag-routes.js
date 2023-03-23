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

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const tagToCreate = await Tag.create(req.body)
    res.status(200).json(tagToCreate)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagToUpdate = await Tag.update({
      tag_name: req.body.tag_name
    },{
    where: {
      id: req.params.id
    }
  })
    if(!tagToUpdate) {
      res.status(404).json({message: "No Tag with that id was found!"})
    }
    res.status(200).json(tagToUpdate)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tagToDelete = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if(!tagToDelete) {
      res.status(404).json({message: "No Tag with that id was found!"})
    }
    res.status(200).json(tagToDelete)
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
