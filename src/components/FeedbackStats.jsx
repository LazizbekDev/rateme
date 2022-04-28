import React, {useContext} from 'react'
import { useTranslation } from 'react-i18next'
import FeedbackContext from '../context/Feedback'

const FeedbackStats = () => {
    const { t } = useTranslation()
    const {feedback} = useContext(FeedbackContext)
    let avarage = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    avarage = avarage.toFixed(1).replace(/[.,]0$/, '')
    avarage = Math.round(avarage)
    const numOfViews = feedback.length
    const numOfAll = isNaN(avarage) ? 0 : avarage

    return (
        <div className='feedback-stats'>
            <h4>{t('review', {numOfViews})}</h4>
            <h4>{t('all', {numOfAll})}</h4>
        </div>
    )
}

export default FeedbackStats