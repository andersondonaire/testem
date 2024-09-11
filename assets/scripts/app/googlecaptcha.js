var reCAPTCHAHelper = new (function () {
    var that = this;
    var fieldName = "__CaptchaVerificationToken";

    that.GetKey = function () {
        return $("script[data-recaptcha]").attr("data-recaptcha");
    };

    that.Init = function (el) {
        $(el)
            .find('[data-plugin="grecaptchav3"]')
            .each(function () {
                try {
                    var $g = $(this);
                    var $form = $g.closest("form");
                    grecaptcha
                        .execute(that.GetKey(), {
                            action: $form.attr("data-action") || "form",
                        })
                        .then(function (token) {
                            var $input = $form.find(
                                'input[type="hidden"][name="' + fieldName + '"]'
                            );
                            if ($input.length === 0) {
                                $input = $(
                                    '<input type="hidden" name="' + fieldName + '" value=""/>'
                                );
                                $form.append($input);
                            }
                            $input.val(token);
                            $form.find("button[disabled]").removeAttr("disabled");
                        });
                } catch (err) { }
            });

        $(el)
            .find('form[data-plugin="captcha"]')
            .each(function () {
                try {
                    var $form = $(this);
                    grecaptcha
                        .execute(that.GetKey(), {
                            action: $form.attr("data-action") || "form",
                        })
                        .then(function (token) {
                            var $input = $form.find(
                                'input[type="hidden"][name="' + fieldName + '"]'
                            );
                            if ($input.length === 0) {
                                $input = $(
                                    '<input type="hidden" name="' + fieldName + '" value=""/>'
                                );
                                $form.append($input);
                            }
                            $input.val(token);
                            $form.find("button[disabled]").removeAttr("disabled");
                        });
                } catch (err) { }
            });
    };

    that.Reset = function (el) {
        try {
            var $form = $(el);
            grecaptcha
                .execute(that.GetKey(), { action: $(el).attr("data-action") || "form" })
                .then(function (token) {
                    var $input = $form.find(
                        'input[type="hidden"][name="' + fieldName + '"]'
                    );
                    if ($input.length === 0) {
                        $input = $(
                            '<input type="hidden" name="' + fieldName + '" value=""/>'
                        );
                        $form.append($input);
                    }
                    $input.val(token);
                });
        } catch (err) { }
    };

    that.Reload = function (el) {
        try {
            $(el)
                .find('[name="' + fieldName + '"]')
                .each(function () {
                    var $element = $(this);
                    var $form = $(this).closest("form");
                    grecaptcha
                        .execute(that.GetKey(), {
                            action: $form.attr("data-action") || "form",
                        })
                        .then(function (token) {
                            $element.val(token);
                        });
                });
        } catch (err) { }
    };
})();

onReCAPTCHALoaded = function () {
    reCAPTCHAHelper.Init("body");
    window.setInterval(function () {
        reCAPTCHAHelper.Reload("body");
    }, 60000);
};
