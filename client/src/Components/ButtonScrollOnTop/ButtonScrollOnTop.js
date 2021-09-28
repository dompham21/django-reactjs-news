import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
function ButtonScrollOnTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    return (
        <div className={`btn-scroll-top${visible ? " show": ""}`} onClick={scrollToTop}>
            <FaArrowUp/>
        </div>
    )
}

export default ButtonScrollOnTop
