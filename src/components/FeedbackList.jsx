import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback}) {

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((row) => (
                <FeedbackItem key={row.id} item={row} />
            ))}
        </div>
    )
}

export default FeedbackList