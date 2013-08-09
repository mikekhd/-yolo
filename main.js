
$(document).ready(function () {
 $('#form1 input').change(function(){
    $('span.'+$(this).attr('class')).html($(this).val());
 });
});