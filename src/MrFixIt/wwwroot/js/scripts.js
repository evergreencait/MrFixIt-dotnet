var test = "it works";

$('.claim-job').click(function () {
    $.ajax({
        type: 'GET',
        datatype: 'html',
        url: $(this).data('request-url'),
        success: function (result) {
            $('.claim').html(result);
        }
    });
 });