function canActivate(){
    if(!localStorage.getItem('token')){
        window.location.replace('http://localhost:5500/sign-in.html');
    }else{
        $('.overlay').remove();        
    }
}

canActivate();

