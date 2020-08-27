var oldString4 = 'safest',
    newString4 = '<span>safest</span>',
    newText4 = $('od').text().replace(RegExp(oldString4,"gi"),newString4);

$('od').html(newText4);