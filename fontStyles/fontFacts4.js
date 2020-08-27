var oldString6 = '53%',
    newString6 = '<span>53%</span>',
    newText6 = $('pa').text().replace(RegExp(oldString6,"gi"),newString6);

$('pa').html(newText6);