var oldString1 = 'dangerous',
    newString1 = '<span>dangerous</span>',
    newText1 = $('la').text().replace(RegExp(oldString1,"gi"),newString1);

$('la').html(newText1);