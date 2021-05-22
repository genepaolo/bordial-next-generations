import React, { Component, useState } from "react";
import emailjs from 'emailjs-com';
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

class ContactUs extends Component {
    constructor(props){
        super(props);
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
                <br></br>
                <p>Cordial Healthcare Providers</p>
                <p>Email: <a href ="mailto: cordialmmg@gmail.com">cordialmmg@gmail.com</a></p>
                <br/>
                <p>127 S. Brand Blvd</p>
                <p>Suite 333</p>
                <p>Glendale, CA 91204</p>
                <br></br>
                <p>Thank you for choosing our services. For service inquiries and other concerns, you may visit our office, leave us a message using the form below, or send us an email directly. One of our team members will be in contact as soon as possible.</p>
                <br></br>
                <form onSubmit={this.sendEmail}>
                    <div class="form-row">
                        <div class="col-12">
                        <label >Name <span class="required">*</span></label>
                        <input type="text" ref={(c) => this.name = c} class="form-control" name="from_name"id="cu-name" required/>
                        {/* <input type="text" value={this.state.name} onChange={this.handleChangeName} class="form-control" id="cu-name" required/> */}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12">
                        <label >Email <span class="required">*</span></label>
                        <input type="text"ref={(c) => this.email = c} class="form-control" name="from_email"id="cu-email" required/>
                        {/* <input type="text" value={this.state.email} onChange={this.handleChangeEmail} class="form-control" id="cu-email" required/> */}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12">
                        <label >Subject <span class="required">*</span></label>
                        <input type="text" ref={(c) => this.subject = c} class="form-control" name="subject"id="cu-subject" required/>
                        {/* <input type="text" value={this.state.subject} onChange={this.handleChangeSubject} class="form-control" id="cu-subject" required/> */}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-12">
                        <label >Message <span class="required">*</span></label>
                        <textarea type="text"  ref={(c) => this.msg = c} class="form-control" name="message"id="cu-msg" required/>
                        {/* <textarea type="text" value={this.state.msg} onChange={this.handleChangeMsg} class="form-control" id="cu-msg" required/> */}
                        </div>
                    </div>
                    <br/>
                        <button id="cu-button"class="btn" type="submit">Submit Message</button>
                    </form>

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