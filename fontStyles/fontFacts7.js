var oldString9 = '148USD',
    newString9 = '<span>$148</span>',
    newText9 = $('bk').text().replace(RegExp(oldString9,"gi"),newString9);

$('bk').html(newText9);