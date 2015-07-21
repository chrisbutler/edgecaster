var url = 'https://api.coveritlive.com/remote/2/'
var p = {token: Meteor.settings.coveritlive.token};

Meteor.methods({
  '/cil/event/list': function () {
    var params = _.extend({status: 'live|finished'}, p);
    HTTP.get(url + 'event/list', {params: params}, function(error, result) {
      if (!error && result && result.data) {
        var d = result.data.data;
        console.log(d);
        _.each(d, function(item) {
          var e = Events.findOne({code: item.code});
          if (!e) {
            console.log('insert', item);
            Events.insert(item);
          }
        })
      }
    });
  },
  '/cil/comment/list': function (eventCode) {
    var params = _.extend({event_code: eventCode}, p);
    HTTP.get(url + 'comment/list', {params: params}, function(error, result) {
      console.log(error, result);
      if (!error && result && result.data) {
        var d = result.data.data.event_comments;
        console.log(d);
        _.each(d, function(item) {
          console.log('comment', item);
          var e = Questions.findOne({commentID: item.commentID});
          if (!e) {
            item = _.extend(item, {code: eventCode})
            console.log('insert', item);
            Questions.insert(item);
          }
        })
      }
    });
  }
});
