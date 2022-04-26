import { useEffect, useState, useContext } from 'react'
import FeedbackContext from '../context/Feedback'

const RatingSelect = ({select}) => {
    const [seleceted, setSelected] = useState(10)
    const { feedbackEdit } = useContext(FeedbackContext);
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])
    return (
        <ul className='rating'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                <li key={item}>
                    <input
                        type="radio"
                        value={item}
                        name='rating'
                        id={`num${item}`}
                        onChange={handleChange}
                        checked={Number(seleceted) === Number(item)}
                    />
                    <label htmlFor={`num${item}`}>{item}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect