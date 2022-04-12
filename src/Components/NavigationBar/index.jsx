import React from 'react';
import { Link } from 'react-router-dom';

import './navigationBar.css';


function NavigationBar({ activeTab }) {
    return (
        <div id='navigationBar'>
            <ul className='navigation-list-container'>
                <li
                    className={
                        activeTab === 'home' ?
                            'navigation-list-element-active'
                            : 'navigation-list-element'} >
                    <Link to='/'>Home</Link>
                </li>
                <li
                    className={
                        activeTab === 'accomodations' ?
                            'navigation-list-element-active'
                            : 'navigation-list-element'} >
                    <Link to='/Accomodations'>Accomodations</Link>
                </li>
                <li
                    className={
                        activeTab === 'about' ?
                            'navigation-list-element-active'
                            : 'navigation-list-element'} >
                    <Link to='/'>About Us</Link>
                </li>
                <li
                    className={
                        activeTab === 'contact' ?
                            'navigation-list-element-active'
                            : 'navigation-list-element'} >
                    <Link to='/Contact'>Contact An Agent</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationBar;