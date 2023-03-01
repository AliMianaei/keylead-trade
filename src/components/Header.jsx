import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import SelectCurrency from './SelectCurrency';
import SelectLanguage from './SelectLanguage';

const Header = () => {

    const prevScrollY = useRef(0);

    const [stick, setStick] = useState(false);
    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {   
        
        const handleScroll = () =>  {

            if(window.scrollY > 0) {
                setStick(true)
                const currentScrollY = window.scrollY;
    
                if (prevScrollY.current <= currentScrollY && goingUp) {
                    setGoingUp(false);
                }

                if (prevScrollY.current > currentScrollY && !goingUp) {
                    setGoingUp(true);
                }
        
                prevScrollY.current = currentScrollY;
                // console.log(goingUp, currentScrollY);
            } else {
                setStick(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [stick, goingUp])
    
  return (
    <>
        <section className={`w-100 zIndex-max bg-white sticky-top ${stick && 'shadow-Y3-black3'}`}>
            <main className='max-container pt-3 pb-3'>
                <div className={`row m-0 overflow-hidden position-relative transition-3 ${goingUp ? 'maxh-500 mb-3' : 'maxh-0'}`}>
                    <div className="col-6">
                        <Logo/>
                    </div>
                    <div className='col-6 d-end gap-3'>
                        <div className="d-flex gap-3">
                            <SelectCurrency/>
                            <SelectLanguage/>
                        </div>

                        <div className='d-none d-md-block'>
                            <Link to='/advertise' className='d-center text-decoration-none round-50'>
                                <button className='custom-btn btn-violaPurple-fill'>Add an advertisement</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12 col-lg-5">
                        <Searchbar/>
                    </div>
                    <div className="col-12 col-lg-7 d-flex justify-content-start justify-content-lg-end" style={{overflowX: 'auto'}}>
                        <Navbar/>
                    </div>
                </div>
            </main>
        </section>
        <div className={`transition-3`} style={stick ? {height:'80px'} : {height:'146px'}}> </div>
    </>
  )
}

export default Header;