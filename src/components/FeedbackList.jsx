import React, { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FeedbackContext from '../context/Feedback'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return "no Feedbacks yet"
    }

    return (
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
                            id={item.id}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList