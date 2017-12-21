import Bb from 'backbone'
import CD from '../models/cd.model'

const CDsCollection = Bb.Collection.extend({
    model: CD,
    initialize: function (models, options) {
        this.parent = options.parent;
    },

    constructor: function (attributes, options) {
        Bb.Collection.apply(this, arguments);
    },

    validate: function (attr) {}
});

var Groups = Bb.Collection.extend({
    model: CDsCollection,

    // Assuming you make requests to `/group` to produce your result JSON
    url: 'group',

    // Construct models from the `results` attribute of the response
    parse: function(response) {
        return response.cds;
    }
});


export default CDsCollection
export default Groups