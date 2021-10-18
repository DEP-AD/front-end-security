const BASE_API = 'http://localhost:8080/sms';
const USER_SERVICE_API = BASE_API + '/users';

/* event listener */

$('#btn-signup').on('click', (e) => {
    e.preventDefault();

    const fullName = $("#txtFullName").val() as string;
    const username = $("#txtUserName").val() as string;
    const password = $("#password1").val() as string;
    const confirmPassword = $("#password2").val() as string;

    if (!/^[A-Za-z ]+$/.test(fullName)){
        alert("Invalid full name");
        $("#txtFullName").trigger('select');
        return;
    }else if(username.trim().length < 3){
        alert("Invalid username");
        $("#txtUserName").trigger('select');
        return;
    }else if(password.trim().length === 0){
        alert("Invalid password");
        $("#password1").trigger('select');
        return;
    }else if (confirmPassword.trim().length === 0){
        alert("Invalid Password");
        $("#password2").trigger('select');
        return;
    }else if(password !== confirmPassword){
        alert("Password mismatch");
        $("#password1").trigger('select');
        return;
    }
    createNewAccount({username: username, password: password, fullName: fullName});
});

/* API calls */

function createNewAccount(user: {username: string, password: string, fullName: string}){
    fetch(USER_SERVICE_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((response)=> {
        if (response.status !== 201) throw new Error("Network failure, try again");
        alert("Your account has been created successfully");
        window.location.replace('http://localhost:5500/sign-in.html');
    }).catch((err)=> {
        alert(err.message);
        console.log(err);
    })
}
