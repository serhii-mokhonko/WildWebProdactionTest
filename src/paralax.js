export default function () {

    document.addEventListener("scroll", animateLeafs);

    function animateLeafs() {
        const el = document.getElementsByClassName('paralax-element');
        el.forEach(element => {
            if (isVisibleElement(element)) {
                const speed = element.getAttribute('data-speed');
                const posY = element.getBoundingClientRect().top / Number(speed);
                element.style.transform = `translateY(${posY}px)`;
            }
        });
    }

    function isVisibleElement(el) {
        const elBound = el.getBoundingClientRect();
        return ((elBound.y >= 0) && (elBound.bottom <= window.innerHeight));
    }
}