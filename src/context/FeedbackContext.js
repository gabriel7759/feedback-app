import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is from context item 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is from context item 2",
            rating: 9
        },
        {
            id: 3,
            text: "This is from context item 3",
            rating: 8
        }
    ]);

    const [feedbackSelected, setFeedbackSelected] = useState({
        item: {},
        edit: false
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const editFeedback = (item) => {
        setFeedbackSelected({
            item,
            edit: true
        });
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete the item?')) {
            setFeedback(feedback.filter((row) => row.id !== id));
        }
    };

    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        editFeedback,
        deleteFeedback,
        feedbackSelected,
    }}>
        {children}
    </FeedbackContext.Provider>
};

export default FeedbackContext;