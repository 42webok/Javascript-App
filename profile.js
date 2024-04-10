window.onload  = function(){
    if(sessionStorage.getItem("user") == null){
        window.location.replace("index.html");
    }
    else{
        var pic = document.getElementById("pic");
        pic.onchange = function(){ 
            var reader = new FileReader();
            reader.readAsDataURL(pic.files[0]);
            reader.onload = function(){
                var fileName = reader.result;
                var bgImg = document.getElementById("bg_img");
                bgImg.style.backgroundImage = "url('"+ fileName +"')";
                bgImg.style.backgroundSize = "cover";
                bgImg.style.backgroundPosition = "center";
         }
        }
    }
}