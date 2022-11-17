import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux';

import { checkUserName, checkPassword, asyncAuth } from './loginSlice'

import { selectUserName, selectPassword } from './loginSlice';
import { useState } from 'react';

const CenteredDiv = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const IpCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const StsLable = styled.label`
    font-size: 1.5em ;
`
const Ip = styled.input`
     font-size: 1.5em ;
     padding: 0.5em;
     margin: 0.5em;
     color: 'palevioletred';
     background: papayawhip;
     border: none;
     border-radius: 3px;
`
const LoginButton = styled.button`
    background-color: 'palevioletred' ;
    color : 'white';
    font-size: 1.5em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`
export function Login() {

    const [usNm, setUsnm] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch()
    // const isUserNameValid = useSelector( state => state.login.isUserNameValid )
    // const isPasswordValid = useSelector( state => state.login.isUserNameValid )

    const isUserNameValid = useSelector(selectUserName)
    const isPasswordValid = useSelector(selectPassword)

    const onClkLgn = () => {
        dispatch(asyncAuth(usNm, pass))
    }

    const onChUsNm = e => {
        setUsnm(e.target.value)
        dispatch(checkUserName(e.target.value))
    }
    const onChPass = e => {
        setPass(e.target.value)
        dispatch(checkPassword(e.target.value))
    }

    return (
        <CenteredDiv>
            <IpCont>
                <Ip type='text' placeholder='Username' onChange={onChUsNm} />
                <StsLable>{isUserNameValid ? '✅' : '❌'}</StsLable>
            </IpCont>
            <IpCont>
                <Ip type='text' placeholder='Password' onChange={onChPass} />
                <StsLable>{isPasswordValid ? '✅' : '❌'}</StsLable>
            </IpCont>
            <LoginButton onClick={onClkLgn}> Login </LoginButton>
        </CenteredDiv>
    )
}