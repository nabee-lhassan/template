const go_top = document.getElementById('go-top');


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        // go_top.style.display = 'block';
        go_top.classList.add('d-block');
    } else {
        // go_top.style.display = 'none';
        go_top.classList.remove('d-block');
    }
});

function goto_top(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



