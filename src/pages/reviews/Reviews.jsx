import { useState, useEffect, useRef } from "react";
import reviewsService from "../../services/reviews.service";
import "./Reviews.css"

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

    const addReviews = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;
        reviewsService.addReviews(username, rating, comment).then((res) => {
            refform.current.reset();
            setReviews(oldValues => [...oldValues, { key: res.key, username, rating, comment }])
        })
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
                        <input className="rounded-input" type="text" name="username" placeholder="Usuario" />
                        <input className="rounded-input" type="text" name="rating" placeholder="Valoración" />
                        <input className="rounded-input" type="text" name="comment" placeholder="Comentario" />
                        <input className="rounded-input" type="submit" value="Añadir Reseña" />
                    </form>
                </div>

                <div className="reviews-list">
                    {reviews.map(review =>
                        <div className="reviews-item" key={review.key}>
                            <h3>{review.username}</h3>
                            <p>Puntuación: {review.rating}</p>
                            <p>{review.comment}</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Reviews;