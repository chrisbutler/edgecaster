EventsController = RouteController.extend({
  onRun: function() {
    if (this.route.options.action == 'list') {
      Meteor.call('/cil/event/list');
    } else if (this.params.code) {
      Meteor.call('/cil/comment/list', this.params.code);
    }
    this.next();
  },
  subscriptions: function () {
    if (this.route.options.action == 'list') {
      return this.subscribe('events');
    } else {
      return [this.subscribe('event', this.params.code), this.subscribe('questions', this.params.code)];
    }
  },

  data: function () {
    if (this.route.options.action == 'list') {
      return Events.find({}, {sort: {scheduled_starttime: -1}});
    } else {
      return Events.findOne({code: this.params.code});
    }
  },

  list: function () {
    this.render('Events', { /* data: {} */});
  },

  show: function () {
    // this.render('Event', { /* data: {} */});
    this.render('Questions', {
      data: {
        question: Questions.find({code: this.params.code})
      }
    });
  }

});
