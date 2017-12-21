import Bb from 'backbone';
import Mn from 'backbone.marionette';
import MainLayout from './views/layoutView'

////////////////////////////////////////////////////////////////////////
// Backbone Collections
////////////////////////////////////////////////////////////////////////


let App = Mn.Application.extend({
    region: '#main',
    onStart: function (options) {
        console.log('Application started.');
    }
});


var myView = new MainLayout();
let app = new App();
app.start();
myView.render();