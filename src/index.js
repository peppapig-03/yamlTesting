import config from "./emailConfig.js"
import emailjs from "@emailjs/nodejs"

emailjs.init({
    publicKey:config.publicKey
})
const sendEmail=async function(rainLocation, rainTime){
    console.log(1)
    const details={
        location:rainLocation,
        time:rainTime
    }
    console.log(2)
    try{
        console.log(3)
        const response=await emailjs.send(config.serviceID,config.templateID,details)
        console.log(4)
        console.log("Success!", response.status, response.text)
    } catch (error){
        console.log(5)
        console.log("Failed...", error)
    }
}
sendEmail("Kuala Lumpur", "1700")
console.log(6)