$( "#scores" ).click(function ScoreView(scores) {
    EventEmitter.call(this);
    this.scores = scores;
    this.init();
}

ScoreView.prototype = Object.create(EventEmitter.prototype);
ScoreView.prototype.conscructor = ScoreView;

    $(this).slideUp();
