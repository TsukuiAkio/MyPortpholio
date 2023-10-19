class MobileMenu {
    constructor() {
        this.DOM = {};
        // モバイルメニュー用
        this.DOM.el = document.querySelector('.mobile-menu');
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        this.DOM.link1 = document.querySelector('.link_1');
        this.DOM.link2 = document.querySelector('.link_2');
        this.DOM.link3 = document.querySelector('.link_3');
        this.eventType = this._getEventType()
        this._addEvent();
    }
    
    _getEventType() {
        const isTouchCapable = "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
            navigator.maxTouchPoints > 0 ||
            window.navigator.msMaxTouchPoints > 0;
            return isTouchCapable ? "touchstart" : "click";
    }

    _toggle() {
        /* menu-openを付けたり消したりする */
        this.DOM.container.classList.toggle('menu-open');
    }
    // イベントを追加する
    _addEvent() {
        // 背面メニュー表示の切り替え
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        this.DOM.cover.addEventListener('click', this._toggle.bind(this));
        // 背面メニュー表示中の背面スクロールをさせない用
        this.DOM.btn.addEventListener('click', ()=> {
            this.DOM.container.classList.add('fixed');
        });
        this.DOM.cover.addEventListener('click', ()=> {
            this.DOM.container.classList.remove('fixed');
        });
        this.DOM.link1.addEventListener('click', this._toggle.bind(this));
        this.DOM.link2.addEventListener('click', this._toggle.bind(this));
        this.DOM.link3.addEventListener('click', this._toggle.bind(this));
    }
}

