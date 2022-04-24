import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import data from './dummyData'

function App() {

    const [feedback,setFeedback] = useState(data)

    const feedbackDelete = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} deleteFeedback={feedbackDelete} />
            </div>
        </>
    )
}

export default App