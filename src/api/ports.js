export const portsLocal = {
    contactus:"http://localhost:5000/api/contact-us/",
    testimonial:"http://localhost:5000/api/testimonial/"

}
export const portsHeroku = {
    contactus:"https://bordial-next-generations.herokuapp.com/api/contact-us/",
    testimonial:"https://bordial-next-generations.herokuapp.com/api/testimonial/"
}

export const prefix = process.env.PUBLIC_URL || "";
export const postfix = "#";