
    <script>
        function onLoadMethod(){
            var imageLoad=new Image();
            imageLoad.src = "https://github.com/BriannaLooney/LooneyBriannaWebpage2/blob/main/banner1.jpg?raw=true"
            imageLoad.src = "https://github.com/BriannaLooney/LooneyBriannaWebpage2/blob/main/banner2.jpg?raw=true"
            imageLoad.src = "https://github.com/BriannaLooney/LooneyBriannaWebpage2/blob/main/banner3.jpg?raw=true"
            
            changeImage();
    }
        function changeImage(){
            var imageSrcArray=
                ['https://github.com/BriannaLooney/LooneyBriannaWebpage2/blob/main/banner1.jpg?raw=true','https://github.com/BriannaLooney/LooneyBriannaWebpage2/blob/main/banner2.jpg?raw=true','https://github.com/BriannaLooney/LooneyBriannaWebpage2/blob/main/banner3.jpg?raw=true']
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
                document.getElementById('banner1').src=imageSrc
                console.log(document.getElementById('banner1').src)
            }
    </script>
    </head>
<body onload = "onLoadMethod()">
    </body>
</html>
