// const tabs = document.getElementsByClassName('tabs')

// //cant do this-> need to find another way
// tabs.forEach(tab => {
//     console.log("Tab: " )
//     tab.classList.remove('active-tab')
//     tab.addEventListener('click', () => {
//         tabs.forEach(tab => {
//             tab.classList.remove('active-tab')
//         })
//         tab.classList.add('active-tab')
//     })
// })

//returns a collection
const tabs = document.getElementById("tabs").getElementsByTagName("a")

for(var i = 0; i< tabs.length; i++) {
    console.log(tabs[i])
    tabs[i].addEventListener('click', function(event) {
        for(var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active-tab')
        }
        this.classList.add('active-tab')
    })
}

window.onscroll = () => {
    console.log("scrolling")
}

