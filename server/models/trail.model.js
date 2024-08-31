import { model, Schema } from "mongoose";
const TrailSchema = new Schema(
  {
    trailName: {
      type: String,
      required: [true, "Trail name is required!"],
      minlength: [3, "Trail name must be at least 3 characters long!"],
      maxlength: [20, "Trail name must be less than 20 characters long"],
    },
    length: {
      type: Number,
      required: [true, "Length (mil/Km) required!"],
    },
    location: {
      type: String,
      required: [true, "Location is required!"],
    },
    difficulty: {
      type: String,
      required: [true, "Difficulty level is required!"],
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
    },
    elevation: {
      type: Number,
      required: [true, "Elevation is required!"],
    },
    image: {
      type: String,
    },
    isDogFriendly: {
      type: Boolean,
      required: [true, "Dog Friendly is required!"],
    },
  },
  { timestamps: true }
);
const Trail = model("Trail", TrailSchema);
export default Trail;
