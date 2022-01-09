import { Button, InputBase, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './registerPage.css'

const useStyle = makeStyles((theme) => ({
    textfield: {
        border: '1px solid white',
        padding: '5px',
        color: 'antiquewhite',
        fontFamily: 'monospace'
    }
}))

const RegistePage = (props) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    
    const signUp = () => {
        dispatch({type:'Name', data: firstName})
        props.history.push('./loginIn/success')
    }
    const backPage = () => {
        props.history.push('/')
    }
    const handleOnChange = (e) => {
        setFirstName(e.target.value)
    }
    return (
        <div className='firstcss'>
            <div className='firstnameline'>
                <span className='fontstyle'>First Name :</span>
                <InputBase variant='outlined' value={firstName} onChange={(e) => handleOnChange(e)} InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Last Name :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>E-Mail :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Phone Number :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Choose Password :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <Button variant="contained" onClick={signUp}>Sign-up</Button>
            <span className='back' onClick={backPage}> Back to main page</span>
        </div>
    )
}

export default RegistePage