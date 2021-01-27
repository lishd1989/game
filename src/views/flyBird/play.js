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
  }

}