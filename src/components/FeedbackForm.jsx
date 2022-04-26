import React, { useState, useEffect, useContext } from 'react'
import FeedbackContext from '../context/Feedback'
import Card from './shared/Card'
import {Button} from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
            console.log(feedbackEdit)
        }
    }, [feedbackEdit])

    const handleChange = (e) => {
        if (text === '') {
            setDisabled(true)
            setMsg(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMsg('Fikringizda kamida 10 ta harf bo\'lishi kerak')
            setDisabled(true)
        } else {
            setMsg(null)
            setDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length>10) {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
            setMsg('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Menga qanday baho berasiz? ;)</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={text}
                        placeholder="Fikringizni juda muhim"
                    />
                    <Button
                        version={'primary'}
                        type='submit'
                        isDisabled={disabled}
                    >Joylash</Button>
                </div>
            </form>
            {msg && <div className='message'>{msg}</div>}
        </Card>
    )
}

export default FeedbackForm