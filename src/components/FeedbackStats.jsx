import React, {useContext} from 'react'
import FeedbackContext from '../context/Feedback'

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext)
    let avarage = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    avarage = avarage.toFixed(1).replace(/[.,]0$/, '')
    avarage = Math.round(avarage)

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} ta sharh</h4>
            <h4>Umumiy: {isNaN(avarage) ? 0 : avarage}</h4>
        </div>
    )
}

export default FeedbackStats