import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'; 
import '../lib/collection.js';
import bootstrap from 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


import './main.html'; 
import './Navbar/Navbar.html'; 
import './Navbar/Navbar.js'; 
import './Game/Game.html'; 
import './Game/Game.js';  

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
