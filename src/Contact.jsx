import React,{useState,useEffect,useRef} from 'react'
import vp from '../src/vvp.jpg'
import { Container,Row } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function ContactUs() {

    // destructured of array
    const[data,setData]=useState("");
    // used useRef to stored data
    const name=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const subject=useRef("");
    const address=useRef("");
    // create a event handeler function 
    const addEventFormData=(e)=>
    {
        e.preventDefault();
        // stored all data in an object
        var insert={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            subject:subject.current.value,
            address:address.current.value
        }

        // call api 
        axios.post(`http://localhost:3000/contact-us`,insert).then(()=>{

            // pass a sweetalert messages
            Swal.fire({
                title: "Thanks!",
                text: "You data successfully submitted!",
                icon: "success"
              });

              e.target.reset();

        });
    }
    return (

    
    <>
    <Container className='mt-5'>
        <Row>
            <div className='col-md-4'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZy8NncS3I1f9I-Fq4OocYlAL0aQ4JDTCmMg&s' alt='img'  className='img-fluid'/>
            </div>
            <div className='col-md-8'>
                <h1>Contact with us</h1>
                <hr />
                <form onSubmit={addEventFormData}>
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Name *' className='form-control' ref={name} />
                    </div>

                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Email *' className='form-control' ref={email} />
                    </div>

                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Phone *' className='form-control' ref={phone} />
                    </div>

                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Subject *' className='form-control' ref={subject} />
                    </div>

                    
                    <div className='form-group mt-2'>
                        <textarea  placeholder='Address *' className='form-control' ref={address}></textarea>
                    </div>

                    
                    <div className='form-group mt-2'>
                        <input type='submit' placeholder='Name *' className='btn btn-lg btn-dark text-white'  value="Send" />
                    </div>
                </form>
            </div>
   
        </Row>

    </Container>
    
    </>
  )
}

