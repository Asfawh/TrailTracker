import { useState } from 'react';
import axios from 'axios';
import TRAIL_SERVICE from '../services/trail.service';
// import AddressAutocomplete from "./AddressAutocomplete.jsx";

const initialTrail = {
  trailName: '',
  length: '',
  location: '',
  description: '',
  // difficulty: '',
  image: '',
  elevation: '',
  // isDogFriendly: '',
};

const difficulties = ['Hard', 'Moderate', 'Easy'];

const CreateForm = ({ setIsLoaded }) => {
  const [trail, setTrail] = useState(initialTrail);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const readyToSubmit = () => {
    for (let key in errors) {
      if (errors[key] !== true) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!readyToSubmit()) {
      alert('Please make a correction to the form.');
      window.location.reload();
      return;
    }

    TRAIL_SERVICE.createTrail(trail)
      .then(() => setTrail(initialTrail))
      .catch((err) => setErrors(err.response.data.errors));
    setIsLoaded(false);
  };

  return (
    <div className="card shadow">
      <h3 className="card-header text-center"> Create Form</h3>
      <p className="text-center mt-3">Add new!</p>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <fieldset>
              <legend className="fs-6">Is Dog Friendly:</legend>
              <div className="d-flex justify-content-around">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isDogFriendly"
                    id="NO"
                    value="false"
                    checked={trail.isDogFriendly === 'NO'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="NO">
                    No
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isDogFriendly"
                    id="YES"
                    value="true"
                    checked={trail.isDogFriendly === 'YES'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="YES">
                    Yes
                  </label>
                </div>
              </div>
            </fieldset>
          </div> */}
          <div className="mb-3">
            {errors.trailName && (
              <p className="error">{errors.trailName.message}</p>
            )}
            <label htmlFor="trailName" className="form-label">
              Trail Name:
            </label>
            <input
              type="text"
              name="trailName"
              id="trailName"
              value={trail.trailName}
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            {errors.location && (
              <p className="error">{errors.location.message}</p>
            )}
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={trail.location}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            {errors.difficulty && (
              <p className="error">{errors.difficulty.message}</p>
            )}
            <label htmlFor="difficulty" className="form-label">
              Type:
            </label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-select"
              value={trail.difficulty}
              onChange={handleChange}
            >
              {difficulties.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="mb-3">
            {errors.difficulty && (
              <p className="error">{errors.difficulty.message}</p>
            )}
            <label htmlFor="difficulty" className="form-label">
              Difficulty:
            </label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              value={trail.difficulty}
              className="form-control"
              onChange={handleChange}
            />
          </div> */}
          <div className="mb-3">
            {errors.length && <p className="error">{errors.length.message}</p>}
            <label htmlFor="length" className="form-lable">
              Length:
            </label>
            <input
              type="number"
              name="length"
              id="length"
              className="form-control"
              value={trail.length}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}

            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={trail.description}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="elevation" className="form-label">
              Elevation (Optional):
            </label>
            <input
              type="number"
              name="elevation"
              id="elevation"
              value={trail.elevation}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              IMAGE URL(Optional):
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={trail.image}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Create!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
