var credentials = {username : "username", password : "password"};

var givePwd = prompt("Enter password for " + credentials.username);
if(givePwd === credentials.password) {
  alert("Passwords matched");
} else {
  alert("Oops");
}
