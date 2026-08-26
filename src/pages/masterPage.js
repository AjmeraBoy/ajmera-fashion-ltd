$w.onReady(function () {

    // Logo hover effect
    $w('#image16').onMouseIn(() => {
        $w('#image16').scaleTo(1.05);
    });

    $w('#image16').onMouseOut(() => {
        $w('#image16').scaleTo(1);
    });

});