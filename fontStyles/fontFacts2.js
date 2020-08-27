var oldString2 = 'Hamilton',
    newString2 = '<span>Hamilton</span>',
    newText2 = $('r1').text().replace(RegExp(oldString2,"gi"),newString2);

$('r1').html(newText2);