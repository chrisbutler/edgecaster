EventsController = RouteController.extend({
  onRun: function() {
    Meteor.call('/cil/event/list');
    this.next();
  },
  subscriptions: function () {
    // set up the subscriptions for the route and optionally
    // wait on them like this:
    //
    // this.subscribe('item', this.params._id).wait();
    //
    // "Waiting" on a subscription does not block. Instead,
    // the subscription handle is added to a reactive list
    // and when all items in this list are ready, this.ready()
    // returns true in any of your route functions.
  },

  data: function () {
    if (this.route.options.action == 'list') {
      return Events.find({}, {sort: {scheduled_starttime: -1}});
    } else {
      return Events.findOne({_id: this.params._id});
    }
  },

  list: function () {
    this.render('Events', { /* data: {} */});
  },

  show: function () {
    this.render('Event', { /* data: {} */});
  }

});
