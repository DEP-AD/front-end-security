import { signOut, getUserName } from "./app.js";

$('#btn-logout').on('click', () => signOut());

$('#username').text(getUserName());
