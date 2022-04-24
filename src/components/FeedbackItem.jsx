import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({rating, comment}) => {
  return (
    <Card reverse={true}>
        <div className="num-display">{rating}</div>
        <div className="text-display">{comment}</div>
    </Card>
  )
}

export default FeedbackItem