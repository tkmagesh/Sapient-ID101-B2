$.fn.applyHint = function(){
		$(this).each(function(){
			$(this)
			.addClass("hint")
			.val($(this).attr("hintText"))
			.focus(function(){
				var $this = $(this);
				if ($this.val() === $this.attr("hintText")){
					$this.val("").removeClass("hint");
				}
			})
			.blur(function(){
				var $this = $(this);
				if ($this.val() === ""){
					$this.val($this.attr("hintText")).addClass("hint");
				}	
			})
		});
	}