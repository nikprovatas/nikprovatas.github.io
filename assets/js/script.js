(function ($) {
    'use strict';

    // Spinner
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);

    // Initiate WOW.js
    new WOW().init();

    // Counter Up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Typed.js
    if ($('.typed-text-output').length === 1) {
        var typedStrings = $('.typed-text').text();
        new Typed('.typed-text-output', {
            strings: typedStrings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Skill progress bars — animate when scrolled into view
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
        });
    }, { offset: '80%' });

    // Research isotope filter
    var $researchContainer = $('.research-container');

    if ($researchContainer.length) {
        var researchIsotope = $researchContainer.isotope({
            itemSelector: '.research-item',
            layoutMode: 'fitRows'
        });

        $('#research-filters li').on('click', function () {
            $('#research-filters li').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).data('filter');
            researchIsotope.isotope({ filter: filterValue });
        });
    }

    // Research modal — populate on card click
    var researchModal = document.getElementById('researchModal');
    if (researchModal) {
        researchModal.addEventListener('show.bs.modal', function (event) {
            var card = event.relatedTarget;
            document.getElementById('researchModalLabel').textContent = card.getAttribute('data-title') || '';
            document.getElementById('modal-authors').textContent = card.getAttribute('data-authors') || '';
            document.getElementById('modal-venue').textContent = card.getAttribute('data-venue') || '';
            document.getElementById('modal-abstract').textContent = card.getAttribute('data-abstract') || '';
            var url = card.getAttribute('data-url') || '#';
            document.getElementById('modal-download').href = url;
        });
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);
