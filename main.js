var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
  baudRate: 9600
});
let i = 0;
let coin = 12; 
port.on('data',function (data) {
  console.log('Data:', parseInt(data));				
  if(parseInt(data) > 0 && i < coin ){
  	i=i+parseInt(data);
	console.log(i);
  }
  else if (i >= coin){console.log("Done");}

});
