import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
            item={row} />
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

export default FeedbackList;
