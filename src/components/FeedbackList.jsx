import React, { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FeedbackContext from '../context/Feedback'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
    const { feedback, loading } = useContext(FeedbackContext)

    if (!loading && (!feedback || feedback.length === 0)) {
        return "no Feedbacks yet"
    }

    return loading ? <h2>Loading...</h2> : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0, y: '-100%'}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: '-100%'}}
                    >
                        <FeedbackItem
                            rating={item.rating}
                            text={item.text}
                            id={item._id}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList