import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import data from './dummyData'

function App() {

    const [feedback,setFeedback] = useState(data)

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App