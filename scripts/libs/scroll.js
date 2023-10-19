class ScrollObserver {
    constructor(els, cb, options) {
        // 監視対象の取得
        this.els = document.querySelectorAll(els);
        // オプションの設定
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
            // 取得した要素をそれぞれ監視する
            entries.forEach(entry => {
                // 監視要素に入ったとき
                if (entry.isIntersecting) {
                    // entry.targetに渡ってきたDOM要素が入っている
                    this.cb(entry.target, true);
                    if(this.once) {
                        // 監視の解除
                        observer.unobserve(entry.target);
                    }
                    // 監視要素から出たとき
                } else {
                    this.cb(entry.target, false);
                }
            });
        };

        this.io = new IntersectionObserver(callback.bind(this), this.options);

        // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
        this.io.POLL_INTERVAL = 100;
        
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}