import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

//c0s4vzq2_WsLG3AoVurhrLLiKRMn8xjvEGyCJv5LC
//c0s4vzq2

root.render(
    <Suspense fallback={<h2 className="py-4 text-center">Loading...</h2>}>
        <StrictMode>
            <App />
        </StrictMode>
    </Suspense>
)