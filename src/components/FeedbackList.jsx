import { motion, AnimatePresence } from "framer-motion"
import { PropTypes } from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((row) => (
        <motion.div
          key={row.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem 
            key={row.id} 
            item={row}
            handleDelete={handleDelete} />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );

  /*
  Not animated version

  return (
    <div className="feedback-list">
      {feedback.map((row) => (
        <FeedbackItem 
            key={row.id} 
            item={row}
            handleDelete={handleDelete} />
      ))}
    </div>
  );
  */
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
