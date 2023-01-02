function submited(event){
    event.preventDefault();
    console.log("Name:"+event.target.name.value);
    console.log("Email:"+event.target.email.value);
    console.log("Phone:"+event.target.phone.value);
    console.log("Time:"+event.target.time.value);
    console.log("Date:"+event.target.date.value);
}
