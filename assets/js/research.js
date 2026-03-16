(function ($) {
    'use strict';

    // Research isotope filter
    var $container = $('.research-container');

    if ($container.length) {
        var researchIso = $container.isotope({
            itemSelector: '.research-item',
            layoutMode: 'fitRows'
        });

        $('#research-filters li').on('click', function () {
            $('#research-filters li').removeClass('active');
            $(this).addClass('active');
            researchIso.isotope({ filter: $(this).data('filter') });
        });
    }

    // Research modal — populate on open (Bootstrap 4: show.bs.modal)
    $('#researchModal').on('show.bs.modal', function (e) {
        var card = $(e.relatedTarget).closest('.research-card')[0]
                    || e.relatedTarget;
        var $card = $(card);
        $('#researchModalLabel').text($card.data('title') || '');
        $('#modal-authors').text($card.data('authors') || '');
        $('#modal-venue').text($card.data('venue') || '');
        $('#modal-abstract').text($card.data('abstract') || '');
        var url = $card.data('url') || '#';
        $('#modal-download').attr('href', url);
    });

})(jQuery);
