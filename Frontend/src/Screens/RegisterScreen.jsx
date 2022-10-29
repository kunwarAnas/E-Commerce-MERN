import React,{useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import Message from '../Components/Message'
import Loader from '../Components/Loader'
//import {Loader} from '../Components/Loader'
import {register} from '../Actions/userAction'
import { useState } from 'react';
import FormContainer from '../Components/FormContainer';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    //const location = useLocation();
    const redirect= window.location.search ? window.location.search.split('=')[1]:'/';
    const dispatch = useDispatch();
    const userLogin = useSelector(state=>state.userLogin);
    const {loading,error,userInfo} = userLogin;
    const navigate =  useNavigate();
    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        }
    },[userInfo,navigate,redirect])

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(register(name,email,password));
    }
  return (
    <FormContainer>
        <h1>sign In</h1>
        {
            error && <Message variant={'danger'}>{error}</Message>
        }

        {
            loading && <Loader></Loader>
        }
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control type='passsword' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button type='submit' varient='primary'>Sign in </Button>
        </Form>

        <Row>
            <Col>
                New Customer?{''}
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default RegisterScreen 