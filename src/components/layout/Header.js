import React from 'react';

import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header className="header container-fluid">
            <div className="header-list">
                <ul>
                    <li><i class="fa-solid fa-location-dot fa-xl"></i></li>
                    <li><a href='https://maps.app.goo.gl/7diwErFoKerU4GLE7' target='blanck'>Bedoya 891-Córdoba-Argentina</a></li>
                </ul>
            </div>
            <div className="header-list">
                <ul>
                    <li><a href='https://www.instagram.com/invites/contact/?igsh=50urpahz64r8&utm_content=e5vpxdg' target='blank'><i className="fa-brands fa-instagram fa-xl"></i></a></li>
                    <li><a href='https://www.facebook.com/share/sUuoiLJDta9XLjMz/?mibextid=qi2Omg' target='blank'><i className="fa-brands fa-facebook fa-xl"></i></a></li>
                    <li><a href='https://whatsapp.com/dl/' target='blank'><i className="fa-brands fa-whatsapp fa-xl"></i></a></li>
                    <li><a href='https://youtube.com/@misogiaikikaiargentina?si=6OPulyLZp5e97nra' target='blank'><i class="fa-brands fa-youtube fa-xl"></i></a></li>
                </ul>
            </div>
        </header>

    );
}

export default Header;