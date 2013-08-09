
$(document).ready(function () {
 $('input').change(function(){
    $('span.'+$(this).attr('class')).html($(this).val());
 });
});