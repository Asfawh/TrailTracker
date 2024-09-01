import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import TRAIL_SERVICE from '../services/trail.service';

const initialTrail = {
  trailName: '',
  length: '',
  location: '',
  description: '',
  image: '',
  elevation: '',
};
const difficulties = ['Hard', 'Moderate', 'Easy'];
const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trail, setTrail] = useState(initialTrail);
  const [errors, setErrors] = useState({});
  const baseUrl = 'http://localhost:8004/api/trails';

  useEffect(() => {
    TRAIL_SERVICE.getTrailById(id)
      .then((res) => setTrail(res))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    TRAIL_SERVICE.updateTrailById(id, trail)
      .then((res) => {
        console.log(res.data);
        navigate('/trails');
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <div className="card shadow">
      <h3 className="card-header text-center"> Update Form</h3>
      <p className="text-center mt-3">Make sure you upadate properly!</p>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
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
            {/* <AddressAutocomplete /> */}
          </div>
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
            <label htmlFor="image" className="form-label">
              Image URL(Optional):
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

          <div className="mb-3">
            <label htmlFor="elevation" className="form-label">
              Elevation (Optional):
            </label>
            <input
              type="text"
              name="elevation"
              id="elevation"
              value={trail.elevation}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Update!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
