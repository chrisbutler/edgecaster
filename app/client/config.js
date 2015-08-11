Session.setDefault('typing', false);

Template.registerHelper('livestamp', function(date, opts) {
  var time = new Date();

  if (opts.hash && opts.hash.unix) {
     time = moment.unix(date);
  } else {
    time = moment(date);
  }

  var timestamp = time.toISOString(),
      timestring = time.fromNow();

  return new Spacebars.SafeString('<span class="livestamp" data-livestamp="'+ timestamp  +'">'+timestring+'</span>');
});
