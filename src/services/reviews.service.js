import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/reviews");

const getAllReviews = () => {
  return get(dbRef);
};

const addReviews = (username, rating, comment) => {
  return push(dbRef, {
    username: username,
    rating: rating,
    comment: comment
  });
};

const removeReviews = (key) => {
  const dbRefReviews = ref(db, `/reviews/${key}`);
  return remove(dbRefReviews);
};

export default {
  getAllReviews,
  addReviews,
  removeReviews,
};