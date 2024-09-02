import { model, Schema } from 'mongoose';
const TrailSchema = new Schema(
  {
    trailName: {
      type: String,
      required: [true, 'Trail name is required.'],
      minlength: [2, 'Trail name must be at least 2 characters long.'],
      maxlength: [50, 'Trail name must be less than 50 characters long.'],
    },
    length: {
      type: Number,
      required: [true, 'Length required (mil/Km).'],
    },
    location: {
      type: String,
      required: [true, 'Location is required.'],
    },
    difficulty: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
    },
    elevation: {
      type: Number,
      required: [true, 'Elevation is required.'],
    },
    image: {
      type: String,
    },
    isDogFriendly: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
const Trail = model('Trail', TrailSchema);
export default Trail;
