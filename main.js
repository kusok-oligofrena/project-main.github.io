window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const progress = scroll / maxScroll;
    const position = 30 + progress * 60;

    document.body.style.backgroundPosition =
    `center ${position}%`;
});