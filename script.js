function sendMsg() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;

    if(name === "" || email === "") {
        alert("Please fill all fields!");
    } else {
        alert("Message Sent Successfully!");
    }
}