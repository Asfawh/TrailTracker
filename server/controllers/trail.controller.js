import Trail from '../models/trail.model.js';

//Add a trail to the collection in our Mongo database using a POST HTTP Verb.
async function createTrail(req, res) {
  try {
    const newTrail = await Trail.create(req.body);
    res.status(201).json(newTrail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//Retrieve all trail from the collection.
async function getAllTrail(req, res) {
  try {
    const allTrail = await Trail.find();
    res.status(200).json(allTrail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//Retrieve a single trail from the collection.
async function getOneTrail(req, res) {
  try {
    const foundTrail = await Trail.findById(req.params.id);
    res.status(200).json(foundTrail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
// Search a trail from the collection.
async function searchTrail(req, res) {
  try {
    const foundTrail = await Trail.find({ trailName: req.params.query });
    res.status(200).json(foundTrail);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'No Trail was found!' });
  }
}
// async function searchTrail(req, res) {
//   const foundTrail = await Trail.find(
//     (trail) => trail.trailName === req.params.trailName
//   );
//   if (foundTrail || foundTrail.length !== 0) {
//     res.status(200).send(foundTrail);
//   }
//   // console.log(error);
//   res.status(400).send({ error: 'No Trail was found!' });
// }

//Edit a trail from the collection.
async function updateOneTrail(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedTrail = await Trail.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.status(200).json(updatedTrail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//Delete a trail from the collection.
async function deleteOneTrail(req, res) {
  try {
    const deletedTrail = await Trail.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTrail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export {
  createTrail,
  getOneTrail,
  getAllTrail,
  updateOneTrail,
  deleteOneTrail,
  searchTrail,
};
