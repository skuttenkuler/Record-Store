import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class RecordEditRoute extends Route {
    model(params) {
        return this.store.findRecord('record', params.record_id);
    }

    renderTemplate() {
        this.render('records/form');
    }

    @action
        willTransition(transition) {
            const model = this.controller.model;
            if (model.hasDirtyAttributes){
                const confirmation = confirm("Your change has been saved.");
                confirmation ? model.rollbackAttributes() : transition.abort();
            }
    }
}