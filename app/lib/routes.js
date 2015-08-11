Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'events',
  controller: 'EventsController',
  action: 'list',
  where: 'client'
});

Router.route('event/:_id', {
  name: 'event',
  controller: 'EventsController',
  action: 'show',
  where: 'client'
});


Router.route('screen/:_id/', {
  name: 'screen',
  controller: 'ScreenController',
  action: 'show',
  where: 'client'
});

Router.route('screens', {
  name: 'screens',
  controller: 'ScreenController',
  action: 'list',
  where: 'client'
});


Router.route('questions', {
  name: 'questions',
  controller: 'QuestionsController',
  action: 'action',
  where: 'client'
});

Router.route('questions/:code', {
  name: 'eventQuestions',
  controller: 'QuestionsController',
  action: 'action',
  where: 'client'
});
