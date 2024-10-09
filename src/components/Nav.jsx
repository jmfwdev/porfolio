import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 650, left: 10 }); // Initial position
    const menuRef = useRef(null);
    const isDragging = useRef(false);

    function toggleMenu () {
        setIsOpen(!isOpen);
    };

    // handle draggable mobile menu

    const handleTouchStart = (e) => {

        const touch = e.touches[0];
        const offsetX = touch.clientX - position.left;
        const offsetY = touch.clientY - position.top;

        isDragging.current = true;
        document.body.style.overflow = 'hidden';

        // start dragging

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
            setPosition({
              left: newLeft,
              top: newTop,
            });
          };

          // stop dragging

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
                onTouchStart={handleTouchStart}>

                <div className='menu-icon' onClick={toggleMenu}>
                    <div className='circle'></div>
                </div>

                {isOpen && (

                <nav className="dropdown-menu">

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                </nav>
                )}
            </div>

        </>
    )
}

export default Nav;
