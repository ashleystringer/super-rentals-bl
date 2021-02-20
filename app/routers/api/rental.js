const {Router} = require('@onehilltech/blueprint');

module.exports = Router.extend({
    specification: {
        '/rentals/':{
            get: {action: 'rental@get'}
        },
        '/rentals/grand-old-mansion':{
            get: {action: 'rental@get1'},
            put: {action: 'rental@test'}
        }
        /*'/rentals/grand-old-mansion':{
            put: {action: 'rental@get'}
        }*/
    }
});