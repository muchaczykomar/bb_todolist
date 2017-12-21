import Mn from 'backbone.marionette';

var RowView = Mn.View.extend({
    template: _.template('<input type="checkbox" id="myCbx-<%=id%>"\> <span><%= id%></span><span><%= name%></span> <span><%= note%></span>'),
    events: {
        'click': 'clickRow'
    },
    clickRow: function () {
        console.log('kliknięto', this.model.get('name'));
    }
});

export default RowView;