import { useContext } from "react";
import UserInfo from "./UserInfo";
import userContext from "./UserContext";

function ProfilePage() {
  const userData = useContext(userContext);
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
