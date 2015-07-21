ScreenController = RouteController.extend({
  layoutTemplate: 'FullLayout',

  subscriptions: function () {

  },

  data: function () {
    if (this.route.options.action == 'list') {
      return Displays.find();
    } else {
      var d = Displays.findOne({_id: this.params._id});
      return d && {
        display: d,
        question: Questions.findOne({_id: d.question})
      }
    }
  },

  onRun: function() {
    console.log('Screen run');
    this.next();
  },
  onRerun: function() {
    console.log('Screen rerun');
    this.next();
  },

  onAfterAction: function() {
    console.log('Screen after');
  },

  list: function () {
    this.render('Screens', { data: {screen: this.data()}});
  },

  show: function () {
    var t = this.data() && this.data().display && this.data().display.type;
    if (t) {
      this.render('_' + t, { /* data: {} */});
    } else {
      this.render('Screen', { /* data: {} */});
    }
  }

});
