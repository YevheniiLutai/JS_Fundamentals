
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
function checkBoxDisable() {
  if ($('input:checked').length == 3) {
      $('input').attr('disabled', 'true');
  };
};

$('input').change(checkBoxDisable);
//-----------------------------------------------------------\\