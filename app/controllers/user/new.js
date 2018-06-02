import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import names from './../../data/names';

export default Controller.extend({
  user: service(),

  real_name: '',
  code_name: '',
  user_info_submitted: false,

  invalid_user_data: computed('real_name', 'code_name', function(){
    const has_real_name = (this.get('real_name') !== ''),
          has_code_name = (this.get('code_name') !== '');

    return (!has_code_name || !has_real_name);
  }),

  actions: {
    update_user_info() {
      let invalid = this.get('valid_user_data');

      if (!invalid) {
        this.get('user').set_names(this.get('real_name'), this.get('code_name'));
        this.set('user_info_submitted');
      }
    },

    random_code_name() {
      const first_names = this.get('names_data').first,
            last_names = this.get('names_data').last,
            random_item = array => array[Math.floor(Math.random()*array.length)];

      this.set('code_name', `${random_item(first_names)} ${random_item(last_names)}`);
    }
  },

  names_data: names
});
