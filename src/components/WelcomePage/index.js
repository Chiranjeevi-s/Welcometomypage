import { Button } from '@material-ui/core'
import React from 'react'
import './welcome.css'

const WelcomePage = (props) => {

    const signUp = () => {
        props.history.push('./signUp')
    }
    const logIn = () => {
        props.history.push('./loginIn')
    }
    return (
        <div className='firstcss'>
            <div className='one-by-one'>
                <span className='Headings'>Welcome to My Page</span><hr style={{margin:0}}/>
                <div className='userStyle'>
                    <span>Existing-User?</span>
                    <Button variant="contained" onClick={signUp}>Sign-up</Button>
                </div>
                <span className='Headings'>OR</span>
                <div className='userStyle'>
                    <span>New-User?</span>
                    <Button variant="contained" onClick={logIn}>Log-In</Button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage