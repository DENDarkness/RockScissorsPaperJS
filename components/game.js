const game = {
    items: ['rock', 'scissors', 'paper'],
    skynet: '',
    humen: '',
    container: null,
    containerResult: null,

    init() {
        this.containerKeyboard = document.querySelector('#keyboard');
        this.containerResult = document.querySelector('#result')
        this._handleEvents();
        this._math

    },

    _handleEvents() {
        this.containerKeyboard.addEventListener('click', event => {
            if (event.target.dataset.name == 'button-rock') {
                this.humen = +event.target.dataset.value;
                this._game();
            };
            if (event.target.dataset.name == 'button-scissors') {
                this.humen = +event.target.dataset.value;
                this._game();
            };
            if (event.target.dataset.name == 'button-paper') {
                this.humen = +event.target.dataset.value;
                this._game();
            };
        })
    },

    _game() {
        this.skynet = this._math();
        if ((this.humen === 0 && this.skynet === 1) || (this.humen === 1 && this.skynet === 2) || (this.humen === 2 && this.skynet === 0)) {
            let str = `
            <div>
                <img src="img/${this.items[this.humen]}.png" alt="" class="img-thumbnail" />
                <img src="img/${this.items[this.skynet]}.png" alt="" class="img-thumbnail" />
            </div>
            <div>Ты победили!</div>`;
            this.containerResult.innerHTML = str;
        } else if (this.humen === this.skynet) {
            let str = `
            <div>
                <img src="img/${this.items[this.humen]}.png" alt="" class="img-thumbnail" />
                <img src="img/${this.items[this.skynet]}.png" alt="" class="img-thumbnail" />
            </div>
            <div>Ничья!</>`;
            this.containerResult.innerHTML = str;
        } else {
            let str = `            
            <div>
                <img src="img/${this.items[this.humen]}.png" alt="" class="img-thumbnail" />
                <img src="img/${this.items[this.skynet]}.png" alt="" class="img-thumbnail" />
            </div>
            <div>Ты проиграл!</>`;
            this.containerResult.innerHTML = str;
        }
    },

    _math() {
        return Math.floor(Math.random() * 3);
    }



}
game.init();