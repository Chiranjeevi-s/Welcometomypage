import { Button, InputBase, makeStyles } from '@material-ui/core'
import axios from 'axios'

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
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        dispatch({ type: 'Name', data: firstName })
        props.history.push('./loginIn/success')
        debugger
        if(firstName && lastName && email && number){
            axios.post('http://localhost:8000/loginIn/success', {
                fname: firstName,
                lname: lastName,
                email: email,
                phone: number,
                password: password,
            }).then(() =>{
                alert("sent success")
            })
        }
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
                <InputBase variant='outlined' value={lastName} onChange={(e) => setLastName(e.target.value)} InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>E-Mail :</span>
                <InputBase variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Phone Number :</span>
                <InputBase variant='outlined' value={number} onChange={(e) => { setNumber(e.target.value) }} InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <div className='firstnameline'>
                <span className='fontstyle'>Choose Password :</span>
                <InputBase variant='outlined' vaulr={password} onChange={(e) => setPassword(e.target.value)} InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
            </div>
            <Button variant="contained" onClick={signUp}>Sign-up</Button>
            <span className='back' onClick={backPage}> Back to main page</span>
        </div>
    )
}

export default RegistePage