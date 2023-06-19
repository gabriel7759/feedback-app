import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData.js";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete the item?')) {
            setFeedback(feedback.filter((row) => row.id !== id));
        }
    };

    return (
        <div className="App">
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackForm feedback={feedback} />
                <FeedbackStats feedback={feedback} /> 
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </div>
    );
}

export default App;