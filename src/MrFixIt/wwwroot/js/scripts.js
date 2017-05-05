var test = "it works";

$(document).ready(function () {

    $('.claim-job').click(function () {
        alert("hello");
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: 'Jobs/Claim/' + this.id,
            success: function (result) {
                $('.claim').html(result);
            }
        });
    });
});