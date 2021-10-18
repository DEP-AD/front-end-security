const BASE_API = 'http://localhost:8080/sms';
const AUTH_SERVICE_API = BASE_API + '/authenticate';

/* evenet listeners */


$('#btn-login').on('click', e => {
    e.preventDefault();
    
    const username =  $('#txtUserName').val() as string;
    const password = $('#txtPassword').val() as string;

    fetch(AUTH_SERVICE_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body : new URLSearchParams({username: username, password: password}).toString();
    }).then((response) => {
        if(response.status === 401){
            alert('Invalid login credentials');
            $('#txtUserName').trigger('select');
        }else if (response.status !== 200){
            throw new Error('Failed to connect to the server')
        }else{
            response.json().then((user) => {
                localStorage.setItem('token', JSON.stringify(user));
                window.location.replace('http://localhost:5500/dashboard.html');
            });
        }
    }).catch((err) => {
        alert(err.message);
        console.log(err);
        
    })
    
})
