/* react */
import { useContext } from "react";

/* react router */
import { useOutletContext } from "react-router-dom";

/* react bootstrap */
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/* local */
import { AuthContext } from "../context/AuthContext";

function LikeButton({ children, size, item, setIsCurrent }) {
  const { likeJoke } = useOutletContext();
  const {
    state: { user },
  } = useContext(AuthContext);

  const handleLike = () => {
    likeJoke(item._id, user.id)
      .then((itemAndUser) => {
        console.log(itemAndUser);
        setIsCurrent(false);
      })
      .catch((err) => console.log(err));
  };

  console.log(item.likes);

  return (
    <OverlayTrigger overlay={<Tooltip>Roll your eyes at this item.</Tooltip>}>
      <Button
        variant="light"
        size={size}
        className="text-dark"
        onClick={handleLike}
        disabled={item.likes.includes(user.id)}
      >
        <i className="fa-regular fa-face-rolling-eyes me-2"></i>
        {children}
      </Button>
    </OverlayTrigger>
  );
}

export default LikeButton;
