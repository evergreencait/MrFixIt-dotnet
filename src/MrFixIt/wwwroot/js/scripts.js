var test = "it works";

$(document).ready(function () {
    
    //works to use ajax to claim a job on the index page
    $('.claim-job').click(function () {
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: '/Jobs/Claim/' + this.value,
            success: function (result) {
                $('.claim').html(result);
            }
        });
    });
    //works to show update view with buttons to update status of job
    $('.update-status').click(function () {
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: 'Jobs/Update',
            success: function (result) {
                $('.update').html(result);
                $('.complete-job').click(function () {
                    console.log("Hello");
                    $.ajax({
                        type: 'POST',
                        url: 'Jobs/Update/' + this.value,
                        success: function (result) {
                            console.log(result);
                            var JobId = result.jobId;
                            $('#' + JobId).remove();
                        }
                    });
                });

            }
        });
    });
});