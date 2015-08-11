Meteor.startup(function () {
  if (Screens.find().count() === 0) {
    Screens.insert({
      "name": "main",
      "number": 1,
      "question": "",
      "type": "blank"
    });
  }
});
