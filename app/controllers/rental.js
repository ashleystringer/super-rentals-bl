const {
  ResourceController,
  Action,
  service,
  model
} = require ('@onehilltech/blueprint');

/**
 * @class rental
 */
module.exports = ResourceController.extend ({
  //models: models('rental'),
  name: 'rental',
  Rental: model('rental'),
  rentals: service(),
  _nextId: 0,
  init(){
    console.log("Init");
  },
  test(){
    //let id = this._nextId++;
    //let data = Object.assign();
    //let rental = this.controller.Rental.create(data);
  },
  get(){
    return Action.extend({
      execute(req, res){
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        const data = this.controller.rentals.rentals;
        res.status(200).json({data});
      }
    });
  },
  getOne(){
    return Action.extend ({
      execute (req, res) {
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        const { rentalId } = req.params;
        console.log(req.params);
        const rental = this.controller.rentals.get (rentalId);
        console.log(typeof rental);
        if (rental) {
          res.status (200).json ({ data: rental }); //data: [rental]
        }
        else {
          res.sendStatus (404);
        }
      }
    })
  },
  delete () {
    return Action.extend ({
      execute (req, res) {
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        console.log('Testing delete');
        const { rentalId } = req.params;
        const result = this.controller.rentals.remove (rentalId);
        console.log("result " + result);
        res.status (200).json ({data: [result]});
      }
    });
  },
  create () {
    return Action.extend ({
      execute (req, res) {
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        //const { rental } = req.body; //Error - Resource Hash is null
        //console.log(req);
        const rental = { //
          "type": "rentals",
          "id": "test",
          "attributes": {
            "title": "Test",
            "owner": "Test",
            "city": "Test",
            "location": {
              "lat": 1,
              "lng": 2
            },
            "category": "Apartment",
            "bedrooms": 1,
            "image": "",
            "description": "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
          }
        }
        this.controller.rentals.add (rental);
  
        res.status (200).json ({data: [rental]});
      }
    })
  },
  update(){
    return Action.extend({
      execute(req, res){
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        //const rental = req.body;
        //console.log('update');
        const { rental } = req.body;
        console.log(req.params);
        this.controller.rentals.update(rental);
        res.status(200);
      }
    });
  },
  option(){
    return Action.extend({
      execute(req, res){
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "content-type");
      }
    });
  }
});
