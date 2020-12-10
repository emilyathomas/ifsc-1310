$(document).ready(function() {

$('.gallery').cycle({ 
    fx:      'curtainX', 
    speed: 'fast',
    timeout:  0, 
    next:   '#next', 
    prev: '#previous'
});

});