import { Link } from "react-router-dom";

import axios from "axios";
/* react */
import { useContext } from "react";

/* local */
import { AuthContext } from "../context/AuthContext";

function TrailRow({ trail, setIsLoaded }) {
  const baseUrl = "http://localhost:8004/api/trails";
  const { state } = useContext(AuthContext);

  // // Convert the string to a Date object
  // const dateObject = new Date(trail.timestamp);

  // // Format the date (for example: "August 30, 2024")
  // const formattedDate = dateObject.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  return (
    <tr>
      <td className="align-middle">{trail.trailName}</td>
      <td className="align-middle">{trail.location}</td>
      <td className="align-middle">{trail.difficulty}</td>
      <td className="align-middle">{trail.length}</td>
      <td className="align-middle">{trail.elevation}</td>

      <td className="align-middle d-flex gap-2">
        <Link
          to={`/trails/${trail._id}`}
          className="btn btn-success align-middle "
        >
          Details
        </Link>

        {state.user && (
          <Link
            to={`/trails/${trail._id}/edit`}
            className="btn btn-warning align-middle "
          >
            Update
          </Link>
        )}
      </td>
    </tr>
  );
}
export default TrailRow;
