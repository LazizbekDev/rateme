import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../dummyData'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(data)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const feedbackDelete = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }
    let id = [];
    localStorage.setItem('IDs', id)

    const addFeedback = (e) => {
        e.id = uuidv4()
        id = id.push(e.id)
        localStorage.setItem('IDs', id)
        setFeedback([e,...feedback])
    }

    const editItem = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, newFeedback) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...newFeedback} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackDelete,
        addFeedback,
        editItem,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;