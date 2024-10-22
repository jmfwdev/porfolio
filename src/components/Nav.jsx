import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const [isOpen, setIsOpen] = useState(window.innerWidth < 800); // Default to open only if less than 800px
    const [position, setPosition] = useState({ top: 100, left: 10 }); // Initial position
    const [dropdownClass, setDropdownClass] = useState('');
    const menuRef = useRef(null);
    const isDragging = useRef(false);

    function toggleMenu() {
        if (window.innerWidth < 800) {
            setIsOpen(!isOpen);
        }
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
        // Disable dragging if viewport width is 800px or more
        if (window.innerWidth >= 800) return;

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

    // Update menu state on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) {
                setIsOpen(true); // Keep menu open
            } else {
                setIsOpen(false); // Default to closed
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {window.innerWidth >= 800 ? (
                <div className='desktop-nav'>
                    {/* Desktop Navigation */}
                    <nav>
                        <ul>
                            <li className='home'><a href="#">Home</a></li>
                            <li className='works'><a href="#works">Works</a></li>
                            <li className='about'><a href="#about">About</a></li>
                            <li className='contact'><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            ) : (
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
                                    <li className='home'><a href="#">Home</a></li>
                                    <li className='works'><a href="#works">Works</a></li>
                                    <li className='about'><a href="#about">About</a></li>
                                    <li className='contact'><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;