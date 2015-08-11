Meteor.publish(null, function (code) {
  return Screens.find();
});

Meteor.publish('events', function () {
  return Events.find();
});

Meteor.publish('event', function (code) {
  return Events.find({code: code});
});


Meteor.publish('questions', function (code) {
  return Questions.find({code: code});
});

Meteor.publish('question', function (id) {
  return Questions.find({_id: id});
});
