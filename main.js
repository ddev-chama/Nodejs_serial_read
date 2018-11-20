var serialport = require("serialport");
var Serialport = serialport.SerialPort;
var portName = process.argv[2];

var myPort = new SerialPort(portName,{
	baudRate:9600,
	parser:serialport.parsers.readline("\r\n");
})
myPort.on('open',onOpen);
myPort.on('data',onOpen);

function onOpen(){
	console.log("open Connection");
}
function onData(data){
	console.log("on Data"+data);
}
