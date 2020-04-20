import Route from '@ember/routing/route';

export default class AdminEmailListRoute extends Route {
    model() {
        return this.store.findAll('email');
    }
}
