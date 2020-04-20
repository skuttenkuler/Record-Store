import Controller from '@ember/controller';
import {action} from '@ember/object';
import {match, not } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends Controller {
    @tracked email = '';
    @tracked responseMessage = '';

    @match('email', /^.+@.+\..+$/) isValid;
    @not('isValid') isDisabled;

    //save email
    @action
    saveEmail() {
        //save to store 
          const newEmail = this.store.createRecord('email', { email: this.email });
      
          newEmail.save().then((res) => {
            this.responseMessage = `Successfully saved: ${res.email}`;
            this.emailAddress = '';
            
        });
    
    }
};

