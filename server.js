var zetta = require('zetta');
var Buzzer = require('zetta-buzzer-bonescript-driver');
var PIR = require('zetta-pir-bonescript-driver');
var Microphone = require('zetta-microphone-bonescript-driver');
var WeMo = require('zetta-wemo-driver');
var AutoScout = require('zetta-auto-scout');
var LED = require('./devices/LED');

var app = require('./apps/app');

zetta()
  .use(Buzzer, 'P9_14')
  .use(PIR, 'P9_12')
  .use(Microphone, 'P9_36')
  .use(WeMo)
  .use(LED, 'P9_41')
  .load(app)
  .listen(1337)
