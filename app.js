angular.module('todoApp', []);

//from angularjs docs-
//module loading and dependencies
//a module is a collection of configuration and run blocks which get applied to the app during the bootstrap process
//in its simpliest form the module consists of a collection of 2 kinds of blocks
//1.config blocks - these get executed suring the provider registrations and config phase
//only providers and constants can be injected into configuration blocks.
//2.run blocks - get executed after the injector is created and are used to kickstarat the app.
//only instances and constants can be injected into run blocks. 