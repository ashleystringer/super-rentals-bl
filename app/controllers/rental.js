const {
  ResourceController,
  Action,
  service
} = require ('@onehilltech/blueprint');

/**
 * @class rental
 */
module.exports = ResourceController.extend ({
  name: 'rental',
  rentals: service(),
  get(){
    return Action.extend({
      execute(req, res){
        //console.log(":(");
        //res.header("Access-Control-Allow-Origin", "*");
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
        const { rentalId } = req.params;
        const result = this.controller.rentals.remove (rentalId);

        res.status (200).json (result);
      }
    });
  },
  create () {
    return Action.extend ({
      execute (req, res) {
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        const { rental } = req.body;
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
