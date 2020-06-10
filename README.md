# Calculadora-aula-logica-

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CALCULADORA</title>

    <style>
        button {
            width: 50;
            height: 50;
            font-size: 25;
            margin: 2;
            background-color: rgb(243, 247, 12);
            border-radius: 20%;
        }

        table {
            position: absolute;
            background-color: yellow;
            text-decoration-color: yellow;
            border-color:black; 
            border-radius: 8%;
            font-size: 20px;
            padding: 5%
        }
    </style>
  
</head>
<body background="gohan1.jpg">
    <h1></h1>
    <span><strong>CALCULADORA GOKU HIGHPOWER</strong></span>
    <form> 
        <table cellspacing="0" celppading="2" border="4">
            <tr>
                <td colspan="4"> <input type="number" name="primeironumero" id="primeironumero"></td>
            </tr>
            <tr>
                <td colspan="4"><input type="number" name="segundonumero" id="segundonumero"></td>
            </tr>
            
            <tr>
                <th><input type="button" value="+" onclick="somar()"></th>
                <th><input type="button" value="-" onclick="subtrair()"></th>
                <th><input type="button" value="*" onclick="multiplicar()"></th>
                <th><input type="button" value="/" onclick="dividir()"></th>
            </tr>
            <tr>
                <td colspan="4">
                <input type="number" name="numero" id="resultado" readonly></td>
            </tr>
        </table>
    </form>

     <script>
      function somar() {
        document.getElementById("resultado").value = 
         Number(document.getElementById("primeironumero").value) 
         + 
         Number(document.getElementById("segundonumero").value);

         document.getElementById("primeironumero").value=""
         document.getElementById("segundonumero").value=""
        }
        
         function subtrair () {
         document.getElementById("resultado").value = 
         Number(document.getElementById("primeironumero").value) 
         - 
         Number(document.getElementById("segundonumero").value);

         document.getElementById("primeironumero").value=""
         document.getElementById("segundonumero").value=""
         }

         function multiplicar () {
         document.getElementById("resultado").value = 
         Number(document.getElementById("primeironumero").value) 
         * 
         Number(document.getElementById("segundonumero").value);

         document.getElementById("primeironumero").value=""
         document.getElementById("segundonumero").value=""
         }

         function dividir () {
         document.getElementById("resultado").value = 
         Number(document.getElementById("primeironumero").value) 
         /
         Number(document.getElementById("segundonumero").value);

         document.getElementById("primeironumero").value=""
         document.getElementById("segundonumero").value=""
         }

     </script>
</body>
</html>
