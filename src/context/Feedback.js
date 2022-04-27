import { useState, createContext, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(`https://ratem-e.herokuapp.com/feedback?_sort=id&_order=desc`);
        const data = await response.json()
        setFeedback(data)
        setLoading(false)
    }

    const feedbackDelete = async (id) => {
        await fetch(`https://ratem-e.herokuapp.com/feedback/${id}`, {
            method: 'DELETE'
        })

        setFeedback(feedback.filter(item => item.id !== id))
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`https://ratem-e.herokuapp.com/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedback([data, ...feedback])
    }

    const editItem = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, newFeedback) => {
        const response = await fetch(`https://ratem-e.herokuapp.com/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback(feedback.map(item => item.id === id ? { ...item, ...data } : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackDelete,
        addFeedback,
        editItem,
        feedbackEdit,
        updateFeedback,
        loading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;