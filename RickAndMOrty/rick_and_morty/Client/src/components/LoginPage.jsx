import React from "react";
import style from "./LoginPage.module.css";
import { useState } from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <h1>Aqui va el modulo de login</h1>
//       </>
//     );
//   }
// }

// export default About;

const validate = (form, setErrors, errors) => {
  if (!form.email) setErrors({ ...errors, email: "Email vacío" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email inválido" });
  }
};

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value }); // cambio form...
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("LOGIN EXITOSO");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? style.error : style.success}
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
