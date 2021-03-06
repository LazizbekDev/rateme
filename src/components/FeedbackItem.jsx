import React, { useContext } from 'react'
import Card from './shared/Card'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import FeedbackContext from '../context/Feedback'

const FeedbackItem = ({ rating, text, id }) => {
    const { editItem, feedbackDelete } = useContext(FeedbackContext)
    const items = JSON.parse(localStorage.getItem('accept')) || [];
    const accepted = items.find(item => item === id)
    return (
        <Card>
            <div className="num-display">{rating}</div>
            {accepted === id && (
                <>
                    <button className='close' onClick={() => feedbackDelete(id)}>
                        <FaRegTrashAlt color='white' />
                    </button>
                    <button className='edit' onClick={() => editItem({ rating, text, id })}>
                        <FaEdit color='white' />
                    </button>
                </>
            )}
            <div className="text-display">{text}</div>
        </Card>
    )
}

export default FeedbackItem