import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {

    if (!feedback || feedback.length === 0) {
        return "no Feedbacks yet"
    }

    return (
        <div className='feedback-list'>
            {feedback.map(item => (
                <FeedbackItem rating={item.rating} comment={item.text} key={item.id} />
            ))}
        </div>
    )
}

export default FeedbackList