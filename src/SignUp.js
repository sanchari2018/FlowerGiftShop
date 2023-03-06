import {React,useState} from 'react'
import {Container,Form, Button,FormGroup,Label,Col,Input,Row, Card,CardBody,CardFooter,CardHeader} from 'reactstrap';

import  firebase  from "firebase/app"
import "firebase/auth"
import { toast } from "react-toastify"
//import UserContext from "./Context/UserContext"
import { Redirect } from 'react-router-dom';


const SignUp=(props)=>
{

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

    //const context=useContext(UserContext);

    const handleSignup=()=>
    {
        firebase.auth().createUserWithEmailAndPassword(email,password)
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
    
    if(props.user?.uid)
    {
        return <Redirect to="/" />
    }

    const styles={
      backgroundImage : "url('https://images.pexels.com/photos/165925/pexels-photo-165925.jpeg?auto=compress&cs=tinysrgb&w=600')",
      backgroundSize : 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
    }
    return (
        <div style ={styles}>
        <Container fluid className="text-center" >
          <Row>
            <Col lg={6} className="offset-lg-3 mt-5">
              <Card>
                <Form onSubmit={handleSubmit}>
                  <CardHeader className="">Signup here</CardHeader>
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
                      Sign Up
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

export default SignUp;