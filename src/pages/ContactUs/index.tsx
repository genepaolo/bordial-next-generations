import React, {useState} from "react";
import {PageTitle} from "@/components";
import {portsLocal, portsHeroku} from "@/api/ports";

const ContactUs = () =>{

    const [state, setState] = useState({
        name:'',
        email:'',
        msg:''
    })

    function updateState(e: any, key:string){
        const value = e.target.value;
        setState(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    function displayPageBody(){
        return(
            <div className="container-fluid flex-box">
                <div className="col-md-12 col-lg-6">
                    <br></br>
                    <p>Bordial Next Generations</p>
                    <p>University Park Campus, USC</p>
                    <p>Syracuse, NY, 90007</p>
                    <br></br>
                    <p>Phone: <a href ="/contact-us"> (XXX) XXX-XXXX</a></p>
                    <p>Fax:<a href="/contact-us"> (XXX) XXX-XXX</a></p>
                    <p>Email:<a href ="mailto: paolo.gene@gmail.com"> paolo.gene@gmail.com</a></p>
                    <br></br>
                    <p>Office hours:</p>
                    <p>Monday through Friday from 09:00 am to 5:00 pm</p>
                    <p>Saturday- 09:00 am to 2:00 pm</p>
                    <br/>
                    <p>Call or email us directly for an immediate response. You may also send us a message through the form below and we will respond to your inquiry as soon as possible. We look forward to hearing from you.</p>
                    <br/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <br></br>
                    <form onSubmit={(e)=>sendEmail(e,state)}>
                        <div className="form-row">
                            <div className="col-12">
                            <input placeholder="Enter Name" onChange={(e) => updateState(e,"name")} className="form-control" name="from_name"id="cu-name" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="form-row">
                            <div className="col-12">
                            <input placeholder="Enter Email" onChange={(e) => updateState(e,"email")} className="form-control" name="from_email"id="cu-email" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="form-row">
                            <div className="col-12">
                            <textarea placeholder="Enter Message" onChange={(e) => updateState(e,"msg")} className="form-control" name="message"id="cu-msg" required/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                            <button disabled className="form-btn" type="submit">SUBMIT</button> 
                            {/* Disabled for now, until email fixed */}
                    </form>
                </div>
                

            </div>
        );
    }

    return(
        <div>
            <PageTitle title="contact us" />
            {displayPageBody()}
        </div>
    );
    
}

async function sendEmail(e:any, state: {name: string;email: string;msg: string;}) {
    const port = window.location.hostname === "localhost" ? portsLocal.contactus:portsHeroku.contactus;
    e.preventDefault();
    const req = {
        method: "POST",
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(state)
    }
    try{
        const response = await fetch(port, req);
        if(response.ok) alert("Thank you for the email!")
    } catch(e){
        alert(e);
    }
    // fetch(port, req)
    // .then()
    // .catch(error=>alert(error));
}

export default ContactUs;