// ===============navbar==========
function openNav() {
    document.getElementById("navbar").classList.toggle("show");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}

// back to top-------
window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 300) { backtotop.style.display = 'block' }
    else { backtotop.style.display = 'none' }
})

// preloader---------
setTimeout(() => {
    document.getElementById("preloder").classList.add("opacity-0");
    document.getElementById("preloder").classList.add("pointer_event_none");
    document.body.classList.remove("overflow-hidden")
}, 2000);