import Asset from './Asset'
export default class play {
  constructor(page) {
    this.width = 0
    this.height = 0

    this.asset = new Asset()
    this.stage = null
    this.ticker = null
    this.state = null
    this.score = 0

    this.bg = null
    this.ground = null
    this.bird = null
    this.holdbacks = null
    this.gameReadyScene = null
    this.gameOverScene = null
  }

  init() {
    this.asset.on('complete', function () {
      this.asset.off('complete')
      this.initPage()
    }.bind(this))
    this.asset.load()
  }
  initPage() {
    this.width = 1000
    this.height = 700;
    this.scale = 0.5;

    this.page = new Hilo.Stage({
      renderType: 'canvas',
      container: this.page,
      width: this.width,
      height: this.height,
      scaleX: this.scale,
      scaleY: this.scale,
    })

    this.ticker = new Hilo.Ticker(60);
    this.ticker.addTick(Hilo.Tween);
    this.ticker.addTick(this.stage);
    this.ticker.start(true);

    this.stage.enableDOMEvent(Hilo.event.POINTER_START, true);
    this.stage.on(Hilo.event.POINTER_START, this.onUserInput.bind(this));

    if (document.addEventListener) {
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) this.onUserInput(e);
      }.bind(this));
    } else {
      document.attachEvent('onkeydown', function (e) {
        if (e.keyCode === 32) this.onUserInput(e);
      }.bind(this));
    }

    this.stage.onUpdate = this.onUpdate.bind(this);

    this.initBackground();
    this.initScenes();
    this.initHoldbacks();
    this.initBird();
    this.initCurrentScore();

    //准备游戏
    this.gameReady();
  }

  initBackground() {
    //背景
    var bgWidth = this.width * this.scale;
    var bgHeight = this.height * this.scale;

    var bgImg = this.asset.bg;
    this.bg = new Hilo.Bitmap({
      id: 'bg',
      image: bgImg,
      scaleX: this.width / bgImg.width,
      scaleY: this.height / bgImg.height
    }).addTo(this.stage);

    //地面
    var groundImg = this.asset.ground;
    var groundOffset = 60;
    this.ground = new Hilo.Bitmap({
      id: 'ground',
      image: groundImg,
      scaleX: (this.width + groundOffset * 2) / groundImg.width
    }).addTo(this.stage);

    //设置地面的y轴坐标
    this.ground.y = this.height - this.ground.height;

    //移动地面
    Hilo.Tween.to(this.ground, {
      x: -groundOffset * this.ground.scaleX
    }, {
      duration: 400,
      loop: true
    })
  }

  initCurrentScore() {
    //当前分数
    this.currentScore = new Hilo.BitmapText({
      id: 'score',
      glyphs: this.asset.numberGlyphs,
      textAlign: 'center'
    }).addTo(this.stage);

    //设置当前分数的位置
    this.currentScore.x = this.width - this.currentScore.width >> 1;
    this.currentScore.y = 180;
  }



}