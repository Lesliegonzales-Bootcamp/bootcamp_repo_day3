/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/training/day3exer1gonzales/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
