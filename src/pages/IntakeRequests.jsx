import React, { Component } from "react";
import emailjs from 'emailjs-com';
import "../styles/styles.scss";
import "../styles/styles600px.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

class IntakeRequests extends Component {
    constructor(props){
        super(props);
        document.title = "INTAKE FORM - Cordial Health Providers";
        this.state = {
            active: 'intake-requests'
        }
    }


    sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('gmail', 'template_tpbxcoh', e.target, 'user_fysxm9swVB9DFCDMGbTB3')
          .then((result) => {
              window.location.reload();  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
              alert("Successfully submitted.");
          }, (error) => {
            alert("There was an issue processing your form submission. Please try again. Do not submit documents that exceed 500 KB. If the issue occurs again, please contact us.");
          });
    }

    displayPageBody(){
        return(
            <div className="page-body" id="intake-page-body">
                <p>
                    Complete the form below to submit a new patient referral, so we can schedule a visit as soon as possible.
                </p>
                <br></br>
                <form onSubmit={this.sendEmail} class="intake-page-body-form">
                    <fieldset class="form-section">
                        <legend>Patient Information</legend>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Patient Name <span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="name" placeholder="..." required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Gender <span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                            <select class="custom-select" name="gender" required>
                                <option value="" selected>--- PLEASE CHOOSE ---</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Date of Birth <span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                            <input class="form-control" type="date" name="birth-date" required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Phone No.<span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="tel" class="form-control" name="phone-no" placeholder="..." required/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="form-section">
                        <legend>Address</legend>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Street <span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="street" placeholder="..." required/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >City <span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="city" placeholder="..." required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Apt #</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="apt" placeholder="..."/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Zip Code<span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="zip" placeholder="..." required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Residence Type<span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                            <select class="custom-select" name="residence" required>
                                <option value=""  selected>--- Choose Type ---</option>
                                <option value="Home">Home</option>
                                <option value="Group Home">Group Home</option>
                                <option value="Assisted Living Facility">Assisted Living Facility</option>
                                <option value="Hospice">Hospice</option>
                            </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="form-section">
                        <legend>Demographics</legend>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Preferred Language</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                            <select class="custom-select" name="language">
                                <option value=""  selected></option>
                                <option value="Armenian">Arabic</option>
                                <option value="Armenian">Armenian</option>
                                <option value="English">English</option>
                                <option value="Farci">Farsi</option>
                                <option value="Russian">Russian</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Tagalog">Tagalog</option>
                                <option value="Tagalog">Other Language</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-row">
                                <div class="col-12 col-md-4">
                                    <label >Only if other language selected</label>
                                </div>
                                <div class="form-text-box col-12 col-md-8">
                                    <input type="text" class="form-control" name="other-language" placeholder="..."/>
                                </div>
                            </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Interpreter Needed?</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8 radiobuttons">
                                <div class="form-check col-sm-2">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="radio" name="interpreter" value="Yes" />
                                        Yes
                                    </label>
                                </div>
                                    <div class="form-check col-sm-2">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="radio" name="interpreter" value="No" checked/>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                            <div class="form-row">
                                <div class="col-12 col-md-4">
                                    <label >Contact Person<span class="required">*</span></label>
                                </div>
                                <div class="form-text-box col-12 col-md-8">
                                    <input type="text" class="form-control" name="contact-name" placeholder="..." required/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-12 col-md-4">
                                    <label >Contact Phone No.<span class="required">*</span></label>
                                </div>
                                <div class="form-text-box col-12 col-md-8">
                                    <input type="text" class="form-control" name="contact-number" placeholder="..." required/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-12 col-md-4">
                                    <label >Relationship to Patient<span class="required">*</span></label>
                                </div>
                                <div class="form-text-box col-12 col-md-8">
                                    <input type="text" class="form-control" name="contact-relationship" placeholder="..."required/>
                                </div>
                            </div>
                    </fieldset>
                    <fieldset class="form-section">
                        <legend>Referral Information</legend>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Reason for visit<span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                            <select class="custom-select" name="referral-reason" required>
                                <option value=""  selected>-- Choose Option --</option>
                                <option value="Referral to Home Health">Referral to Home Health</option>
                                <option value="Wound Care">Wound Care</option>
                                <option value="Discharged from Hospital">Discharged from Hospital</option>
                                <option value="Discharged from Hospital">Referral to Hospice</option>
                                <option value="Others">Other Reason</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Other reason or additional comments</label>
                            </div>
                            <div class="col-12 col-md-8">
                                <textarea type="text" placeholder="..."  class="form-control" name="other-reason"/>

                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Type of Visit<span class="required">*</span></label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                            <select class="custom-select" name="visit-type" required>
                                <option value="" selected>-- Choose Type --</option>
                                <option value="Home Visit">Home Visit</option>
                                <option value="Telehealth">Telehealth</option>
                                <option value="Either">Either</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12">
                                    <label >If you have a preferred home health agency, please fill information below</label>
                            </div>
                        </div>
                        <br/>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Home Health Agency</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="hha-name" placeholder="..." />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Contact Person</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="hha-cp" placeholder="..." />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Email</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="text" class="form-control" name="hha-email" placeholder="..." />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Phone No.</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="tel" class="form-control" name="hha-phone" placeholder="..."/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Fax No.</label>
                            </div>
                            <div class="form-text-box col-12 col-md-8">
                                <input type="tel" class="form-control" name="hha-fax" placeholder="..."/>
                            </div>
                        </div>
                        
                    </fieldset>
                    <fieldset class="form-section">
                        <legend>Insurance Information</legend>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Primary Insurance</label>
                            </div>
                            <div class="form-text-box col-12 col-md-4">
                                <input type="text" class="form-control" name="prim-num" placeholder="Medical ID Number"/>
                            </div>
                            <div class="form-text-box col-12 col-md-4">
                                <input type="text" class="form-control" name="prim-name" placeholder="Insurance Name"/>
                            </div>
                            
                        </div>
                        
                    </fieldset>
                    <fieldset class="form-section">
                        <legend>Document</legend>
                        <div class="form-row">
                            <div class="col-12 col-md-4">
                                <label >Upload Additional Documents</label>
                            </div>
                            <div class="col-12 col-md-8">
                                <input type="file"  name="files"  multiple/>
                            </div>
                            <br/>
                            <br/>
                            <p>Total document size must not exceed 500 KB. If you wish to send documents that exceed this limit, please email separately.</p>
                        </div>
                    </fieldset>
                    <div class="form-row">
                            {/* <div class="col-12 ">
                                <label ></label>
                            </div> */}
                        </div>
                        <button id="cu-button"class="cu-btn" type="submit">SUBMIT</button>
                    </form>

            </div>
        );
    }

    render(){
        return(
            <div className="body" id="intake-requests-body">
                <div className="page-title">
                    <p className="page-title-p">REQUEST A VISIT</p>
                </div>
                {this.displayPageBody()}
            </div>
        );
    }
}

export default IntakeRequests;