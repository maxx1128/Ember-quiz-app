import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),

  real_name: '',
  code_name: '',

  actions: {
    update_user_info() {
      this.get('user').set_names(this.get('real_name'), this.get('code_name'));
    }
  }
});
