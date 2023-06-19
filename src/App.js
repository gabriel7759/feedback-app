import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData.js";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <div className="App">
            <Header text="Feedback UI" />
            <FeedbackList feedback={feedback} />
        </div>
    );
}

export default App;