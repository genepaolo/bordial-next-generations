import React, {useState, useEffect} from "react";
import starFilled from "@/resources/Icons/icons8-star-48.png";
import starEmpty from "@/resources/Icons/icons8-star-48-empty.png";
import { Loader, PageTitle} from "@/components";

function Testimonials(){
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(true);
    const [firstDate, setFirstDate] = useState(null);
    const [lastDate, setLastDate] = useState(null);
    const [loadFirst, setLoadFirst] = useState(false);
    const [testimonial, setTestimonial] = useState({
        name: "",
        rating: 5,
        msg: ""
    });

    useEffect(()=>{
        
        
        async function getFirstTestimonials(){
            var base_url = window.location.origin;
            var url = base_url + "/api/testimonials";
            const testimonialJson = await fetch(url);
            const testimonialArr = await testimonialJson.json();
            if(testimonialArr && testimonialArr[0].length){
                const array = testimonialArr[0];
                const first = testimonialArr[1][0];
                setLoadFirst(true);
                setFirstDate(first.date);
                setLastDate(array[array.length-1].date);
                setLoading(false);
                addTestimonialsToPage(array);
    
            }
        }
        function displayLoadMoreButton(){
            if(firstDate!=null && lastDate!=null){
                const button = document.querySelector(".testimonials__btn");
                if(firstDate===lastDate) {button.style.display = "none"}
                else {button.style.display = "block"}
            }
            
        }

        if(!loadFirst){
            getFirstTestimonials();
        }

        
        displayLoadMoreButton();

        if(submit){
            clearTestimonial();
            setSubmit(false);
        }
     // eslint-disable-next-line 
    },[firstDate, lastDate, submit, loadFirst])

    function clearTestimonial(){
        const inputs = document.querySelectorAll("#t-name, #t-msg");
        inputs.forEach(function(input){
            input.value = '';
        });
    }
    
    async function loadTestimonials(){
        setLoading(true);
        const array = await getNextTestimonials();
        setLoading(false);
        addTestimonialsToPage(array);
    }
    

    async function getNextTestimonials(){
        var base_url = window.location.origin;
        var url = base_url + "/api/testimonials/" + lastDate;
        const testimonialJson = await fetch(url);
        const testimonialArr = await testimonialJson.json();
        setLastDate(testimonialArr[testimonialArr.length-1].date);
        setLoadFirst(true);
        return testimonialArr;
    }
    

    function addTestimonialsToPage(testimonials){
        testimonials.forEach(function(testimonial){
            appendTestimonial(testimonial.name, testimonial.rating, testimonial.msg);
        });
    }


    async function postTestimonial(e) {
        var base_url = window.location.origin;
        var url = base_url + "/api/testimonials";
        e.preventDefault();
        const req = {
            method: "POST",
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(testimonial)
        }
        fetch(url, req)
        .then(function(response){
            prependTestimonial(testimonial.name, testimonial.rating, testimonial.msg);
            setSubmit(true);
        })
        .catch(function(err){
            console.log(err);
        });
    }

    function updateTestimonial(e,key){
        const value = e.target.value;
        setTestimonial(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    function stars(rating){
        
        const div = document.createElement("div");
        for(let i = 0;i<rating;i++){
            const star = document.createElement("span");
            star.className = "testimonial__star";
            const starImg = document.createElement("img");
            starImg.src = starFilled;
            star.appendChild(starImg);
            div.appendChild(star);
        }
        for(let i = 0;i<5-rating;i++){
            const nostar = document.createElement("span");
            nostar.className = "testimonial__star";
            const nostarImg = document.createElement("img");
            nostarImg.src = starEmpty;
            nostar.appendChild(nostarImg);
            div.appendChild(nostar);
        }
        return div;
        // return(
        //    <div>
        //        {[...Array(rating)].map((e,i)=> 
        //             <span className="testimonial__star" key={i}>
        //                 <img src={starFilled}></img>
        //             </span>
        //         )}
        //         {[...Array(5 - rating)].map(function(e,i){
        //             return(
        //                 <span className="testimonial__star" key={i}>
        //                     <img src={starEmpty}></img>
        //                 </span>
        //             );
        //         })}
        //    </div>
        // );
    }
    function prependTestimonial(name, rating, msg){
        const testSection = document.querySelector(".testimonials");
        const test = document.createElement("div");
        test.className = "testimonial";
        const left = document.createElement("div");
        const right= document.createElement("div");
        left.className = "testimonial__left";
        right.className = "testimonial__right";
        const h4 = document.createElement("h4");
        h4.textContent = name;
        left.appendChild(h4);
        left.appendChild(stars(rating));
        const p = document.createElement("p");
        p.textContent = msg;
        right.appendChild(p);
        test.append(left,right);
        testSection.prepend(test);
    }
    function appendTestimonial(name, rating, msg){
        const testSection = document.querySelector(".testimonials");
        const test = document.createElement("div");
        test.className = "testimonial";
        const left = document.createElement("div");
        const right= document.createElement("div");
        left.className = "testimonial__left";
        right.className = "testimonial__right";
        const h4 = document.createElement("h4");
        h4.textContent = name;
        left.appendChild(h4);
        left.appendChild(stars(rating));
        const p = document.createElement("p");
        p.textContent = msg;
        right.appendChild(p);
        test.append(left,right);
        testSection.append(test);
    }

    

    function updateRating(e){
        const val = e.target.value
        e.target.style.setProperty("--value", val);
        console.log(e.target.style.getPropertyValue('--value'));
        setTestimonial(prev => ({
            ...prev,
            rating: val
        }))
    }

    function formToggle(){
        const form = document.querySelector(".testimonial__form");
        form.classList.toggle("show");
    }

    function displayPageBody(){
        return(
            <div className="container-fluid">
                <div className="col-12">
                    <br></br>
                    <div className="testimonial__write">
                        <button onClick={formToggle} className="testimonials__btn testimonial__btn__show">Write a review</button>
                        <form className="testimonial__form" onSubmit={postTestimonial}>
                            <div className="form-row">
                                <input className="testimonial__rating" onInput={updateRating} type="range" value={testimonial.rating} step="1" min="1" max="5" />
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                <input placeholder="Enter Name" type="text" onChange={(e) => updateTestimonial(e,"name")} className="form-control" name="from_name"id="t-name" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                <textarea placeholder="Enter Message"  type="text"  onChange={(e) => updateTestimonial(e,"msg")} className="form-control" name="message"id="t-msg" required/>
                                </div>
                            </div>
                            <button className="form-btn" type="submit">SUBMIT</button>
                        </form>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <div className="col-12 testimonials">
                </div>
                {loading ? <Loader />: <div></div>}
                <br/>
                <button className="testimonials__btn" onClick={loadTestimonials}>Load More</button>
                

            </div>
        );
    }

    return(
        <div>
            <PageTitle title="testimonials" />
            {displayPageBody()}
        </div>
    );
    
}

export default Testimonials;