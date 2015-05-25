//Importing Noble library

var noble = require('noble');

// State definition

noble.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === 'poweredOn') {
  	noble.startScanning([], true); // Scanning all devices and allow duplicates
  } else {
    noble.stopScanning();
  }
});

// Start scan function call

noble.on('scanStart', function() {
  console.log('on -> scanStart');
});

// Stop scan function call

noble.on('scanStop', function() {
  console.log('on -> scanStop');
});

// Discovering devices...

noble.on('discover', function(peripheral) {
	console.log('Device found - UUID:', peripheral.uuid, ' RSSI: ', peripheral.rssi);
});
