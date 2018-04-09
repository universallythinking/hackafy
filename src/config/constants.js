export const API_URL = process.env.NODE_ENV === 'production' ?
                      'https://rubyrubyrails.herokuapp.com/api' :
                      'http://localhost:5000/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       'wss://rubyrubyrails.herokuapp.com/api/cable' :
                       'ws://localhost:5000/api/cable';
