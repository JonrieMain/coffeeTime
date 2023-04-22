window.addEventListener('scroll',()=>{
        if(window.scrollY>860){
            document.querySelector('header').style.position="fixed";
            document.querySelector('.logoCon >img').style.opacity="0";
        }else{
            document.querySelector('header').style.position="unset";
            document.querySelector('.logoCon >img').style.opacity="1";
        }
    });

