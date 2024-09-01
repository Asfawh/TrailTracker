/* react */
import { useContext, useState } from "react";

/* react bootstrap */
import Container from "react-bootstrap/Container";

/* local */
import { AuthContext } from "../context/AuthContext";
import LoginModal from "../users/LoginModal";
import RegisterModal from "../users/RegisterModal";
import AccountModal from "./AccountModal";
import useLogout from "../users/hooks/useLogout";

function AccountBar() {
  const { state } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const logout = useLogout();

  const username = state.user ? state.user.username : null;
  const options = state.user ? ["logout"] : ["login", "register"];

  const handleClose = (modalName) => {
    switch (modalName) {
      case "login":
        setShowLogin(false);
        break;
      case "register":
        setShowRegister(false);
        break;
      default:
        console.error("Unexpected modalName");
        break;
    }
  };

  const handleSelect = (e) => {
    switch (e) {
      case "login":
        setShowLogin(true);
        break;
      case "register":
        setShowRegister(true);
        break;
      case "logout":
        logout();
        break;
      default:
        console.error("Unexpected eventKey");
        break;
    }
  };

  return (
    <div className="bg-dark text-light mb-3">
      <Container>
        <div className="text-end py-2">
          <AccountModal
            title={`${username ? username : "Login or register"}`}
            options={options}
            handleSelect={handleSelect}
          />
        </div>
      </Container>
      <LoginModal showLogin={showLogin} handleClose={handleClose} />
      <RegisterModal showRegister={showRegister} handleClose={handleClose} />
    </div>
  );
}

export default AccountBar;
