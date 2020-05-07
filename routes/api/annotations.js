const express = require('express');

const router = express.Router();

const Annotations = require('../../models/annotations');
// const { validateBookDetails } = require('../../validation/books');

router.get('/', (req, res) => {
  Annotations.getAllAnnotations()
    .then(annoResponse => {
      res.json(annoResponse);
    })
    .catch(err =>
      res.status(404).json({ noAnnotationsFound: "No Annotations Found"}));
});

router.get('/:id', (req, res) => {
   Annotations.getAnnotationByID(req.params.id)
    .then(anno => res.json(anno))
    .catch(err => {
      res.status(404).json({ noAnnotationFound: "No Annotation with ID Found"});
    })
})

router.get('/bookID/:id', (req, res) => {
  Annotations.getAnnotationsByBookID(req.params.id)
    .then(annos => res.json(annos))
    .catch(err => {
      res.status(404).json({ noAnnotationsFound: "No Annotations Associated with Book ID found"});
    })
})



module.exports = router;