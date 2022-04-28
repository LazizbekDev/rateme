import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import { FeedbackProvider } from "./context/Feedback"
import "./til"

function App() {
    return (
        <FeedbackProvider>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
            </div>
        </FeedbackProvider>
    )
}

export default App