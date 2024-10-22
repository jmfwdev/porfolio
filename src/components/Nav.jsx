import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 100, left: 10 }); // Initial position
    const [dropdownClass, setDropdownClass] = useState('');
    const menuRef = useRef(null);
    const isDragging = useRef(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    // Function to determine dropdown class based on position
    const determineDropdownClass = () => {
        const { top, left } = position;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const isTop = top < viewportHeight / 3;
        const isBottom = top > (viewportHeight * 2) / 3;
        const isLeft = left < viewportWidth / 3;
        const isRight = left > (viewportWidth * 2) / 3;

        if (isTop) {
            if (isLeft) return 'top-left';
            if (isRight) return 'top-right';
            return 'top-middle';
        }
        if (isBottom) {
            if (isLeft) return 'bottom-left';
            if (isRight) return 'bottom-right';
            return 'bottom-middle';
        }
        return 'middle';
    };

    useEffect(() => {
        if (isOpen) {
            setDropdownClass(determineDropdownClass());
        } else {
            setDropdownClass('');
        }
    }, [isOpen, position]);

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const offsetX = touch.clientX - position.left;
        const offsetY = touch.clientY - position.top;

        isDragging.current = true;
        document.body.style.overflow = 'hidden';

        // Start dragging
        const handleTouchMove = (e) => {
            if (!isDragging.current) return;
            const touch = e.touches[0];

            let newLeft = touch.clientX - offsetX;
            let newTop = touch.clientY - offsetY;

            const menuWidth = menuRef.current.offsetWidth;
            const menuHeight = menuRef.current.offsetHeight;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            newLeft = Math.max(0, Math.min(newLeft, viewportWidth - menuWidth));
            newTop = Math.max(0, Math.min(newTop, viewportHeight - menuHeight));
            setPosition({ left: newLeft, top: newTop });
        };

        // Stop dragging
        const handleTouchEnd = () => {
            isDragging.current = false;
            document.body.style.overflow = 'auto';
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };

        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <>
            <div    
                className='mobile-nav'
                ref={menuRef}
                style={{ top: position.top, left: position.left, position: 'fixed' }}
                onTouchStart={handleTouchStart}
            >
                <div className='menu-container'>
                    <div className='menu-icon' onClick={toggleMenu}>
                        <div className='circle'></div>
                    </div>

                    {isOpen && (
                        <nav className={`dropdown-menu ${dropdownClass}`}>
                            <ul>
                                <li className='home'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='works'><a href="#works">Works</a></li>
                                <li className='about'><a href="#about">About</a></li>
                                <li className='contact'><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;

