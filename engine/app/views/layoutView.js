import Mn from 'backbone.marionette';
import FormView from './formView';
import ToDoView from './toDoView';
////////////////////////////////////////////////////////////////////////


var MainLayout = Mn.View.extend({
    el: '#main',
    template: _.template(`<div id="form-region">\
        </div>\
        <div id="todo-region">\
        </div>\
        <button id="btn-add">Remove</button>`),
    regions:
        {
            formRegion: {
                el: '#form-region'
            },
            tableRegion: {
                el: '#todo-region'
            },
        },
    formView: null,
    toDoView: null,
    initialize: function() {
        this.formView = new FormView();
        this.toDoView = new ToDoView();
    },
    onRender: function() {
        this.showChildView('formRegion', this.formView);
        this.showChildView('tableRegion', this.toDoView);
    },
    onChildviewAddNewElement: function(params) {
        this.toDoView.collection.add(params);
    }
});

export default MainLayout;