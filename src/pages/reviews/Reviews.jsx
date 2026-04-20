import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt, FaEdit, FaFileDownload, FaFileUpload } from 'react-icons/fa'; 
import reviewsService from "../../services/reviews.service";
import { saveFileInFormat } from "../../utils/file-export";
import { importFileToInternalJson } from "../../utils/file-import";
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
      .catch((err) => console.error(err));
  }

  // --- LÓGICA DE EXPORTACIÓN ---
  const handleExport = async (format) => {
    if (reviews.length === 0) return alert("No hay datos para exportar");

    try {
      if (format === "json") {
        // Para JSON enviamos el array de objetos directamente
        await saveFileInFormat("json", reviews, "reviews.json");
      } 
      else if (format === "csv") {
        const cabecera = "username,rating,comment\n";
        const filas = reviews.map(r => `${r.username},${r.rating},${r.comment}`).join("\n");
        await saveFileInFormat("csv", cabecera + filas, "reviews.csv");
      } 
      else if (format === "xml") {
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<reviews>\n`;
        reviews.forEach(r => {
          xml += `  <review>\n    <username>${r.username}</username>\n    <rating>${r.rating}</rating>\n    <comment>${r.comment}</comment>\n  </review>\n`;
        });
        xml += `</reviews>`;
        await saveFileInFormat("xml", xml, "reviews.xml");
      }
    } catch (error) {
      console.error("Exportación cancelada o fallida");
    }
  };

  // --- LÓGICA DE IMPORTACIÓN ---
  const handleImport = async () => {
    try {
      const res = await importFileToInternalJson();
      // res.data contiene los datos parseados según el formato
      // Debemos limpiar las keys antiguas si vienen del archivo para que Firebase genere nuevas
      const dataToImport = Array.isArray(res.data) ? res.data : [res.data];
      
      for (const item of dataToImport) {
        await reviewsService.addReviews(item.username, item.rating, item.comment);
      }
      
      alert("Importación completada con éxito");
      getAllReviews();
    } catch (error) {
      console.error("Error al importar:", error);
    }
  };

  const removeReview = (key) => {
    reviewsService.removeReview(key).then(() => getAllReviews());
  }

  const addReviews = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const rating = e.target.rating.value;
    const comment = e.target.comment.value;

    reviewsService.addReviews(username, rating, comment).then((res) => {
      refform.current.reset();
      getAllReviews();
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
      reviewsService.updateReview(review.key, updatedData).then(() => getAllReviews());
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
        
        {/* NUEVA SECCIÓN DE BOTONES DE IMPORT/EXPORT */}
        <div className="admin-controls">
          <button className="btn-admin import" onClick={handleImport}>
            <FaFileUpload /> Importar
          </button>
          <button className="btn-admin export" onClick={() => handleExport('json')}>
            <FaFileDownload /> JSON
          </button>
          <button className="btn-admin export" onClick={() => handleExport('csv')}>
            <FaFileDownload /> CSV
          </button>
          <button className="btn-admin export" onClick={() => handleExport('xml')}>
            <FaFileDownload /> XML
          </button>
        </div>
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