(function($,undefined){
  $.fn.jincss = function(attribute, amount){
    if(typeof amount == 'string'){
      amount = parseInt(amount);
    }
    $(this).css(attribute, function(i, cur_val){ return parseInt(cur_val) + amount; });
  }
})(jQuery);