import PageHeader from "./common/pageHeader";
import CreateCard from "./createCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll } from "./services/cardsServices";
import CardComponent from "./cardComponent";
import EditCard from "./editCard";
const MyCards = () => {
  const [cardsList, setCardsList] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const cards = await getAll();
      setCardsList(cards.data);
      console.log(cards.data);
    };

    getCards();
  }, []);
  console.log(cardsList);
  return (
    <>
      <PageHeader title={<h1>my cards</h1>} />
      <h2>this is going to be my crads page</h2>
      <Link to={"/create-card"}>create a card</Link>
      {cardsList.length ? (
        cardsList.map((card) => {
          return (
            <CardComponent
              id={card._id}
              card={card} //doesnt work this way. need to ask why
              bizName={card.bizName}
              bizImage={card.bizImage}
              bizDescription={card.bizDescription}
              bizAddress={card.bizAddress}
              bizPhone={card.bizPhone}
            />
          );
        })
      ) : (
        <span className="m-5">loading your cards...</span>
      )}

      {/* <button className="btn btn-danger m-2">edit</button>
            <button className="btn btn-danger">delete</button> */}
    </>
  );
};
export default MyCards;
// {countriesList.map((country) => {
//   return (
//     <option key={country} value={country}>
//       {country}
//     </option> <div className="row">
//     <div className="card">
//     <img
//       src={cardsList[0].bizImage}
//       className="card-img-top"
//       alt="..."
//     />
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//     </div>
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item">name : {cardsList[0].bizName}</li>
//       <li className="list-group-item">
//         description : {cardsList[0].bizDescription}
//       </li>
//       <li className="list-group-item">
//         phone number :{cardsList[0].bizPhone}
//       </li>
//     </ul>
//     <div className="card-body">
//       <Link
//         className="text-success alert alert-success alert-link"
//         to={"/create-card"}
//       >
//         edit card
//       </Link>
//       <Link
//         className="m-5 font-weight-bold text-danger alert alert-primary"
//         to={"/create-card"}
//       >
//         delete card
//       </Link>
//     </div>
//   </div>
// </div>
