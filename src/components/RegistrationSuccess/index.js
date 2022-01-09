import React from 'react'
import { useSelector } from 'react-redux'
import './registrationSuccess.css'

const RegistrationSuccess = (props) => {
    const name = useSelector(state => state.text)

    const backToWelcomePage = () => {
        props.history.push('/')
    }
    return(
        <div>
            Registration Success {name}, Now you can go back to Welcome Page and signUp as Existing User<br />
            <span className='fontzz' onClick={backToWelcomePage}>click here To go back to WelcomePage</span>
        </div>
    )
}

export default RegistrationSuccess