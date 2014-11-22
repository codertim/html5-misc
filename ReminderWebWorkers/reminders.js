

$(document).ready(function() {
    // alert("jquery starting ...");

    if(typeof Worker == "undefined") {
        alert("Web Workers not define!!!");
    }

    $("#gobutton").on("click", function() {
        var reminderMessage = $("#remindermessage").val();
        $("#remindermessage").val("");
        var reminderTime = $("#remindertime").val();
        $("#remindertime").val("");
        // alert("Go button clicked! - reminderMessage = " + reminderMessage + "   reminderTime=" + reminderTime);
        var worker = new Worker("reminder_worker.js");
        worker.postMessage(reminderMessage + "|||" + reminderTime);

        // add to page
        $("div#accordion > div").append(reminderMessage + "<br />");

        worker.onmessage = function(e) {
          alert("REMINDER\n\n" + e.data + "\n\n");
        }
    });
});

