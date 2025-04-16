const button = document.getElementById('runawayBtn');
const wrapper = document.getElementById('troll-button');

button.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - wrapper.offsetWidth - 40;
    const maxY = window.innerHeight - wrapper.offsetHeight - 40;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    wrapper.style.transition = 'all 0.5s ease';
    wrapper.style.left = `${randomX}px`;
    wrapper.style.top = `${randomY}px`;
    button.disabled = true;
    setTimeout(() => button.disabled = false, 500);
    wrapper.style.right = 'auto';
    wrapper.style.bottom = 'auto';
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});
gsap.from("#services", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
gsap.utils.toArray(".service-card").forEach((card) => {
    gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});