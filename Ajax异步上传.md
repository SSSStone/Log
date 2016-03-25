#Ajax异步上传
[toc]

##一、iframe伪装
通过修改表单的`target`属性，把表单提交到新创建的`iframe`中，通过iframe来`submit`文件。
代码如下：
``` javascript
<html>
<script type="text/javascript">
   	function upload(){
	   	//以随机数命名iframe标签，避免重复
   		var iframeName = 'up' + Math.random();
   		$('<iframe name="'+iframeName+'" style="display: none" ></iframe>').appendTo("body");
   		//修改form表单的target属性
   		$('from:first').attr("target",iframeName);
   		//展示进度条
   		$('#progress').html('<img src="./loding.gif" />');
   	} 
</script>
<body>
	<div id="progress"></div>
	<form action="upload.do" method="post" enctype="multipart/form-data" onsubmit="return upload()">
		<input type="file" name="pic" />
		<input type="submit" value="提交" />
	</form>
</body>
```
如上，可以把文件成功上传到服务器，但是上传是否成功的返回值在iframe中接收到，为了在主页面上作出相应提示，需要作出以下改动：
``` javascript
 //在服务器返回
 "<script>parent.document.getElementsById('progress').innerHTML = 'success'"
```
##二、swf插件
##三、html5

