let field = document.querySelector('textarea');
let backUp = field.getAttribute('placeholder')
let btn = document.querySelector('.btn');
let clear = document.getElementById('clear')

// When I focus on the textarea
field.onfocus = function() {
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block';
}

// When I am not on the textarea
field.onblur = function() {
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#111';
}

// When I click the button with this ID...
clear.onclick = function() {
    btn.style.display = 'none';
    field.value = '';
}