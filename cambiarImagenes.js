// javascript para ir cambiando imagenes automaticamente
 

    var imagenes=new Array(

        ['img/evil.png'],

        ['img/evil2.png'],

        ['img/evil3.png'],

        ['img/survive1.png'],

        ['img/survive9.png'],

        ['img/survive1.png'],
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

        setInterval(rotarImagenes,2000);

    }



 


 



 

