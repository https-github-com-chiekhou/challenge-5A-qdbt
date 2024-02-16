import React, { useState } from "react";
import FormAddPrestataire from "../../components/FormAddPrestataire";
import FormAddUser from "../../components/FormAddUser";

const AddUser = () => {
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
          Add a user
        </button>
      ) : (
        <button className="bg-indigo-600" onClick={handleClickPresta}>
          Add a prestataire
        </button>
      )}
      {isPrestataire ? <FormAddPrestataire /> : <FormAddUser />}
    </>
  );
};

export default AddUser;
