import { Button, InputBase, makeStyles } from '@material-ui/core'
import React from 'react'
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

    const logIn = () => {
        console.log("logIn")
    }

    const backPage = () => {
        props.history.push('/')
    }

    return (
        <div className='firstcss'>
            <div className='firstnameline'>
                <span className='fontstyle'>Please enter your registered E-Mail :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Please enter your password :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <Button variant="contained" onClick={logIn}>Log-In</Button>
            </div>
            <span className='back' onClick={backPage}> Back to main page</span>
        </div>
    )
}

export default LogInPage