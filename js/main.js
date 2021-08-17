$(function () {

    $('.open-search').click(function (e) {
       e.preventDefault();
       $('#search').addClass('active');
    });

    $('.close-search').click(function () {
        e.preventDefault();
        $('#search').removeClass('active');
    });

})