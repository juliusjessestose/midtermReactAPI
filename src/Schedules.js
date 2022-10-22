import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const Schedules = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const {
          venue
          
        } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-item-center">
        <h1 className="text-center w-100">
          Mater Dei College {venue.building}
        </h1>
        {error && (
          <p className="text-danger text-center">
            Something's wrong fetching the API
          </p>
        )}
        {loading && (
          <p className="text-white bg-primary text-center">
            Loading building and schedule record ....
          </p>
        )}
        <div className="container">
        <table className="table text-center table-light">
          <thead>
          <tr table className="table table-bordered text-center">
              <td class><b>#</b></td>
              <td class><b>Name</b></td>
              <td class><b>Building</b></td>
              <td class><b>Capacity</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-active">{venue.id}</td>
              <td class>{venue.name}</td>
              <td class>{venue.building}</td>
              <td class>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h1
          className={
            schedule
              ? "text-center"
              : " text-center "
          }
        >
          {schedule ? "Schedules" : "No Schedule Found"}
        </h1>
        {schedule && (
          <div className="container">
          <table className="table table-bordered text-center">
            <thead>

            <tr className="table table-dark">
              <td class><b>ID</b></td>
              <td class><b>Course No</b></td>
              <td class><b>Description</b></td>
              <td class><b>Schedule</b></td>
              <td class><b>Size</b></td>
              <td class><b>Teacher</b></td>
            </tr>
            </thead>
            <tbody>
              {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                    <td class>{schedule[sched].id}</td>
                    <td class>{schedule[sched].course_no}</td>
                    <td class>{schedule[sched].description}</td>
                    <td class>{schedule[sched].schedule}</td>
                    <td class>{schedule[sched].size}</td>
                    <td class>{schedule[sched].teacher}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
      <Link to="/venues" className="btn btn-sm btn-success mt-1">
        Back to Venues
      </Link>
    </div>
    </>
  );
};

export default Schedules;