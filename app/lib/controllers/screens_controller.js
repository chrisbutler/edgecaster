ScreensController = RouteController.extend({
  layoutTemplate: 'FullLayout',

  subscriptions: function () {
    return this.subscribe('screens');
  },

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

  onRun: function() {
    console.log('Screen run');

    this.next();
  },
  // onRerun: function() {
  //   console.log('Screen rerun');
  //   this.next();
  // },
  //
  // onAfterAction: function() {
  //   console.log('Screen after');
  // },

  list: function () {
    this.render('Screens', { data: {screen: this.data()}});
  },

  show: function () {
    var s = this.data() && this.data().screen;
    this.subscribe('question', s.question);
    if (s && s.type) {
      this.render('_' + s.type, { /* data: {} */});
    } else {
      this.render('Screen', { /* data: {} */});
    }
  }

});
