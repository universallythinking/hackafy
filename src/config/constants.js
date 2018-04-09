export const API_URL = process.env.NODE_ENV === 'production' ?
                      'https://rubyrubyrails.herokuapp.com/api' :
                      'https://rubyrubyrails.herokuapp.com/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       'wss://rubyrubyrails.herokuapp.com/api/cable' :
                       'wss://rubyrubyrails.herokuapp.com/api/cable';
