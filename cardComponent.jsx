import { Link } from "react-router-dom";

const CardComponent = ({
  bizName,
  id,
  bizAddress,
  bizPhone,
  bizDescription,
  bizImage,
}) => {
  console.log(id);
  return (
    <>
      <div key={id}>
        <div className="row">
          <div className="card">
            <img src={bizImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">name : {bizName}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">address: {bizAddress}</li>
              <li className="list-group-item">
                description : {bizDescription}
              </li>
              <li className="list-group-item">phone number :{bizPhone}</li>
            </ul>
            <div className="card-body">
              <Link
                className="text-success alert alert-success alert-link"
                // to={`/my-cards/edit/${_id}`}
                to={`/my-cards/edit/${id}`}
              >
                edit card
              </Link>
              <Link
                className="m-5 font-weight-bold text-danger alert alert-primary"
                to={"/create-card"}
              >
                delete card
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardComponent;
