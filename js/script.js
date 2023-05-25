//returns a collection
const tabs = document.getElementById("tabs").getElementsByTagName("a")

for(var i = 0; i< tabs.length; i++) {
    tabs[i].addEventListener('click', function(event) {
        for(var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active-tab')
        }
        this.classList.add('active-tab')
    })
}

const sections = document.querySelectorAll('section[id]')
//something going wrong-> tab loses active class after scrolling past page. we are still adding and removing active class 
//in meet the pack section 
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        // console.log(sectionId);
        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('a[href*="' + sectionId + '"]').classList.add('active-tab');
            // console.log("adding active class"); //still adding active class in meet the pack section
            //js knows we're in the right section
            // console.log("section height: " + sectionHeight);
            // console.log("Section top: " + sectionTop);
            // console.log("window.pageOffset: " + scrollY);
        } else {
            document.querySelector('a[href*="' + sectionId + '"]').classList.remove('active-tab'); //were removing the active class every time
            // console.log("removing active class");
        }
        if(current.classList.contains('active')) {
            console.log(current.classList);
        }
    })
})

