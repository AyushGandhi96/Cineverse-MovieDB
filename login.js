const form=document.getElementById("loginForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const data={

email,

password

};

try {

const response = await fetch("http://localhost:5000/api/auth/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

const result = await response.json();

if (!response.ok) {
alert(result.message || "Login failed");
return;
}

alert(result.message || "Login successful");

localStorage.setItem("user", JSON.stringify(result.user));

}
catch (error) {
console.log(error);
alert("Could not connect to backend. Start the server on http://localhost:5000");
}

});
