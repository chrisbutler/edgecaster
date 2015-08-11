Template.Screen.events({
});

Template.Screen.helpers({
});

Template.Screen.rendered = function() {
  console.log('Screen rendered', this);
}

Template.content.onRendered(function () {
  this.autorun(function () {
    var d = Screens.findOne({_id: Router.current().params._id});
    var q = Questions.findOne({_id: d.question})
    if (d && q) {
      $("#comment-text").css({ 'opacity': 0}).append('<span></span>');
      $("#comment-text span").text(q.comment);

      var f = q.comment.length / 100;
      console.log('text', q.comment.length, f);


      $("#comment-text").fitText(f, {
        minFontSize: '54px',
        maxFontSize: '124px'
      })

      $("#comment-text").empty().css({'opacity': 1}).append('<p></p>');

      $("#comment-text p").typed({
        strings: [q.comment],
        contentType: 'text',
        typeSpeed: -10,
        resetCallback: function() {
          console.log('reset', this);
        },
        callback: function() {
          console.log('typed callback', this);
        }
      });
    }
  });
});
