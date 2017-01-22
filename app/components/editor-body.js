import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    this.$().attr('tabindex',0);
    this.$().focus();
  },
  keyUp: function(key) {
    console.log(key);
  },
});
