import React, {useContext} from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/Feedback'

const FeedbackItem = ({ rating, text, id }) => {
    const { feedbackDelete, editItem } = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button className='close' onClick={() => feedbackDelete(id)}>
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => editItem({ rating, text, id })}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{text}</div>
        </Card>
    )
}

export default FeedbackItem