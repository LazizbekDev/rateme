import React from 'react'

const FeedbackStats = ({ feedback }) => {
    let avarage = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    avarage = avarage.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} ta sharh</h4>
            <h4>Umumiy: {isNaN(avarage) ? 0 : avarage}</h4>
        </div>
    )
}

export default FeedbackStats