
$(function () {
    $('.ruby').each(function(key, value) {
        let word = $(this).attr('word');
        let kana = $(this).attr('kana');

        let ruby = $('<ruby></ruby>');
        let rb = $('<rb></rb>');
        let rt = $('<rt></rt>');
        rb.html(word);
        rt.html(kana);

        ruby.append(rb);
        ruby.append(rt);
        $(this).append(ruby);
    });
});