Template.Questions.events({
  'click .list-group-item': function(event, tmpl) {
    // $('.selected').removeClass('selected');
    // $(event.target).addClass('selected');
    
    var q = Questions.findOne({active: true});
    if (q)
      Questions.update({_id: q._id}, {$set: {active: false}});

    var d = Displays.findOne({number: 1});
    Displays.update({_id: d._id}, {$set: {question: this._id}});
    Questions.update({_id: this._id}, {$set: {active: true}});
  }
});

Template._question.events({
  'click .glyphicon-trash': function(event, tmpl) {
    if (confirm('Remove question ' + this._id))
      Questions.remove(this._id);
  }
});

Template.Questions.helpers({
});
