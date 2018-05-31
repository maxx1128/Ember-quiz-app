import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  info_added: false,
  real_name: "Default Real Name",
  code_name: "Default Code Name",

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
