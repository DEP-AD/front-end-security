import { signOut, getFullName, getUserName } from "./app.js";

$('#btn-logout').on('click', () => signOut());

$('#username').text(getUserName());
$('#full-name').text(getFullName());
