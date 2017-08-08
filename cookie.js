var CookieUtil = {
	//读取
	get : function(name){
		var cookieName = decodeURIComponent(name) + "=",
			cookieStart = document.cookie.indexof(cookieName),
			cookieValue = null;
		
		if(cookieStart > -1){
			var cookieEnd =document.cookie.indexof(';',cookieStart),
			if(cookieEnd ==-1){
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.subString(cookieStart+cookieName.length,cookieEnd));
		}
		return cookieValue;
	},
	//写入
	set : function(name,value,expires,path.domain,secure){
		var cookieText = encodeURIComponent(name) +'=' +encodeURIComponent(value);

		if(expires instanceof Date){
			cookieText +=";expires = "+expires.toGMTString();
		}

		if(path){
			cookieText += ";path="+path;
		}
		if(domain){
			cookieText += ";domain="+domain;
		}
		if(secure){
			cookieText += ";secure";
		}
		document.cookie = cookieText;
	},

	//删除
	unset : function(name,value,expires,path,domain,secure){
		this.set(name,"",new Date(0),path,domain,secure);
	}
}