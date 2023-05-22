//returns a collection
const tabs = document.getElementById("tabs").getElementsByTagName("a")

for(var i = 0; i< tabs.length; i++) {
    // console.log(tabs[i])
    tabs[i].addEventListener('click', function(event) {
        for(var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active-tab')
        }
        this.classList.add('active-tab')
        // console.log(this)
    })
}

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        // console.log(sectionId);
        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('a[href*="' + sectionId + '"]').classList.add('active-tab');
        } else {
            document.querySelector('a[href*="' + sectionId + '"]').classList.remove('active-tab');
        }
    })
})

