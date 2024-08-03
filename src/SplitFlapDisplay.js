import React, { useState, useEffect } from 'react';
import './SplitFlapDisplay.css';

const CHARS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const SplitFlapChar = ({ targetChar }) => {
    const [displayChar, setDisplayChar] = useState(' ');
    const [flipping, setFlipping] = useState(false);
    const [stopped, setStopped] = useState(false);

    useEffect(() => {
        if (stopped) return;

        let currentIndex = CHARS.indexOf(displayChar.toUpperCase());
        const targetIndex = CHARS.indexOf(targetChar.toUpperCase());

        if (currentIndex === -1) currentIndex = 0;

        const flipChar = () => {
            if (currentIndex !== targetIndex) {
                currentIndex = (currentIndex + 1) % CHARS.length;
                setDisplayChar(CHARS[currentIndex]);
                setFlipping(true);
                setTimeout(() => setFlipping(false), 50);
                setTimeout(flipChar, 100);
            } else {
                setDisplayChar(targetChar);
                setStopped(true);
            }
        };

        flipChar();
    }, [targetChar, stopped]);

    return (
        <div className={`split-flap-char ${flipping ? 'flipping' : ''}`}>
            {displayChar}
        </div>
    );
};

const SplitFlapDisplay = () => {
    const messages = [
        'WELCOME TO DILIGENT',
        'FOCUSED WORKSPACE',
        'HIGH-SPEED WIFI',
        '24/7 ACCESS',
        'MEETING ROOMS',
        'COFFEE BAR',
        'NETWORKING EVENTS',
        'ERGONOMIC CHAIRS',
        'PRINTING SERVICES',
        'JOIN OUR COMMUNITY'
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayText, setDisplayText] = useState('                    \n                    ');

    useEffect(() => {
        const showNextMessage = () => {
            setDisplayText(messages[currentMessageIndex].padEnd(40, ' '));
            
            setTimeout(() => {
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            }, 7000); // 5 second pause + 2 seconds for animation
        };

        showNextMessage();
    }, [currentMessageIndex]);

    const lines = displayText.match(/.{1,20}/g) || [];

    return (
        <div className="split-flap-display">
            <h2>Diligent Coworking Space</h2>
            <div className="display-container">
                {lines.map((line, lineIndex) => (
                    <div key={lineIndex} className="display-text">
                        {line.split('').map((char, charIndex) => (
                            <SplitFlapChar 
                                key={`${lineIndex}-${charIndex}-${char}`}
                                targetChar={char} 
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SplitFlapDisplay;