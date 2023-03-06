import {React,useState} from 'react'
import {Container,Form, Button,FormGroup,Label,Col,Input,Row, Card,CardBody,CardFooter,CardHeader} from 'reactstrap';

import  firebase  from "firebase/app"
import "firebase/auth"
import { toast } from "react-toastify"
//import UserContext from "./Context/UserContext"
import { Redirect } from "react-router-dom"

const SignIn=(props)=>
{

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")


    const handleSignup=()=>
    {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res=>
            {
                console.log(res)
                props.setUser({email:res.user.email, uid: res.user.uid})
            })
        .catch(error=>
            {
                console.log(error)
                toast(error.message,{
                    type:error
                })
            })
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        handleSignup();
    }

    const styles={
      backgroundImage : "url('https://images.pexels.com/photos/11116407/pexels-photo-11116407.jpeg?auto=compress&cs=tinysrgb&w=600)",
      backgroundSize : 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }
    
    if(props.user?.uid)
    {
        return <Redirect to="/" />
    }
    return (

        <div style={styles}>
        <Container className="text-center" >
          <Row>
            <Col lg={6} className="offset-lg-3 mt-5">
              <Card>
                <Form onSubmit={handleSubmit}>
                  <CardHeader className="">Signin here</CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Label for="email" sm={3}>
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="provide your email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="password" sm={3}>
                        Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="your password here"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button type="submit" block color="primary">
                      Sign In
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      );
};

export default SignIn;