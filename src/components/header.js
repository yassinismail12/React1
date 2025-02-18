import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // For dropdown menu
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile nav

    function toggleDropdown() {
        setIsOpen(prevState => !prevState);
    }

    function toggleMenu() {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <header>
            <nav>
                <div className="first">
                    <a href="#">Astro E-commerce</a>
                    <span className="toggle-menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
                {/* Navigation Menu */}
                <ul className={isMenuOpen ? "show" : ""}>
                    <li><a href="#">All components </a></li>
                    <li>
                        <span onClick={toggleDropdown}>
                            Products <FontAwesomeIcon className={`yes ${isOpen ? "rotated" : ""}`} icon={faArrowUp} />
                        </span>
                        <ul className={`nested ${isOpen ? "show" : ""}`}>
                            <li>Landing Page</li>
                            <li className='produce'>Product Page</li>
                            <li>Shopping Cart</li>
                        </ul>
                    </li>
                    <li><a href="#">Documentation </a></li>
                </ul>
            </nav>
        </header>
    );
}