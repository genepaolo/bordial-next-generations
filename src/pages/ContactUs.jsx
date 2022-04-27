import React, { Component} from "react";
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

class ContactUs extends Component {
    constructor(props){
        super(props);
        document.title = "CONTACT US - Cordial Health Providers";
        this.state = {
            active: 'contact-us',
            name:'',
            email:'',
            subject:'',
            msg:''
        }
        this.name='';
        this.email='';
        this.subject='';
        this.msg='';
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('gmail', 'template_i7u578m', e.target, 'user_fysxm9swVB9DFCDMGbTB3')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
    }

    displayPageBody(){
        return(
            <div className="page-body" id="contactus-page-body">
                <div className="col-sm-12 col-md-6">
                    <br></br>
                    <p>Cordial Healthcare Providers</p>
                    <p>127 S. Brand Blvd., Suite 333</p>
                    <p>Glendale, CA, 91204</p>
                    <br></br>
                    <p>Phone: <a href ="tel:8182399293"> (818) 239-9293</a></p>
                    <p>Fax:<a href="tel:8182394525"> (818) 239-4525</a></p>
                    <p>Email:<a href ="mailto: info@cordialmd.com"> info@cordialmd.com</a></p>
                    <br></br>
                    <p>Office hours:</p>
                    <p>Monday through Friday from 09:00 am to 6:00 pm</p>
                    <p>Saturday- 09:00 am to 3:00 pm</p>
                    <br/>
                    <p>Call or email us directly for an immediate response. You may also send us a message through the form below and we will respond to your inquiry as soon as possible. We look forward to hearing from you.</p>
                    <br/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <br></br>
                    <form onSubmit={this.sendEmail}>
                        <div className="form-row">
                            <div className="col-12">
                            <input placeholder="Enter Name" type="text" ref={(c) => this.name = c} className="form-control" name="from_name"id="cu-name" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="form-row">
                            <div className="col-12">
                            <input placeholder="Enter Email" type="text"ref={(c) => this.email = c} className="form-control" name="from_email"id="cu-email" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="form-row">
                            <div className="col-12">
                            <textarea placeholder="Enter Message" type="text"  ref={(c) => this.msg = c} className="form-control" name="message"id="cu-msg" required/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                            <button id="cu-button"className="cu-btn" type="submit">SUBMIT</button>
                    </form>
                </div>
                

            </div>
        );
    }

    render(){
        return(
            <div className="body" id="contact-us-body">
                <div className="page-title">
                    <p className="page-title-p">CONTACT US</p>
                </div>
                {this.displayPageBody()}
            </div>
        );
    }
}

export default ContactUs;