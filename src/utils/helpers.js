export function validateEmail(email) {
  const emailRegex = /^[\w\.\+\*\?\^\$\/,!#&'-=~]+@\w+\.\w{2,6}$/;
  return emailRegex.test(String(email).toLowerCase());
}
