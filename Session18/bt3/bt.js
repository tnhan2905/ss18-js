let  username = prompt("Nhập vào tên của bạn: ");
if (username === null) {
    alert("Cancelled");
} 
else if (username === "ADMIN"){
    let password = prompt("Nhập mật khẩu");

if (password=== "TheMaster"){
    alert("Welcome");
}
else if (Password === null) {
    alert("Cancelled");
}
 else {
    alert("Wrong password");
}
}
else {
alert("I Don't know you");
}
