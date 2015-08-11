ScreensController = RouteController.extend({
  layoutTemplate: 'FullLayout',
  // subscriptions: function () {
  // },
  data: function () {
    if (this.route.options.action == 'list') {
      return Screens.find();
    } else {
      var d = Screens.findOne({_id: this.params._id});
      return d && {
        screen: d,
        question: Questions.findOne({_id: d.question})
      }
    }
  },
  list: function () {
    this.render('Screens', { data: {screen: this.data()}});
  },
  show: function () {
    var s = this.data() && this.data().screen;
    if (s) {
      this.subscribe('question', s.question);
      if (s.type) {
        this.render('_' + s.type, { /* data: {} */});
      } else {
        this.render('Screen', { /* data: {} */});
      }
    }
  }
});
