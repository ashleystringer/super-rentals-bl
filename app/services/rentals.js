const { Service, computed } = require ('@onehilltech/blueprint');

/**
 * @class rentals
 */
module.exports = Service.extend ({
  _rentals: null,

  rentals: computed ({
    get () { return this._rentals; }
  }),

  init () {
    this._super.call (this, ...arguments);

    this._rentals = [
      {
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      },
      {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      },
      {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }];
      //console.log(this._rentals);   
  },

  // get a single rental
  get (id) {
    //console.log("this._rentals.find(): " + id);
    return this._rentals.find (rental => rental.id === id);
  },

  // add a rental to the list.
  add (rental) {
    //console.log(this._rentals);   
    return this._rentals.push (rental);
  },

  // remove the rental from the list.
  remove (id) {
    let index = this._rentals.findIndex (rental => rental.id === id);

    if (index === -1)
      return false;

    this._rentals.splice (index, 1);
    return true;
  },

  update(rental){
    //let index = this._rentals.findIndex (rental => rental.id === id);
    //console.log("rental => " + rental);
    console.log(rental);
    //UPDATE - 

  }
});