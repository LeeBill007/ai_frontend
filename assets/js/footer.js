document.addEventListener('DOMContentLoaded', ()=> {
    const footer = document.querySelector('footer');
    const toggleBtn = document.querySelector('footer .toggle-btn');
    //footer onclick then add class show
    toggleBtn.onclick = () => {
        footer.classList.toggle('show');
    }

    //footer a tag on click prevent trigger footer onclick
    footer.querySelectorAll('a').forEach((a) => {
        a.onclick = (e) => {
            e.stopPropagation();
        }
    })
})