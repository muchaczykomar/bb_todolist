import Bb from 'backbone'
import Mn from 'backbone.marionette'
import myChildView from '../views/cd.view'

var MyCollectionView = Mn.CollectionView.extend({
    el: "#root",
    collection: new Bb.Collection(),
    childView: myChildView,
    initialize: function (params) {
        this.collection.add(params.myArr);
    }

});

export default MyCollectionView