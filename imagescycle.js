<!doctype>
<html>
<head>
    <title>Image Cycling</title>
     <p>   <a href="index"> Home </a></p>
    <script>
        function onLoadMethod(){
            var imageLoad=new Image();
            imageLoad.src = "hikeview.jpg"
            imageLoad.src = "hike22.JPG"
            changeImage();
    }
        funstion changeImage(){
            var imageSrcArray=['hikeview.jpg','hike22.JPG']
        var i = 0
        var j = 10;
        while (j > 0){
            setTimeout(changeDisplayedImage, 5000, imageSrcArray[i]);
            i++;
            if (i >=imageSrcArray.length )
                i = 0;
            j--;
        } 
     }
            
            function changeDisplayedImage(){
                document.getElementById('hikeview').src=imageSrc
                console.log(document.getElementById('hike22').src)
            }
    </script>
    </head>
<body onload = "onLoadMethod()">
    </body>
</html>
