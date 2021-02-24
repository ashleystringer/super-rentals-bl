const { BO } = require ('@onehilltech/blueprint');

module.exports = BO.extend ({
    id: null,              // message id
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
  });