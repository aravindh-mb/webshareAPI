        var title = "Web share API";
        var url = window.location.href;
        let sharebtn = document.getElementById("btn");
        function share(){
        sharebtn.addEventListener('click',()=>{
             if(navigator.share)
             {
                 navigator.share({
                    title:`${title}`,
                    url:`${url}`
                 }).then(()=>{
                    console.log("successfull share!");
                 }).catch(console.error);
            }else{
                 alert("webshare Api doesn't support");
            }
        })
    }
    share();