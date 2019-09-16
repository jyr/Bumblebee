import Vue from 'vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: process.env.ISSUER,
  client_id: process.env.CLIENT_ID,
  redirect_uri: process.env.WEB_URL+'/implicit',
  scope: process.env.SCOPE,
  pkce: true
})
