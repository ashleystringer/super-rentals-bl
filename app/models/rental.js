const { BO } = require ('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const schema = mongodb.Schema({
  type: {type: String, required: true},
  title: {type: String, required: true},
  owner: {type: String, required: true},
  city: {type: String, required: true},
  category: {type: String, required: true},
  bedrooms: {type: String, required: true},
  image: {type: String, required: true}
});

//module.exports = mongodb.models('rental', schema, 'blueprint_rental');
/*module.exports = BO.extend ({
    id: null,              // message id//
    title: null,           // who the message is from
    owner: null,             // who the message is to
    city: null,           // date of the message
    category: null,        // message subject
    bedrooms: null,        // content of the message
    image: null,

    init () {
      this._super.call (this, ...arguments);
      
      //if (!this.date) this.date = new Date ();
    }
  });*/