import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';

import styles from '../../styles/Footer.module.css';

import Logo from '../../public/images/logo.svg';
import FB from '../../public/images/icon-facebook.svg';
import YT from '../../public/images/icon-youtube.svg';
import Twitter from '../../public/images/icon-twitter.svg';
import Pinterest from '../../public/images/icon-pinterest.svg';
import IG from '../../public/images/icon-instagram.svg';


const Footer: React.FC = ()=>{

    const [email,setEmail]=useState('');
    const [invalidEmail,setInvalidEmail]=useState(false);

    const emailForm = (event: React.FormEvent<HTMLFormElement>): void =>{
        event.preventDefault();
        const isValidEmail=EmailValidator.validate(email);
        if(!isValidEmail){
            setInvalidEmail(true);
        }
      };

    const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        const {value}=event.target;
        setEmail(value);
        setInvalidEmail(false);
    }
    return (
        <div className='px-6 pt-12 pb-8 bg-black lg:px-40 lg:py-[3.75rem]'>
            <div className={styles.gridContainer}>
                <div className={styles.inputFormSection}>
                    <form className='flex justify-center gap-2' id="form" onSubmit={emailForm} noValidate>
                        <input value={email} onChange={emailOnChange} placeholder='Updates in your inbox…' className='pl-6 w-3/4 rounded-3xl text-sm text-black min-h-[2.75] lg:min-h-[.9375rem]' />
                        <button type='submit' className='px-6 py-3 bg-brightRed rounded-3xl text-sm'>Go</button>
                    </form>
                    {invalidEmail&&<div className='inbox-error flex pl-10 lg:pl-5'>
                        <p className="text-brightRed italic text-xs">Please insert a valid email</p>
                    </div>}
                </div>
                <div className={styles.colASection+' flex justify-center lg:justify-start'}>
                    <ul className='flex flex-col gap-4 text-sm leading-[1.078125rem]'>
                        <li className='hover:text-brightRed hover:cursor-pointer'>Home</li>
                        <li className='hover:text-brightRed hover:cursor-pointer'>Pricing</li>
                        <li className='hover:text-brightRed hover:cursor-pointer'>Products</li>
                        <li className='hover:text-brightRed hover:cursor-pointer'>About Us</li>
                    </ul>
                </div>
                <div className={styles.colBSection +' flex justify-center lg:justify-start'}>
                    <ul className='flex flex-col gap-4 text-sm leading-[1.078125rem]'>
                        <li className='hover:text-brightRed hover:cursor-pointer'>Careers</li>
                        <li className='hover:text-brightRed hover:cursor-pointer'>Community</li>
                        <li className='hover:text-brightRed hover:cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div className={styles.socialMediaSection}>
                    <div className='flex justify-center lg:justify-start'>
                        <ul className='flex gap-8 lg:gap-3'>
                            <li>
                                <FB className={styles.icon}/>
                            </li>
                            <li>
                                <YT className={styles.icon}/>
                            </li>
                            <li>
                                <Twitter className={styles.icon}/>
                            </li>
                            <li>
                                <Pinterest className={styles.icon}/>
                            </li>
                            <li>
                                <IG className={styles.icon}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.logoSection}>
                    <div className='flex justify-center lg:justify-start'>
                        <Logo className={styles.whitelogo}/>
                    </div>
                </div>
                <div className={styles.copyrightSection}>
                    <p className='text-center text-sm text-white opacity-50 lg:text-end'>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};


export default Footer;


