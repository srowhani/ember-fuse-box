import Ember from 'ember';
import layout from '../templates/components/test-container';
const {
  Component,
  computed,
  run: {
    scheduleOnce
  },
  get
} = Ember
// BEGIN-SNIPPET test-container
export default Component.extend({
  tagName: 'ul',
  classNames: 'collapsible popout',
  layout,

  didInsertElement () {
    this._super(...arguments)
    if (get(this, 'content')) {
      scheduleOnce('sync', this, function () {
        this.$().collapsible()
      })
    }
  }
})
// END-SNIPPET
