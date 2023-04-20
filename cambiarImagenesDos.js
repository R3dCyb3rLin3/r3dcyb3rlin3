//imagenes

 

    var imagenes=new Array(

        ['img/una.png'],

        ['img/dos.png'],

    );

    var contador=0;


    function rotarImagenes()

    {
     
      contador++

      document.getElementById("mages").src=imagenes[contador%imagenes.length][0];
      

    }


    onload=function()

    {

        rotarImagenes();

        setInterval(rotarImagenes,3000);

    }



 


 



 

