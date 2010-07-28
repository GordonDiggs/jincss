(function($,undefined){
  
  $.fn.jincss = function(attribute, amount){
    
    // if a string such as '3' or '3px' is passed in, 
    // handle it properly
    if(typeof amount == 'string'){
      amount = parseInt(amount);
    }
    
    // use anonymous function syntax to update the value of the style
    $(this).css(attribute, function(i, cur_val){ return parseInt(cur_val) + amount; });
  }
  
})(jQuery);