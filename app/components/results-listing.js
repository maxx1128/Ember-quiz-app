import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  organized_results: computed('user_data', function(){
    let data = this.get('user_data').toArray();

    let compiled_data = data.reduce(function(points_tally, answer) {
      let real_name = answer.get('user_realname'),
          already_added_index = false;

      points_tally.forEach(function(item, index){
        let check_username = item.real_name;

        if (real_name === check_username) { already_added_index = index; }
      });

      if (already_added_index !== false) {
        points_tally[already_added_index].points += answer.get('points');
      } else {
        points_tally.push({
          real_name: answer.get('user_realname'),
          code_name: answer.get('user_codename'),
          points: answer.get('points')
        });
      }
      return points_tally;
    }, []);

    // Organize sorted data from highest to lowest scores here!

    return compiled_data;
  })
});
