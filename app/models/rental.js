const { BO } = require ('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const schema = mongodb.Schema ({
  first_name: {type: String, required: true, trim: true},
  last_name : {type: String, required: true, trim: true}
});

module.exports = mongodb.resource ('rental', schema, 'blueprint_rentals');
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