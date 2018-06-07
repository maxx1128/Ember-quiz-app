import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('new');
    this.route('answering', { path: '/answering/:codename' });
  });
  this.route('quiz_screen');
  this.route('results');
  this.route('explaination');
  this.route('login');
});

export default Router;
