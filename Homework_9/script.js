
//************************** Task_1 *************************\\
$("a[href^='https://']").attr('target', '_blank');
//-----------------------------------------------------------\\

//************************** Task_2 *************************\\
$('.head').css('background-color', 'green');
$('.inner').css('font-size', '35px')
//-----------------------------------------------------------\\

//************************** Task_3 *************************\\
$('div').each(() => {
  $('div').insertBefore($(this).prev());
});
//-----------------------------------------------------------\\

//************************** Task_4 *************************\\

let checked = $('input:checked').val();
console.log($('rezult').html())
if ($('input:checked').length == 3) {
   $('input').attr('disable', 'true')
} ;
//let  tagInputCheked = document.querySelectorAll('input:checked')
  //  if (tagInputCheked.length == 3) {
    //    document.querySelectorAll('input').forEach(elem => elem.disabled=true);
    //}

//-----------------------------------------------------------\\