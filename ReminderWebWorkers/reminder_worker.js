

console.log("reminder_worker.js - starting ...");

onmessage = function(e) {
  console.log("reminder_worker.js#onmessage - starting ...");
  startWorker(e);
}


function startWorker(e) {
  console.log("reminder_worker.js#startWorker- starting ... e.data = " + e.data);
  var serverMessageArray = e.data.split("|||");
  console.log("reminder_worker.js#startWorker- serverMessageArray = " + serverMessageArray);
  var reminderMessage = serverMessageArray.shift();
  var reminderTime = parseInt(serverMessageArray.shift());
  console.log("startWorker - reminderMessage = " + reminderMessage);
  console.log("startWorker - reminderTime = " + reminderTime);

  setTimeout(function() { postMessage(reminderMessage)}, reminderTime * 1000);
}



