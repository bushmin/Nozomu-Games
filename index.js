const mouseCircle = document.getElementById('mouse-circle');
document.addEventListener('mousemove', function(e) {
    mouseCircle.style.left = e.x + 'px';
    mouseCircle.style.top = e.y + 'px';
});

document.querySelectorAll("a").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        mouseCircle.style.width = "80px";
        mouseCircle.style.height = "80px";
        mouseCircle.style.transform = "translate(-40px, -40px)";
    })
    item.addEventListener("mouseout", (e) => {
        mouseCircle.style.width = "40px";
        mouseCircle.style.height = "40px";
        mouseCircle.style.transform = "translate(-20px, -20px)";
    })
})