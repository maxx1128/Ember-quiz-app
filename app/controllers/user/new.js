import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import names from './../../data/names';

export default Controller.extend({
  user: service(),
  store: service(),

  real_name: '',
  code_name: '',
  new_id: '',
  user_info_submitted: false,

  invalid_user_data: computed('real_name', 'code_name', function(){
    const has_real_name = (this.get('real_name') !== ''),
          has_code_name = (this.get('code_name') !== '');

    return (!has_code_name || !has_real_name);
  }),

  actions: {
    update_user_info() {
      let invalid = this.get('invalid_user_data');

      if (!invalid) {
        const store = this.get('store'),
              new_id = makeid(),
              realname = this.get('real_name'),
              codename = this.get('code_name');

        this.set('code_name', codename);
        this.get('user').set_names(new_id, realname, codename);
        this.set('user_info_submitted', true);
        this.set('new_id', new_id);

        store.createRecord('user', {
          uniq_id: new_id,
          realname: realname,
          codename: codename
        }).save();
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

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
