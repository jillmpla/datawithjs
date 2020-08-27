var oldString = 'Erie',
    newString = '<span>Erie</span>',
    newText = $('r').text().replace(RegExp(oldString,"gi"),newString);

$('r').html(newText);