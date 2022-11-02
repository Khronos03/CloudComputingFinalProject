import React from "react";

function Entrys(){
  
  const handleDataSubmit = (event) => {
    event.preventDefault();

    var w=3;
    var s=5;
    const alfa=0.01;
    const numbersE = event.target[0].value.split(',');
    const numbersS = event.target[1].value.split(',');
    console.log(numbersE);
    var error=1;
    parseFloat(error);
    var ciclos=1000;
    while (ciclos>0) {
      var ar_Entr = new Array(numbersE.length);
      for (var i = 0; i < numbersE.length; i++) {
        var valor=0;
        valor= w*numbersE[i]+s;
        ar_Entr[i]=valor;
      }
      console.log("HOLA"+ar_Entr);
      var sum=0;
      for (var i = 0; i < numbersE.length; i++) {
       sum=sum+((ar_Entr[i]-numbersS[i])*(ar_Entr[i]-numbersS[i])); 
      }
      error=(1/numbersE)*(sum); 
      var wP=0;
      var sP=0;

      for (var i = 0; i < numbersE.length; i++) {
        wP=wP+((ar_Entr[i]-numbersS[i])*numbersE[i]);
        sP=sP+((ar_Entr[i]-numbersS[i]));
       }

      wP=wP*(2/numbersS.length);
      sP=sP*(2/numbersS.length);

      w=w-(alfa*wP);
      s=s-(alfa*sP);
      ciclos--;
    }

    const numberAlert = prompt('Digita un numero');

    var sal=numberAlert*w+s;

    alert("RESULTADO ES : " +sal);

  };

    return (
        <form
        onSubmit={handleDataSubmit}
        className="flex cols-3"
      >
        <input
          type="text"
          name="numbersE"
          placeholder="Digite Los Numeros Entrada"
          className="w-full p-2 font-semibold rounded-sm shadow-md text-black"
          required
        />

        <input
          type="text"
          placeholder="Digite Los Numeros de Salida Verdaderos"
          name="numbersS"
          className="w-full p-2 my-1 font-semibold rounded-sm shadow-md text-black m-4"
          required
        />

        <button className="px-2 mx-2 font-bold text-white bg-blue-700 border-2 border-blue-800 rounded-md shadow-xl hover:bg-blue-900">
          Iniciar Entrenamiento
        </button>
      </form>
    );
}
export default Entrys;