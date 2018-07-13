(function($) {
    $.fn.vLoading = function(action) {
        switch (action) {
            case 'show':
                this.addClass('is-active'); break;

            case 'hidden':
                this.removeClass('is-active'); break;
        }
    };
}(jQuery));