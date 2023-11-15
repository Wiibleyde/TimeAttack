import React from 'react';
import {
    House,
    Person,
    BoxArrowRight,
    Github
} from 'react-bootstrap-icons';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-green-700 text-white p-4 flex flex-row justify-between items-center" id="footer">
            <div className="links flex flex-row justify-between">
                <a href="https://github.com/Wiibleyde/TimeAttack" className="button mx-2 bg-green-600"><Github className="" />Github</a>
            </div>
        </footer>
    );
}

export default Footer;