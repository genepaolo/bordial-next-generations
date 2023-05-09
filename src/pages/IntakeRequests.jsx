import React from "react";
import { PageTitle } from "@/components";
function IntakeRequests(){


    function sendEmail(e) {
        e.preventDefault();
        alert("Functionality disabled on this version!");
    }
    function sendPDF(e){
        e.preventDefault();
        alert("Functionality disabled on this version!");
    }

    function displayPageBody(){
        return(
            <div className="container-fluid-large">
                <div>
                    <p className="font-color-red">
                        Requests filled here will not be forwarded anywhere. This is purely laid out for website demonstration.
                    </p>
                    <p>
                        If you have a PDF for patient referral, submit here to avoid filling out the form.
                    </p>
                    <form onSubmit={sendPDF} className="intake-page-body-form">
                        <fieldset className="form-section">
                            <div className="form-row">

                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-4">
                                    <label >Contact Email<span className="required">*</span></label>
                                </div>
                                <div className="form-text-box col-12 col-md-8">
                                    <input type="text" className="form-control" name="pdf-email" placeholder="..." required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-4">
                                    <label >Upload Patient Referral Form<span className="required">*</span></label>
                                </div>
                                <div className="col-12 col-md-8">
                                    <input type="file"  name="pdf-file" accept="application/pdf"required/>
                                </div>
                            </div>
                            <button className="cu-btn" type="submit">SUBMIT PDF</button>
                        </fieldset>
                    </form>
                </div>
                <p>
                    Complete the form below to submit a new patient referral so we can schedule a visit as soon as possible.
                </p>
                <br></br>
                <form onSubmit={sendEmail} className="intake-page-body-form">
                    <fieldset className="form-section">
                        <legend>Patient Information</legend>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Patient Name <span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="name" placeholder="..." required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Gender <span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                            <select className="custom-select" name="gender" required>
                                <option value="" selected>--- PLEASE CHOOSE ---</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Date of Birth <span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                            <input className="form-control" type="date" name="birth-date" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Phone No.<span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="tel" className="form-control" name="phone-no" placeholder="..." required/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend>Address</legend>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Street <span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="street" placeholder="..." required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >City <span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="city" placeholder="..." required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Apt #</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="apt" placeholder="..."/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Zip Code<span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="zip" placeholder="..." required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Residence Type<span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                            <select className="custom-select" name="residence" required>
                                <option value=""  selected>--- Choose Type ---</option>
                                <option value="Home">Home</option>
                                <option value="Group Home">Group Home</option>
                                <option value="Assisted Living Facility">Assisted Living Facility</option>
                                <option value="Hospice">Hospice</option>
                            </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend>Demographics</legend>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Preferred Language</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                            <select className="custom-select" name="language">
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
                        <div className="form-row">
                                <div className="col-12 col-md-4">
                                    <label >Only if other language selected</label>
                                </div>
                                <div className="form-text-box col-12 col-md-8">
                                    <input type="text" className="form-control" name="other-language" placeholder="..."/>
                                </div>
                            </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Interpreter Needed?</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8 radiobuttons">
                                <div className="form-check col-sm-2">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="interpreter" value="Yes" />
                                        Yes
                                    </label>
                                </div>
                                    <div className="form-check col-sm-2">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="interpreter" value="No" checked/>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                            <div className="form-row">
                                <div className="col-12 col-md-4">
                                    <label >Contact Person<span className="required">*</span></label>
                                </div>
                                <div className="form-text-box col-12 col-md-8">
                                    <input type="text" className="form-control" name="contact-name" placeholder="..." required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-4">
                                    <label >Contact Phone No.<span className="required">*</span></label>
                                </div>
                                <div className="form-text-box col-12 col-md-8">
                                    <input type="text" className="form-control" name="contact-number" placeholder="..." required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-4">
                                    <label >Relationship to Patient<span className="required">*</span></label>
                                </div>
                                <div className="form-text-box col-12 col-md-8">
                                    <input type="text" className="form-control" name="contact-relationship" placeholder="..."required/>
                                </div>
                            </div>
                    </fieldset>
                    <fieldset className="form-section">
                        <legend>Referral Information</legend>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Reason for visit<span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                            <select className="custom-select" name="referral-reason" required>
                                <option value=""  selected>-- Choose Option --</option>
                                <option value="Referral to Home Health">Referral to Home Health</option>
                                <option value="Wound Care">Wound Care</option>
                                <option value="Discharged from Hospital">Discharged from Hospital</option>
                                <option value="Discharged from Hospital">Referral to Hospice</option>
                                <option value="Others">Other Reason</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Other reason or additional comments</label>
                            </div>
                            <div className="col-12 col-md-8">
                                <textarea type="text" placeholder="..."  className="form-control" name="other-reason"/>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Type of Visit<span className="required">*</span></label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                            <select className="custom-select" name="visit-type" required>
                                <option value="" selected>-- Choose Type --</option>
                                <option value="Home Visit">Home Visit</option>
                                <option value="Telehealth">Telehealth</option>
                                <option value="Either">Either</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                    <label >If you have a preferred home health agency, please fill information below</label>
                            </div>
                        </div>
                        <br/>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Home Health Agency</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="hha-name" placeholder="..." />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Contact Person</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="hha-cp" placeholder="..." />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Email</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="text" className="form-control" name="hha-email" placeholder="..." />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Phone No.</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="tel" className="form-control" name="hha-phone" placeholder="..."/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Fax No.</label>
                            </div>
                            <div className="form-text-box col-12 col-md-8">
                                <input type="tel" className="form-control" name="hha-fax" placeholder="..."/>
                            </div>
                        </div>
                        
                    </fieldset>
                    <fieldset className="form-section">
                        <legend>Insurance Information</legend>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Primary Insurance</label>
                            </div>
                            <div className="form-text-box col-12 col-md-4">
                                <input type="text" className="form-control" name="prim-num" placeholder="Medicare ID Number"/>
                            </div>
                            <div className="form-text-box col-12 col-md-4">
                                <input type="text" className="form-control" name="prim-name" placeholder="Insurance Name"/>
                            </div>
                            
                        </div>
                        
                    </fieldset>
                    <fieldset className="form-section">
                        <legend>Document</legend>
                        <div className="form-row">
                            <div className="col-12 col-md-4">
                                <label >Upload Additional Documents</label>
                            </div>
                            <div className="col-12 col-md-8">
                                <input type="file"  name="files"  multiple/>
                            </div>
                           
                        </div>
                    </fieldset>
                    <div className="form-row">
                        </div>
                        <button id="cu-button"className="cu-btn" type="submit">SUBMIT</button>
                    </form>

            </div>
        );
    }

    return(
        <div>
            <PageTitle title="request a visit!" />
            {displayPageBody()}
        </div>
    );
    
}

export default IntakeRequests;