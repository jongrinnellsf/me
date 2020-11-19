function smoothScroll() {
    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 200);
        }
    });
}



// setInterval(function() { 
//     $('input').prop('checked', true);
//     // $("input").attr("checked").next();
// },  3000);


$(smoothScroll)
