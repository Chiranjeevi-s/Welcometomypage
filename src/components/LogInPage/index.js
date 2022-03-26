import { Button, InputBase, makeStyles } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './signIn.css'

const useStyle = makeStyles((theme) => ({
    textfield: {
        border: '1px solid white',
        padding: '5px',
        color: 'antiquewhite',
        fontFamily: 'monospace'
    }
}))

const LogInPage = (props) => {
    const classes = useStyle()
    let details = []
    let loggedInUserDetails = []
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/logiIn/fetch').then(
            (response) => {
                details = response.data
            }
        )
    });

    const logIn = () => {
        if (email && password) {
            if (!details.map(x => x.email).includes(email)) {
                alert("This email hass not yet Registered")
            } else {
                var loggedDetails = details.map(x => x.email)
                for (var i = 0; i <= loggedDetails.length - 1; i++) {
                    if (loggedDetails[i] === email) {
                        loggedInUserDetails = details[i]
                    }
                }
                console.log(loggedInUserDetails)
                if (password === loggedInUserDetails.password) {
                    alert("password Matched !! congo Buddy")
                } else {
                    alert("Password Does Not Match Try Again!")
                }
            }
        } else {
            alert("Email or Password is Empty")
        }
    }

    const backPage = () => {
        props.history.push('/')
    }

    return (
        <div className='firstcss'>
            <div className='firstnameline'>
                <span className='fontstyle'>Please enter your registered E-Mail :</span>
                <InputBase
                    variant='outlined'
                    InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={classes.textfield}
                />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Please enter your password :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} value={password} onChange={e => setPassword(e.target.value)} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <Button variant="contained" onClick={logIn}>Log-In</Button>
            </div>
            <span className='back' onClick={backPage}> Back to main page</span>
        </div>
    )
}

export default LogInPage