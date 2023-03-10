import React, { useState } from "react";
import Card from "../Card/Card";
import "/src/index.css";

// ✅ Al menos 2 inputs de texto y un botón submit.
// Validaciones
// ✅ 1er input: Longitud mínima de 3 caracteres y sin espacion en blanco al comienzo.
// ✅ 2do input: Longitud mínima de 6 caracteres.
// ✅ Validacion exitosa: renderizar componente Card
// ✅ Si no esta validado, al dar submit se tiene que mostrar un texto debado del formulario

const Form = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    editorial: "",
    pages: "",
  });

  const [showErrors, setShowErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    author: "",
    general: "Ingrese los datos necesarios para continuar",
  });
  const [showCard, setShowCard] = useState(false);

  //Manejador del cambio de valores de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateInputs = () => {
    const { title, author } = formValues;

    if (
      title.trim().length < 3 ||
      (title.startsWith(" ") && author.length < 6)
    ) {
      setErrorMessage({
        title: "⚠️ El título debe tener al menos 3 caracteres ",
        author: "⚠️ El autor debe tener al menos 6 caracteres",
      });
      return false;
    }

    if (title.trim().length < 3 || title.startsWith(" ")) {
      setErrorMessage({
        title: "⚠️ Debe tener al menos 3 caracteres sin epacios al inicio",
      });
      return false;
    }

    if (author.length < 6) {
      setErrorMessage({
        author: "⚠️ El autor debe tener al menos 6 caracteres",
      });
      return false;
    }

    return true;
  };

  //Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (validateInputs()) {
      setErrorMessage("");
      setShowErrors(false);
      setShowCard(true);
    } else {
      setShowErrors(true);
    }

    /*  setTimeout(() => {
        setShowCard(false);
    }, 3000);
     */
  };

  console.log(showCard);

  //Desestructuración de los valores del formulario
  const { title, author, editorial, pages } = formValues;

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" name="title" value={title} onChange={handleChange} />

        <br />
        {showErrors && <p className="error">{errorMessage.title}</p>}

        <label>Autor:</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
        />

        <br />
        {showErrors && <p className="error">{errorMessage.author}</p>}

        <label>Editorial:</label>
        <input
          type="text"
          name="editorial"
          value={editorial}
          onChange={handleChange}
        />

        <br />

        <label>Páginas:</label>
        <input
          type="number"
          name="pages"
          value={pages}
          onChange={handleChange}
        />

        <br />
        {showErrors && (
          <div>
            <br />
            <p className="error">{"👆🏻 Ingresa los datos para continuar"}</p>
          </div>
        )}

        <button type="submit">Enviar</button>
      </form>

      {showCard && <Card {...formValues} />}
    </div>
  );
};

export default Form;