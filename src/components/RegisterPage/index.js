import { Button, InputBase, makeStyles } from '@material-ui/core'
import React from 'react'
import { toast } from 'react-toastify'
// import CustomTextField from '../../CustomComponents/CustomTextField'
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
    
    const signUp = () => {
        console.log("Clicked")
        toast.warning("Need to Implement")
    }
    const backPage = () => {
        props.history.push('/')
    }
    return (
        <div className='firstcss'>
            <div className='firstnameline'>
                <span className='fontstyle'>First Name :</span>
                <InputBase variant='outlined' InputProps={{ inputProps: { style: { padding: '0px', height: '40px' } } }} className={classes.textfield} />
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