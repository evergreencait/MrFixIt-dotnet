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
        alert("this works");
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: 'Jobs/Edit',
            success: function (result) {
                $('.update').html(result);

            }
        });
    });

    $('.complete-job').submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: 'Job/Edit',
            type: 'POST',
            dataType: 'json',
            data: $(this).serialize(),
            success: function (result) {
                var editedJob = result.Title;
                var jobId = result.id.toString();
                $('#' + jobId).text(editedJob);
            }
        });
    });
});