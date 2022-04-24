import React from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ rating, comment, handleDelete, id }) => {
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button className='close' onClick={() => handleDelete(id)}>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{comment}</div>
        </Card>
    )
}

export default FeedbackItem