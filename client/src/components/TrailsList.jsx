import TrailRow from "./TrailRow";

function TrailsList({ trails, setIsLoaded }) {
  return (
    <div className="card shadow ">
      <h3 className="card-header text-center">All Trails</h3>
      <p className="text-center mt-3">Trails Added by Users</p>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Location:</th>
              <th>Difficulty:</th>
              <th>Length:</th>
              <th>Elevation:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {trails.map((trail) => (
              <TrailRow
                key={trail._id}
                trail={trail}
                setIsLoaded={setIsLoaded}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TrailsList;
