import { useEffect, useState } from "react";
import FormUpdatePrestataire from "../../components/FormUpdatePrestataire";
import FormUserUpdate from "../../components/FormUserUpdate";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8888/api/users/${id}`);
        const userData = await response.json();
        setUserRole(userData.roles[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <>
      {userRole === "ROLE_PRESTATAIRE" && <FormUpdatePrestataire userId={id} />}
      {userRole === "ROLE_USER" && <FormUserUpdate userId={id} />}
    </>
  );
};

export default UpdateUser;
