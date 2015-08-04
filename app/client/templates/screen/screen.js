Template.Screen.events({
});

Template.Screen.helpers({
});

Template.Screen.rendered = function() {
  console.log('Screen rendered', this);
}

Template._full.onRendered(function () {
  console.log('full rendered', this);
  this.autorun(function () {
    var d = Displays.findOne({_id: Router.current().params._id});
    var q = Questions.findOne({_id: d.question})
    if (d && q) {
      $("#comment-text").css({ 'opacity': 0}).append('<span></span>');
      $("#comment-text span").text(q.comment);

      var f = q.comment.length / 100;
      console.log('text', q.comment.length, f);


      $("#comment-text").fitText(f, {
        minFontSize: '54px',
        maxFontSize: '100px'
      })



      // if ($("#comment-text span").data('typed')) {
      //   $("#comment-text span").typed('reset');
      //   // e.removeData('typed')
      //   // $('.typed-cursor').remove();
      // }

      $("#comment-text").empty().css({'opacity': 1}).append('<p></p>');
      $("#comment-text p").typed({
        strings: [q.comment],
        contentType: 'text',
        resetCallback: function() {
          console.log('reset', this);
        },
        // callback: function() {
        //   console.log('typed callback', this);
        // }
      });
    }
  })
});
