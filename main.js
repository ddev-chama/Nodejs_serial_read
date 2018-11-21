var SerialPort = require('serialport');
var port = new SerialPort('/dev/tty-usbserial1', {
  baudRate: 9600
});
port.on('data', function (data) {
  console.log('Data:', data.toString());
});
