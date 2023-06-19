import React from "react";

function FeedbackStats({ feedback }) {
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating / feedback.length;
    }, 0).toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Raiting: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
