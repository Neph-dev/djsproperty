import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineMenu } from "react-icons/ai";

import './navigationBar.css';


function NavigationBar({ activeTab }) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [showToggle, setShowToggle] = useState(false)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <>
            {(screenWidth > 500) && (

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
            )}

            {(screenWidth < 500) && (
                showToggle === false ? (
                    <AiOutlineMenu
                        size={45}
                        color={'#ffff'}
                        onClick={() => setShowToggle((prevState) => !prevState)}
                        className='AiOutlineMenu' />
                )
                    :
                    <div id="toggled-navigation">
                        <AiOutlineRight
                            onClick={() => setShowToggle((prevState) => !prevState)}
                            size={45}
                            color={'#fff'}
                            className='AiOutlineRight' />

                        <ul className='toggled-nav-list'>
                            <li className='toggled-nav-list-item'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='toggled-nav-list-item'>
                                <Link to='/Accomodations'>Accomodations</Link>
                            </li>
                            <li className='toggled-nav-list-item'>
                                <Link to='/'>About Us</Link>
                            </li>
                            <li className='toggled-nav-list-item'>
                                <Link to='/Contact'>Contact An Agent</Link>
                            </li>
                        </ul>
                    </div>
            )}
        </>
    );
}

export default NavigationBar;