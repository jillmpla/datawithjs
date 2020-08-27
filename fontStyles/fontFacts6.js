var oldString8 = '28USD',
    newString8 = '<span>$28</span>',
    newText8 = $('rl').text().replace(RegExp(oldString8,"gi"),newString8);

$('rl').html(newText8);