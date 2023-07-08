import { FaTimes, FaEdit } from "react-icons/fa"
import { PropTypes } from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="edit">
          <FaEdit color="purple" onClick={() => editFeedback(item)} />
        </button>
        <button className="close">
          <FaTimes color="purple" onClick={() => deleteFeedback(item.id)} />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;