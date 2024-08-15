const cookieCountLabel = document.getElementById("Cookie-Count")
const cookiePerSec = document.getElementById("Cookies-Per-Second")
const cookieButton = document.getElementById("Cookie-Button")

let increaseAmount = 1
let cookies = 0

function increaseCookie(increaseAmount) {
   cookies = cookies + increaseAmount
   console.log(cookies);
   cookieCountLabel.textContent = cookies
}

cookieButton.addEventListener("click", () => {
    increaseCookie(increaseAmount)
})
