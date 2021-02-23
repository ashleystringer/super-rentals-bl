const {Router} = require('@onehilltech/blueprint');

module.exports = Router.extend({
    specification: {
        '/rentals':{
            post: {action: 'rental@create'},
            get: {action: 'rental@get'},
            '/:rentalId': {
                get: {action: 'rental@getOne'},
                delete: {action: 'rental@delete'},
                put: {action: 'rental@update'},
                patch: {action: 'rental@update'},
                options: {action: 'rental@option'}
            }
        }
    }
});