// import React, { useState } from "react";
// import dotenv from "dotenv";

// // dotenv.config();
// import { useLoadScript, Autocomplete } from "@react-google-maps/api";

// const libraries = ["places"];

// const AddressAutocomplete = () => {
//   const { isLoaded } = useLoadScript({
//     // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     googleMapsApiKey: "AIzaSyA2GYmYT_MPPNarqglzgjUs1KdouNMXdco",

//     libraries,
//   });

//   const [address, setAddress] = useState("");

//   const handlePlaceChanged = (autocomplete) => {
//     const place = autocomplete.getPlace();
//     setAddress(place.formatted_address);
//     // Additional logic to handle place details can go here
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <Autocomplete
//       onLoad={(autocomplete) => (this.autocomplete = autocomplete)}
//       onPlaceChanged={() => handlePlaceChanged(this.autocomplete)}
//     >
//       <input
//         type="text"
//         placeholder="Enter your address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         style={{ width: "300px", height: "40px", padding: "10px" }}
//       />
//     </Autocomplete>
//   );
// };

// export default AddressAutocomplete;
