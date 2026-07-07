const form = document.getElementById("registerForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const phone=document.getElementById("phone").value.trim();

    const password=document.getElementById("password").value;

    const confirmPassword=document.getElementById("confirmPassword").value;

    if(password!==confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    if(!/^\d{10}$/.test(phone)){

        alert("Phone number must be exactly 10 digits");

        return;

    }

    const user={

        name,
        email,
        phone,
        password

    };

    try {

        const response = await fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });

        const result = await response.json();

        if(!response.ok){
            alert(result.message || "Registration failed");
            return;
        }

        alert(result.message || "Registration successful");
        localStorage.setItem("user", JSON.stringify(result.user));

    }
    catch(error){
        console.log(error);
        alert("Could not connect to backend. Start the server on http://localhost:5000");
    }

});
