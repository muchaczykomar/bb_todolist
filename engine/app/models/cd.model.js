import Bb from 'backbone';
import CDsCollection from '../collections/cd.collection';
////////////////////////////////////////////////////////////////////////


const CD = Bb.Model.extend({
    defaults: {
        id: "",
        Name: "No Name",
        Artist: "Nameless"
    },

    initialize: function() {
            // console.log("CD initialized.")
    },

    validate: function (attr) {

    },

    constructor: function (attributes, options) {
        // console.log("CD constructor has been called.");
        Bb.Model.apply(this, arguments);
    }
});


const Group = Bb.Model.extend({
    initialize: function () {
        this.cDsCollection = new CDsCollection([], {parent: this});
    }
});

export default CD
export default Group