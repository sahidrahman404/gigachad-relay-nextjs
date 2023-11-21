export default function setTokenAndRedirect(token: string) {
  window.localStorage.setItem("auth", token);
  fetch(`http://localhost:3000/api/tokens/set/${token}`).then((_) => {
    window.location.replace(`/dashboard/workout`);
  });
}
