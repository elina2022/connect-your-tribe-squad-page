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

// const gitHubHandle = $('.copyHandle');
// gitHubHandle.addEventListener("click", ()=>{
//         navigator.clipboard.writeText(gitHubHandle.dataset.handle)
//         console.log("Copied the text: " + gitHubHandle.dataset.handle)
// })

// const copyTest = $('.hello');
// copyTest.addEventListener("click", ()=>{
//         navigator.clipboard.writeText(copyTest.dataset.test)
//         console.log("Copied the text: " + copyTest.dataset.test)
// })

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
                glowStickAvatar[i].style.opacity = "0"
            }, 300)
        }
    })
}





// const glowStick = document.querySelector("#glowStick")
// for (let i = 0; i < abc.length; i++) {
//     selectSquad.forEach(select => {
//         select.addEventListener("click", () => {
//             if(! glowStick.classList.contains("animateGlowStick")) {
//                 glowStick.classList.add("animateGlowStick")
//                 glowStick.classList.add("animateGlowStickEndpoint")
//                 console.log("Class added")
//             } else if(window.location.href.indexOf(abc[i] + "-2022") !== -1 ||
//                 window.location.href.indexOf(abc[i] + "-2021") !== -1) {
//                 glowStick.classList.add("animateGlowStickEndpoint")
//                 console.log("Class added")
//             } else{
//                 console.log("Class is already added")
//             }
//         })
//     })
// }



// let functionExecuted = false;

// selectSquad.forEach(select => {
//     select.addEventListener("click", () => {
//         if (!functionExecuted) {
//             functionExecuted = true
//             console.log("hello")
//         }
//     })
// })
