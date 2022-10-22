import useFetch from "./useFetch";
import {Link} from 'react-router-dom'

const Venues = () => {
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );


  return (
    <>
      <h1 className="text-center text-bold">
         Venues
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className="text-center bg-dark text-white">
          Loading Venues...
        </div>
      )}
       <table className="table table-bordered">
                    <thead  className="bg-primary">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Building</th>
                        <th scope="col">Capacity</th>
                    </tr>
                    </thead>
                    <tbody>

          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-sm" >
                <td class>{data[venue].id}</td>
                <td class>{data[venue].name}</td>
                <td class>{data[venue].building}</td>
                <td className="d-flex justify-content-between align-items-center">
                  <div>{data[venue].capacity}</div>
                  <Link to={`/venues/${data[venue].id}`} className="btn btn-sm btn-info ">
                    check
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </>
  );
};

export default Venues;