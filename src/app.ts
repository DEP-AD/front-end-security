export function getUserName(){
    const token = localStorage.getItem('token');
    if(!token) throw new Error('Failed to fetch the username');
    return JSON.parse(token as string).username;
}

export function getFullName(){
    const token = localStorage.getItem('token');
    if(!token) throw new Error('Failed to fetch the Full Name');
    return JSON.parse(token as string).fullName;
}

export function signOut(){
    localStorage.removeItem('token');
    window.location.replace('http://localhost:5500/sign-in.html');
}