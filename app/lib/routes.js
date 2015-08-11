Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'events',
  controller: 'EventsController',
  action: 'list'
});

Router.route('event/:code', {
  name: 'event',
  controller: 'EventsController',
  action: 'show'
});


Router.route('screens', {
  name: 'screens',
  controller: 'ScreensController',
  action: 'list'
});

Router.route('screen/:_id/', {
  name: 'screen',
  controller: 'ScreensController',
  action: 'show'
});
