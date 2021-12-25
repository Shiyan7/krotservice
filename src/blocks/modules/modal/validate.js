import $ from "jquery";
//eslint-disable-next-line
import validate from "jquery-validation";

$(document).ready(function () {

    $(".validate-form").each(function () {
        $(this).validate({
            rules: {
                name: {
                    required: true
                },
                phoneNumber: {
                    required: true,
                    minlength: 17,
                    maxlength: 17
                },
                text: {
                    required: true,
                },
                radio: {
                    required: true,
                }
            },
        });
    });

});