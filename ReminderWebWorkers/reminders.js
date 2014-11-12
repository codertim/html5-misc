

$(document).ready(function() {
    alert("jquery starting ...");

    if(typeof Worker == "undefined") {
        alert("Web Workers not define!!!");
    }

    $("#gobutton").on("click", function() {
        var reminderMessage = $("#remindermessage").val();
        var reminderTime = $("#remindertime").val();
        alert("Go button clicked! - reminderMessage = " + reminderMessage + "   reminderTime=" + reminderTime);
        var worker = new Worker("reminder_worker.js");
        worker.postMessage(reminderMessage + "|||" + reminderTime);

        worker.onmessage = function(e) {
          alert("Hello from onmessage! - message from worker = " + e.data);
        }
    });
});

