class TextAnimation {
    constructor(el) {
        this.DOM = {};
        /*　三項演算子の元　メモ用
        if(el instanceof HTMLElement) {
        this.DOM.el = el;
        } else {
            this.DOM.el = document.querySelector(el);
        }
        main.jsの方の const so1 = new ScrollObserver('.tween-animate-title', cb);
        のとうりScrollObserverで取得したDOMによってTextAnimationを実行する必要があるためそれを
        条件分岐にして処理している。DOMのみ使用しているのでセレクターが渡ってきた処理は必要ないが一応記述 */
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    
    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
    }
}
