import config from "./emailConfig.js"
import emailjs from "@emailjs/nodejs"

emailjs.init({
    privateKey:config.privateKey,
    publicKey:config.publicKey
})

const sendEmail=async function(rainLocation, rainTime){
    const details={
        location:rainLocation,
        time:rainTime
    }
    try{
        const response=await emailjs.send(config.serviceID,config.templateID,details)
        console.log("Success!", response.status, response.text)
    } catch (error){
        console.log("Failed...", error)
    }
}
sendEmail("Shah Alam", "1700")