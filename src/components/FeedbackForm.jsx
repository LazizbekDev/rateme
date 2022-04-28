import React, { useState, useEffect, useContext } from 'react'
import FeedbackContext from '../context/Feedback'
import Card from './shared/Card'
import {Button} from './shared/Button'
import RatingSelect from './RatingSelect'
import { useTranslation } from 'react-i18next'

const FeedbackForm = () => {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(10)
    const {t} = useTranslation()

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
                <h2>{t('heading_title')}</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={text}
                        placeholder={t('placeholder')}
                    />
                    <Button
                        version={'primary'}
                        type='submit'
                        isDisabled={disabled}
                    >{t('btn')}</Button>
                </div>
            </form>
            {msg && <div className='message'>{t('msg')}</div>}
        </Card>
    )
}

export default FeedbackForm