import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('record');
  },

  actions: {

    saveRecord(newRecord) {
      newRecord.save().then(() => this.transitionTo('records'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});