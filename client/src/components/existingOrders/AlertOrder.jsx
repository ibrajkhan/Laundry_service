import React from 'react'
import "./alert.css"
import { Link } from 'react-router-dom'

import Warning from "../images/warning.jpg"
import { useThemeProps } from '@mui/material'


function Alert(props) {

    function getToken(){
        if(window.localStorage){
          return localStorage.getItem("token")
        }
        return ""
      }
    let id =props.orderNo._id
    
    async function statusChaning(){
        try {
            //   
                  console.log(getToken())
                  const response = await fetch(`http://localhost:5000/order/${id}`,{
                    method: 'PUT',
                    mode: 'cors',
                    //cache: 'no-cache',
                    //credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json',
                      authorization: `test ${getToken()}`
                    }
                    
                  })
                  const data = await response.json();
                  console.log(data)
                  props.handleClose()
                  window.location.href = '/orders';
                  // console.log("enter after fetch")
                  if (!data.status === 200) {
                      const error = new Error(response.error);
                      throw error;
                  }        
           
          
            }  catch (error) {
            console.log(error)
        }
        
    }
    // const updateStatus = () => {
    //     axios.put(`/orders/${id}`, {})
    //         .then(res => {
    //             console.log(res);
    //             console.log("alert closed");
    //             closeAlert();
    //             // window.location.href = '/orders'
    //             <Redirect to="/orders"></Redirect>
    //         })
    //         .catch(err => console.log(err)
    //     );
    // }

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
                            <Link to="/orders"><button onClick={()=>statusChaning()}>Proceed </button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(Alert)