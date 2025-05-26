import { useState } from 'react';
import './index.css'

export const SuspiciousButton = () => {
    const [backgroundOverlay, setBackgroundOverlay] = useState(false);

    const toggleOverlay = () => {
        setBackgroundOverlay(prevState => !prevState)
    }

    return <div className={`overlay`} onClick={toggleOverlay}>
        <text className='buttonStyle'>
            {backgroundOverlay && 'Kinda SUS'}
        </text>
    </div>
}