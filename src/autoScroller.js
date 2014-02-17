(function($){
  function calcHeight($el){
    var _tmpH = $el.css("height");
    return (_tmpH.slice(0, -2)-0);
  }

  $.fn.autoScroller = function(args){
    var spped = (args["spped"] === void 0)?500:args["spped"],
        wait = (args["wait"] === void 0)?3000:args["wait"],
        target = (args["target"] === void 0)?"div":args["target"],
        display = (args["display"] === void 0)?5:args["display"]-0;

    var $contents = this.find(target),
        maxPos = $contents.length,
        pos = 0,
        top = 0;
    if(display < maxPos){
      $contents
        .wrapAll(
          $("<div>")
            .addClass("as_wrapper")
            .css({"position":"relative", "overflow":"hidden"}))
        .wrapAll(
          $("<div>")
            .addClass("as_inner")
            .css("position","absolute")
        );
      var $inner = this.find(".as_inner");
      $inner.append($contents.clone(true));
      $contents = $inner.find(target);
      var _intWrapHeight = 0;
      for(var _i=0;_i<display;_i++){
        _intWrapHeight+=calcHeight($contents.eq(_i));
      }
      $(".as_wrapper").css('height', _intWrapHeight);
      var scroll = function(){
        top -= calcHeight($contents.eq(pos));
        $inner.animate({"top": top}, spped, function(){
          pos++;
          if(maxPos < pos){
            pos = 1;
            top = calcHeight($contents.eq(pos)) * -1;
            $inner.css("top", top);
          }
          setTimeout(scroll, wait);
        });
      };
      setTimeout(scroll, wait);
    }
  };
})(jQuery);
