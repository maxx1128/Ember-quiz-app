import { helper } from '@ember/component/helper';

export function ifString([condition, true_string, false_string]/*, hash*/) {
  return (condition ? true_string : false_string);
}

export default helper(ifString);
