import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  revealed_names: false,

  organized_results: computed('model.answers', function(){
    let data = this.get('model.answers').toArray();

    let compiled_data = data.reduce(function(points_tally, answer) {
      let real_name = answer.get('user_realname'),
          already_added_index = false;

      points_tally.forEach(function(item, index){
        let check_username = item.user_realname;

        if (real_name === check_username) { already_added_index = index; }
      });

      if (already_added_index === false) {
        points_tally.push({
          user_realname: answer.get('user_realname'),
          user_codename: answer.get('user_codename'),
          points: answer.get('points'),
          avatar_url: answer.get('avatar_url')
        });
      } else {
        points_tally[already_added_index].points += answer.get('points');
      }
      return points_tally;
    }, []);

    // Organize sorted data from highest to lowest scores here!
    const sorted_data = compiled_data.sort(function(a, b){
      if (a.points < b.points) { return 1; }
      if (a.points > b.points) { return -1; }

      return 0;
    });

    return sorted_data;
  }),

  actions: {
    reveal_names() {
      this.set('revealed_names', true);
    }
  }
});
