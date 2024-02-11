import React, { useState } from "react";
import FormRegisterUser from "../components/FormRegisterUser";
import FormRegisterPrestataire from "../components/FormRegisterPrestataire";

const Register = () => {
  const [isPrestataire, setIsPrestataire] = useState(false);

  const handleClickPresta = () => {
    setIsPrestataire(true);
  };

  const handleClickClient = () => {
    setIsPrestataire(false);
  };

  return (
    <>
      {isPrestataire ? (
        <button className="bg-indigo-600" onClick={handleClickClient}>
          S'inscrire en tant client
        </button>
      ) : (
        <button className="bg-indigo-600" onClick={handleClickPresta}>
          S'inscrire en tant prestataire
        </button>
      )}
      {isPrestataire ? <FormRegisterPrestataire /> : <FormRegisterUser />}
    </>
  );
};

export default Register;
