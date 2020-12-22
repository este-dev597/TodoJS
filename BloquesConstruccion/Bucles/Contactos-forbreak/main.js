var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
    var searchName = input.value;
    input.value = '';
    input.focus();
    for (var i=0; i<contacts.length; i++) {
        var splitContact = contacts[i].split(':');    // split-> Me separa en un subArray apartir de ':' -> 0[Chris]1[2232322]
        if (splitContact[0] === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;   
        } else {
            para.textContent = 'Contact not found.';
        }
    }
})

