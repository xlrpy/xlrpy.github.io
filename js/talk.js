new TypeIt("#xlrpy", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("XLR & PY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的漫长岁月")
    .pause(3000)
    .go();

new TypeIt('#talktopy', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();