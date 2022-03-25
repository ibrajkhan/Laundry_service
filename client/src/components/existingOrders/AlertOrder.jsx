import React from 'react'
import "./alert.css"
import { Link } from 'react-router-dom'

import Warning from "../images/warning.jpg"
import { useThemeProps } from '@mui/material'


function Alert(props) {
    const goToPast=()=>{
        props.handleClose()
    }

    return (
        <div className='popup-box'>
            <div className='alert__box'>
                {console.log("alert component rendering")}
                <div className='alert__header'>
                    Alert

                </div>

                <div className='alert__content'>
                    <div>
                        <img className='warning__icon' src={Warning} alt="warning" />
                    </div>
                    <div>
                        <p className='alert__message'> Are you sure you want to cancel the
                            <br></br>
                            order No: props. OR0001
                        </p>

                        <div >
                            <Link to="/orders"><button onClick={goToPast}>Proceed </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(Alert)