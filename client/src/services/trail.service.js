import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8004/api/trails",
});

const TRAIL_SERVICE = {
  createTrail: async (trailData) => {
    try {
      const res = await http.post("/", trailData);
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  getTrailById: async (id) => {
    try {
      const res = await http.get(`/${id}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  getAllTrail: async () => {
    try {
      const res = await http.get("/");
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  getTrailByLocation: async () => {
    try {
      const res = await http.get("/location");
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  updateTrailById: async (id, trailData) => {
    try {
      const res = await http.put(`/${trailData._id}`, trailData);
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  deleteTrailById: async (id) => {
    try {
      const res = await http.delete(`/${id}`);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
};

export default TRAIL_SERVICE;
