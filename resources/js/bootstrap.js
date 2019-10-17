window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
   broadcaster: 'pusher',
   key: process.env.MIX_PUSHER_APP_KEY,
   // id: process.env.MIX_PUSHER_APP_KEY,

   wsHost: window.location.hostname,
   wsPort: 6001,
   disableStats: true,
   // authEndpoint:'http://localhost/websocket/public/broadcasting/auth'
});
