/**
 * Created by shaoruiguo on 15/6/13.
 */
var mime = {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp'};
var selectedHandler;
var bytesHandler;
var thisRef;
var MAX_WIDTH;
var MAX_HEIGHT;

function setImageUploadSize(maxWidth, maxHeight){
	MAX_WIDTH = maxWidth;
	MAX_HEIGHT = maxHeight;
}

function selectImage(selectedFunc,thisValue) {
    selectedHandler = selectedFunc;
    thisRef = thisValue;
    var fileInput = document.getElementById("fileInput");
    if(fileInput==null){
        fileInput = document.createElement("input");
        fileInput.id = "fileInput";
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.height = "0px";
        fileInput.style.display = "block";
        fileInput.style.overflow = "hidden";
        document.body.insertBefore(fileInput,document.body.firstChild);
        fileInput.addEventListener('change', tmpSelectFile, false);
    }
    setTimeout(function(){fileInput.click()},100);
}
function tmpSelectFile(evt) {
    //console.log("image selected...");
    var file = evt.target.files[0];
    var type = file.type;
    if (!type) {
        type = mime[file.name.match(/\.([^\.]+)$/i)[1]];
    }
    var ret = myCreateObjectURL(file);
    tmpCreateImage && tmpCreateImage(ret,file);
    var fileInput = document.getElementById("fileInput");
    fileInput.value="";
}
function tmpCreateImage(uri,file) {
	
	var smallURL = uri;
	selectedHandler & selectedHandler(thisRef,smallURL,file);

	return;
    var image = new Image();
    image.onload = function(){

		EXIF.getData(image, function(){ 
			var exifInfo = EXIF.getTag(this, 'Orientation');
			/*
				0°	1
				顺时针90°	6
				逆时针90°	8
				180°	3
			*/
		  
			alert('exifInfo:' + exifInfo + "\n" + image.width + "," + image.height);
			//var canvas = document.createElement("canvas");
			////宽度等比例缩放
			//image.width = MAX_WIDTH;
			//image.height = MAX_HEIGHT;
			//var ctx = canvas.getContext("2d");
			//ctx.clearRect(0, 0, canvas.width, canvas.height);
			//canvas.width = MAX_WIDTH;
			//canvas.height = MAX_HEIGHT;
			//ctx.drawImage(image, 0, 0, MAX_WIDTH, MAX_HEIGHT);
			//var smallURL = canvas.toDataURL("image/png");
		}); 
		
    }
    image.src = uri;
    image.style.visibility = "hidden";
    document.body.appendChild(image);
}
function myCreateObjectURL(blob){
    if(window.URL != undefined)
        return window['URL']['createObjectURL'](blob);
    else
        return window['webkitURL']['createObjectURL'](blob);
}
function myResolveObjectURL(blob){
    if(window.URL != undefined)
        window['URL']['revokeObjectURL'](blob);
    else
        window['webkitURL']['revokeObjectURL'](blob);
}

function getImageData(file,bytesFunc,thisValue) {
    bytesHandler = bytesFunc;
    thisRef = thisValue;
    try{var reader = new FileReader();}
    catch(err) {console.log("no support FileReader")}
    function tmpLoad() {
        bytesHandler && bytesHandler(thisRef,this.result);
    }
    reader.onload = tmpLoad;
    reader.readAsArrayBuffer(file);
}