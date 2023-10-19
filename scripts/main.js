document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
            el.classList.add('inview');
        }
    }
    const cb2 = function (el, isIntersecting) {
        if(isIntersecting) {

            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
    // ページの上に戻るボタン
    const btnup = document.getElementById("scroll-up");
    btnup.addEventListener('click', () => {
    window.scrollTo({
        top: -50,
        behavior: 'smooth'
    });    
});

    const so1 = new ScrollObserver('.tween-animate-title', cb);
    const so2 = new ScrollObserver('.skill-contents__item', cb2, {threshold: 0.5});
    const so3 = new ScrollObserver('.bg-slide__item', cb2, {threshold: 0.5});
    const so4 = new ScrollObserver('.bg-slide2__item', cb2, {threshold: 0.5});
    const so5 = new ScrollObserver('.bg-logo', cb2, {threshold: 0.5});
    const so6 = new ScrollObserver('.textConsept', cb2, {threshold: 0.5});
    const soM = new MobileMenu();

    // モーダル
    MicroModal.init({
        disableScroll: true
    });
    //　書くアニメーション 
    new Vivus('move', {
        type: 'scenario-sync',
        duration: 10,
        forceRender: false,
        animTimingFunction: Vivus.EASE
    })
});
// タイトルのシルエット
const chr = document.querySelector('.chara-container');
setTimeout(() => {
    chr.classList.toggle('inview');
}, 1000);
