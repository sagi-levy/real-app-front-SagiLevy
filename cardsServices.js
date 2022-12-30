import httpRequestDetails from "./basicUrlAxios";
export function createCard(card) {
  return httpRequestDetails.post("/cards", card);
}
export function getAll() {
  return httpRequestDetails.get("/cards/my-cards");
}
export function deleteCard(id) {
  return httpRequestDetails.delete(`/cards/${id}`);
}
export function updateCard(id, card) {
  return httpRequestDetails.put(`/cards/${id}`, card);
}
export function getSpecificCard(id) {
  return httpRequestDetails.get(`/cards/${id}`);
}
const cardServices = {
  createCard,
  getAll,
  deleteCard,
  updateCard,
  getSpecificCard,
};
export default cardServices;
