/**
 * Created by Sharad on 10/2/2016.
 */

var loginURL = serviceURL+'userLogin.php';

function loginUSER() {
    var mobileNumber = $('#inputMobileNumber').val(),
        accessCode = $('#inputAccessID').val(),
        requestURL=loginURL + '?mobileNumber='+mobileNumber+'&accessCode='+accessCode;

    $.getJSON(requestURL)

        .done(function (data) {
            alert(JSON.stringify(data));
        })

        .fail(function () {
            alert('<p>Oh no, something went wrong!</p>');
        });
}