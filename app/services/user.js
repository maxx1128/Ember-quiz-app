import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  info_added: false,
  real_name: "",
  code_name: "",

  no_created_user: computed('real_name', 'code_name', function(){
    const no_real_name = this.get('real_name') === '',
          no_code_name = this.get('code_name') === '';

    return no_code_name && no_real_name;
  }),

  avatar_url: computed('code_name', function(){
    const code_name = this.get('code_name');

    return `https://robohash.org/${code_name}?set=set4`;
  }),

  set_names: function(real_name, code_name){
    this.set('real_name', real_name);
    this.set('code_name', code_name);

    this.set('info_added', true);
  }
});
