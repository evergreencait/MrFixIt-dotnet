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

    //works to use ajax to show update page
    $('.update-status').click(function () {
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: '/Jobs/update/' + this.value,
            success: function (result) {
                $('.update').html(result);
            }
        });
    });
});