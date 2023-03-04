const $ = element => document.querySelector(element)
const $all = element => document.querySelectorAll(element)

const submitButtons = $all(".submit")
const form = $("form")
const selectSquad = $all(".selectedSquad")

submitButtons.forEach((submitButton) => {
    submitButton.addEventListener('click', () => form.submit())
})

const abc = ["a", "b", "c", "founders"]
for (let i = 0; i < abc.length; i++) {
    if (window.location.href.indexOf(abc[i] + "-2022") !== -1 ||
        window.location.href.indexOf(abc[i] + "-2021") !== -1) {
        submitButtons[i].checked = true
        selectSquad[i].classList.add("selectedNow")
    }
}

for (let i = 0; i < selectSquad.length; i++) {
    selectSquad[i].addEventListener("click", () => {
        submitButtons[i].click()
    })
}

const members = $all(".containerMember")
const glowStickAvatar = $all("#glowStickAvatar")
const avatarOverlay = $all(".avatarOverlay")
let mouseoverCount = Array(members.length).fill(0)
for (let i = 0; i < members.length; i++) {
    members[i].addEventListener("mouseenter", () => {
        if (mouseoverCount[i] === 0) {
            mouseoverCount[i] = 1
            glowStickAvatar[i].style.width = "100%"
            glowStickAvatar[i].style.opacity = "1"
            setTimeout(() => {
                glowStickAvatar[i].style.bottom = "100%"
                avatarOverlay[i].style.height = "0%"
            }, 200)
        } else if (mouseoverCount[i] === 1) {
            mouseoverCount[i] = 0
            glowStickAvatar[i].style.bottom = "-2%"
            avatarOverlay[i].style.height = "100%"
            setTimeout(() => {
                glowStickAvatar[i].style.width = "0%"
                setTimeout(() => {
                    glowStickAvatar[i].style.opacity = "0"
                }, 100);
            }, 300)
        }
    })
}



const gitHub = $all('.gitHub')
for (let i = 0; i < gitHub.length; i++) {
    gitHub[i].addEventListener('click', () => {
        event.preventDefault()
        window.location.href = gitHub[i].getAttribute('href')
        console.log(gitHub[i].getAttribute('href'))
    })
}

const website = $all('.website')
for (let i = 0; i < website.length; i++) {
    website[i].addEventListener('click', () => {
        event.preventDefault()
        window.location.href = website[i].getAttribute('href')
        console.log(website[i].getAttribute('href'))
    })
}