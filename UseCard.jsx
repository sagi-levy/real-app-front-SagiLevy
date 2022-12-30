import { useState } from "react";
import { useEffect } from "react";
import { getSpecificCard } from "../components/services/cardsServices";
const useCard = (id) => {
  const [card, setCard] = useState(null);
  useEffect(() => {
    const getCard = async () => {
      const { data } = await getSpecificCard(id);
      setCard(data);
    };
    getCard();
  }, []);
  return card;
};
export default useCard;
