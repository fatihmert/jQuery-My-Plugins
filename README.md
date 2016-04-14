# jQuery-My-Plugins

## copyToClipboard

Copy any html tag in text or with its html tags or any attribute inside values with jQuery any version. Sample using;

```
  $('h1').click(function(){
		$(this).copyToClipboard();
		//OR
		//$(this).copyToClipboard("text");
	});
	
	$('span').click(function(){
		$(this).copyToClipboard("attr","data-copy");
	});
```

### Parameters

* **@param1:** String
* **@param2:** String

* Copy text with HTML tags,          @param1 = "html"
* Copy text                          @param1 = "text"
* Copy title                         @param1 = "title"
* Copy class                         @param1 = "class"
* Copy id                            @param1 = "id"
* Copy url with href attribute       @param1 = "href"
* Copy url with src attribute        @param1 = "src"
* Copy anymore input value           @param1 = "val" || @param1 = "value"
* Copy attribute                     @param1 = "attr" & @param2 = "attr-name"
