import React, { useContext } from 'react';
import rings from '../../assets/images/pattern-rings.svg';
import GlobalContext from '../../context/context';
import validator from 'validator';

const Contact = () => {
  const { formValues, setFormValues } = useContext(GlobalContext);

  const handleFormSubmit = () => {
    if (
      formValues.name === '' ||
      formValues.email === '' ||
      formValues.message === ''
    ) {
      if (
        formValues.name === '' &&
        formValues.email === '' &&
        formValues.message === ''
      ) {
        setFormValues({
          ...formValues,
          nameError: true,
          emailError: true,
          messageError: true,
        });
      } else if (formValues.name === '') {
        setFormValues({
          ...formValues,
          nameError: true,
        });
      } else if (formValues.email === '') {
        setFormValues({
          ...formValues,
          emailError: true,
        });
      } else if (formValues.message === '') {
        setFormValues({
          ...formValues,
          messageError: true,
        });
      }
      alert('Please fill all the fields');
    } else {
      alert('Form submitted');
    }
  };

  return (
    <div
      className="container"
      id="contact"
    >
      <div className="box">
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form id="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            onBlur={(e) =>
              setFormValues({
                ...formValues,
                nameError: e.target.value === '' ? true : false,
              })
            }
            className={formValues.nameError ? 'error' : ''}
          />

          {formValues.nameError ? (
            <small className="error">Sorry, name cannot be empty</small>
          ) : (
            ''
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
                emailError: e.target.value === '' ? true : false,
              })
            }
            onBlur={(e) =>
              setFormValues({
                ...formValues,
                emailError: e.target.value === '' ? true : false,
                emailValidate: validator.isEmail(e.target.value) ? true : false,
              })
            }
            className={formValues.emailError ? 'error' : ''}
          />

          {formValues.emailError ? (
            <small className="error">Sorry, email cannot be empty</small>
          ) : (
            ''
          )}

          {!formValues.emailValidate && formValues.email !== '' ? (
            <small className="error">Please enter a valid email</small>
          ) : (
            ''
          )}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE"
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            onBlur={(e) =>
              setFormValues({
                ...formValues,
                messageError: e.target.value === '' ? true : false,
              })
            }
            className={formValues.messageError ? 'error' : ''}
          />

          {formValues.messageError ? (
            <small className="error">Sorry, message cannot be empty</small>
          ) : (
            ''
          )}
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => handleFormSubmit()}
        >
          send message
        </button>
      </form>
      <div className="rings">
        <img
          src={rings}
          alt="rings"
        />
      </div>
    </div>
  );
};

export default Contact;
