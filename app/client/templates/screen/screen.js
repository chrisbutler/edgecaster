Template.Screen.events({
});

Template.Screen.helpers({
});

Template.Screen.rendered = function() {
  console.log('Screen rendered', this);
}

Template._full.rendered = function() {
  console.log('_full rendered');
  if (this.question) {
    var s = [];
    var e = $("#comment-text");
    s.push(this.question.comment);

    var f = (s[0].length / 100) + .25;
    e.fitText(f, {
      minFontSize: '32px',
      maxFontSize: '72px'
    })

    if (e.data('typed')) {
      //e.typed('reset');
      e.removeData('typed')
      $('.typed-cursor').remove();
    }

    e.typed({
      strings: s,
      resetCallback: function() {
        console.log('reset', this);
      },
      // callback: function() {
      //   console.log('typed callback', this);
      // }
    });
  }
}
