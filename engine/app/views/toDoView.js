import Mn from 'backbone.marionette'
import Bb from 'backbone'
import Radio from 'backbone.radio'
import RowView from './rowView'

var ToDoView = Mn.CollectionView.extend({
    // template: _.template('<div>todo</div>')
    collection: new Bb.Collection(),
    lastID: 0,
    childView: function(item) {
        item.set('id', this.lastID++);
        return RowView;
    },
    initialize: function() {
        var Radio = Radio;
        this.radio = Radio.channel('todo');
        this.listenTo(this.radio, 'add:new:element', this.addElement.bind(this))
    },
    addElement: function(params) {
        this.collection.add(params);
        console.log('odebralem',params);
    },
});

export default ToDoView;