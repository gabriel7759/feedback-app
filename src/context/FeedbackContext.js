import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackSelected, setFeedbackSelected] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = (await fetch("/feedback?_sort=id&_order=desc"));
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = async (newFeedback) => {
    console.log(newFeedback);

        const response = await fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFeedback)
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
    };

    const editFeedback = (item) => {
        setFeedbackSelected({
            item,
            edit: true
        });
    };

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...updatedItem
        } : item));
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete the item?')) {
            setFeedback(feedback.filter((row) => row.id !== id));
        }
    };

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackSelected,
        isLoading,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,        
    }}>
        {children}
    </FeedbackContext.Provider>
};

export default FeedbackContext;