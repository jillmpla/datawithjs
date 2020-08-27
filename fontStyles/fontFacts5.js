var oldString7 = 'most',
    newString7 = '<span>most</span>',
    newText7 = $('ji').text().replace(RegExp(oldString7,"gi"),newString7);

$('ji').html(newText7);