import Ember from 'ember';
import layout from '../templates/components/fuse-box';

const {
  Component
} = Ember

const FuseBox = Component.extend({
  layout
})
FuseBox.reopenClass({
  positionalParams: 'params'
})

export default FuseBox
