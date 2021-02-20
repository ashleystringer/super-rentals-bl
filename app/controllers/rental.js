const {
  Controller,
  Action
} = require ('@onehilltech/blueprint');

/**
 * @class rental
 */
module.exports = Controller.extend ({
  get(){
    return Action.extend({
      execute(req, res){
        console.log(":(");
        //res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json({
          data:[
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
            }
          ]
        });
      }
    });
  },
  get1(){
    return Action.extend({
      execute(req, res){
        console.log("??????");
        res.header("Access-Control-Allow-Origin", "*"); //?
        res.status(200).json({
          data:
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
            }
        });
      }
    });
  },
  test(){
    return Action.extend({
      execute(req, res){
        console.log("Testing test() method :)");
        res.header("Access-Control-Allow-Origin", "*"); //?
        console.log("test()");
      }
    });
  }
});
