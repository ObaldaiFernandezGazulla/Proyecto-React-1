import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'; 
import reviewsService from "../../services/reviews.service";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const refform = useRef();

  const getAllReviews = () => {
    reviewsService.getAllReviews()
      .then((items) => {
        let allReviews = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allReviews.push({
            key: key,
            username: data.username,
            rating: data.rating,
            comment: data.comment
          });
        });
        setReviews([...allReviews]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeReview = (key) => {
    reviewsService.removeReview(key).then(() => {
      getAllReviews();
    });
  }

  const addReviews = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const rating = e.target.rating.value;
    const comment = e.target.comment.value;

    reviewsService.addReviews(username, rating, comment).then((res) => {
      refform.current.reset();
      setReviews(oldValues => [...oldValues, { key: res.key, username, rating, comment }]);
    });
  }

  const updateReview = (review) => {
    const newUsername = prompt("Editar Usuario:", review.username);
    const newRating = prompt("Editar Valoración:", review.rating);
    const newComment = prompt("Editar Comentario:", review.comment);

    if (newUsername !== null && newRating !== null && newComment !== null) {
      const updatedData = { 
        username: newUsername || review.username, 
        rating: newRating || review.rating, 
        comment: newComment || review.comment 
      };
      
      reviewsService.updateReview(review.key, updatedData).then(() => {
        getAllReviews();
      });
    }
  }

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div className="reviews">
      <section className="reviews-hero">
        <h1>Reseñas</h1>
        <p>Conoce lo que nuestros clientes opinan sobre nuestros servicios.</p>
      </section>

      <section className="reviews-body">
        <div className="reviews-form-container">
          <form id="reviews-form" onSubmit={addReviews} ref={refform}>
            <input className="rounded-input" type="text" name="username" placeholder="Usuario" required />
            <input className="rounded-input" type="text" name="rating" placeholder="Valoración" required />
            <input className="rounded-input" type="text" name="comment" placeholder="Comentario" required />
            <input className="rounded-input" type="submit" value="Añadir Reseña" />
          </form>
        </div>

        <div className="reviews-list">
          {reviews.map(r => (
            <div className="reviews-item" key={r.key}>
              <div className="review-content">
                <h3>{r.username}</h3>
                <p>Puntuación: {r.rating}</p>
                <p>{r.comment}</p>
              </div>
              <div className="review-actions">
                <FaEdit onClick={() => updateReview(r)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                <FaRegTrashAlt onClick={() => removeReview(r.key)} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;