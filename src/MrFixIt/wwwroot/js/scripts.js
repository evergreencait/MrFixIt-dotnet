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
    //works to display complete page with confirmation
    $('.complete-job').click(function () {
        alert("this works");
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: '/Jobs/Complete/' + this.value,
            success: function (result) {
                $('.complete').html(result);
            }
        });
    });

    $('.pending-job').click(function () {
        alert("this works too");
        $.ajax({
            url: 'Jobs/Pending/' + this.value,
            type: 'GET',
            datatype: 'html',
            success: function (result) {
                $('.pending').html(result);
            }
        });
    });
});