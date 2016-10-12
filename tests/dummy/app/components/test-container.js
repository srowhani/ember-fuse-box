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
export default Ember.Component.extend({
  tagName: 'ul',
  classNames: 'collapsible',
  attributeBindings: ['data-collapsible', 'style'],
  'data-collapsible': 'accordian',
  style: computed(function () {
    return get(this, 'name') !== 'root' ? 'padding-left: 1rem' : ''
  }),
  layout,
  name: null,
  content: null,
  didInsertElement () {
    this._super(...arguments)
    if (get(this, 'content')) {
      scheduleOnce('sync', this, function () {
        this.$().collapsible()
      })
    }
  }
});
