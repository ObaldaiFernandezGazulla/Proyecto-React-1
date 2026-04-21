import db from "./firebase.js";
import { ref, get, push, remove, update } from "firebase/database";

const dbRef = ref(db, "/reviews");

const getAllReviews = () => {
  return get(dbRef);
};

const addReviews = (username, rating, comment) => {
  return push(dbRef, {
    username,
    rating,
    comment,
  });
};

const removeReview = (key) => {
  const dbRefReview = ref(db, `/reviews/${key}`);
  return remove(dbRefReview);
};

const updateReview = (key, data) => {
  const dbRefReview = ref(db, `/reviews/${key}`);
  return update(dbRefReview, data);
};

export default {
  getAllReviews,
  addReviews,
  removeReview,
  updateReview
};