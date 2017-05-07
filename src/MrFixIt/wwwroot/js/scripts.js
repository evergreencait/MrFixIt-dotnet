﻿var test = "it works";

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

    $('.update-pending').click(function () {
        alert("this works");
        $.ajax({
            url: 'Jobs/Pending',
            type: 'GET',
            datatype: 'html',
            success: function (result) {
                $('.update').html(result);
            }
        });
    });
});