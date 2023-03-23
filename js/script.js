const tabs = document.querySelectorAll('tabs')

tabs.forEach(tab => {
    tab.classList.remove('active-tab')
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
        tabs.forEach(tab => {
            tab.classList.remove('active-tab')
        })
        tab.classList.add('active-tab')
    })
})