import Bb from 'backbone';
import Mn from 'backbone.marionette';
import form_template from '../templates/form.html';

var FormView = Mn.View.extend({
    template: form_template,
    ui: {
        name: '#id_name',
        note: '#id_note',
        addBtn: '#btn-add'
    },
    events: {
        'click @ui.addBtn' : 'add'
    },
    initialize: function() {
        var Radio = require('backbone.radio');
        this.radio = Radio.channel('todo');
    },
    add: function() {
        let name = this.getUI('name')[0].value;
        let note = this.getUI('note')[0].value;
        name += '-radek';
        this.triggerMethod('add:new:element',{name:name, note:note});
        // this.radio.trigger('add:new:element', {name:name, note:note});
    }

});

export default FormView;
