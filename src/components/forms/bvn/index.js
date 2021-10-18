import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import FormInput from '../FormInput';import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import './index.scss'

const Bvn =()=> {

    const [open, setOpen] = useState(false);

    const onBar =()=> {
        setOpen(!open)
    }

    return (
        <div className="bvn-all">
            <h3>Bank Verification Number (11-digits)</h3>
            <FormInput />

            <div className="bvn-sub">
                <div className="bvn-icons">
                    <span className="lock"><FontAwesomeIcon icon={faLock}/> </span>
                    <h3 className="bvn-h">Why we need your BVN</h3>
                    <span className="flexEnd"><i onClick={onBar} className={open ? 'fas fa-angle-up' : 'fas fa-angle-down'}></i></span>
                </div>
                <div className="access"><h5>We only need access to your:</h5></div>
                <div className="bvn-font">
                    <div className="fullname">
                        <span className="check"><FontAwesomeIcon icon={faCheck} /></span>
                        <span className="bvn-fullname"><h5>Fullname</h5></span>
                    </div>
                    <div className="phonenumber">
                        <span className="check"><FontAwesomeIcon icon={faCheck} /></span>
                        <span className="bvn-fullname"><h5>Phone Number</h5></span>
                    </div>
                    <div className="dob">
                        <span className="check"><FontAwesomeIcon icon={faCheck} /></span>
                        <span className="bvn-fullname"><h5>Date of Birth</h5></span>
                    </div>
                </div>
                <hr className="bvn-ln" />
                <div className="bvn-lock">
                    <span className="faLock"><FontAwesomeIcon icon={faLock} /></span>
                    <span className="faLockWord"><h3>Your BVN does not give us access to your bank accounts or transactions.</h3></span>
                </div>
            </div>
        </div>
    );
}

export default Bvn;