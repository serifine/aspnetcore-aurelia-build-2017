import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([{
      route: ['', 'home'],
      settings: { icon: 'home' },
      moduleId: PLATFORM.moduleName('../home/home'),
      nav: true,
      title: 'Home'
    }, {
      route: 'todos',
      settings: { icon: 'th-list' },
      moduleId: PLATFORM.moduleName('../todos/todos'),
      nav: true,
      title: 'Todos'
    }]);

    this.router = router;
  }
}
