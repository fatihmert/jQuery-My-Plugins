(function($){
	$.fn.copyToClipboard = function(){
		var $tmp = $('<input>');
		$('body').append($tmp);
		
		var act = null;
		var type = null;
		
		if(arguments[0] === undefined){
			type = "text";
		}else{
			type = arguments[0].toString().toLowerCase();
		}
		
		if(type == "val" || type == "value"){act = this.val();
		}else if(type == "html"){act = this.html();
		}else if(type == "text"){act = this.text();
		}else if(type == "title"){act = this.attr(type);
		}else if(type == "class"){act = this.attr(type);
		}else if(type == "id"){act = this.attr(type);
		}else if(type == "href"){act = this.attr(type);
		}else if(type == "src"){act = this.attr(type);}
		else if(
			arguments[0] !== undefined &&
			arguments[1] !== undefined &&
			arguments[0] == "attr"
		){
			act = this.attr(arguments[1].toString());
		}
		
		$tmp.val(act).select();
		document.execCommand("copy");
		$tmp.remove();
		
		return this;
	};
}(jQuery));
