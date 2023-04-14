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

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('a[href*="' + sectionId + '"]').classList.add('active-tab');
        } else {
            document.querySelector('a[href*="' + sectionId + '"]').classList.remove('active-tab');
        }
    })
})

