//Objetivo: Gerar uma ura padrao com 9 opçoes a saudacao no inicio.
// Gerar opcoes de 1-9



var checkboxSaudacao = document.getElementsByName('cumprimento');
var arraySaudacao = [];

//Asterisk

let arrayAsterisk = ['${CALLERID(num)}','${EXTEN}','${CHANNEL}','ExecIf($["${OPCAO}"']
let arrayOpcoes=[]

//Formulario
let nomeUra   = document.getElementById('contexto');
let qtsOpcoes = document.getElementById('quantidaOp');
let opDesativadas  = document.getElementById('desativadas');
let gerarUra  = document.getElementById('resultado');


function proximo(){
   
    //Limpa o array antes de carregar os novos elementos

    for (var checkbox in checkboxSaudacao) {
            console.log(checkboxSaudacao)
            arraySaudacao.shift(checkbox);
        }
       
    
    saudacao(checkboxSaudacao);
   
}

function saudacao() {
      

    for (var checkbox of checkboxSaudacao) {
        if (checkbox.checked) {            
            arraySaudacao.push(checkbox.value);
        }
    }
console.log(arraySaudacao[0])

    if (arraySaudacao.length == 1){ 

        if (arraySaudacao[0] == "bom_dia"){
            var hora = "00:00-11:59";
        }else if (arraySaudacao[0] == "boa_tarde"){
            var hora = "11:59-17:59";
        }else if(arraySaudacao[0] == "boa_noite"){
            var hora = "17:59-23:59";
        }else{
            var hora = "00:00-23:59";  
        }
       
        gerarUra.innerHTML =`<br><br>
        <p>[ura_${nomeUra.value}]<p>
        <p>exten => s,1,NoOp(LIGACAO DE ${arrayAsterisk[0]} PARA ${arrayAsterisk[1]} NO CANAL ${arrayAsterisk[2]})</p>
        <p>same=> n,Answer()</p>
        <p>same=>  n,ExecIfTime(${hora},*,*,*?Read(OPCAO,${nomeUra.value}/menu_${arraySaudacao[0]},1,,1,5))</p>
        <p>;OPCOES ATIVAS</p>`
        
        for (let i = 0; i < qtsOpcoes.value; i++){
            gerarUra.innerHTML +=`<p>same => n,${arrayAsterisk[3]}="${i + 1}"]?goto(default,${Math.floor(Math.random() * 90000) + 10000},1))</p>`
        }
       
        opDesativadas.innerHTML =`<p>;OPCOES DESATIVADAS</p>

        <p>same=> n,${arrayAsterisk[3]} > "${qtsOpcoes.value++}"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "*"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "#"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "0"]?goto(ura_${nomeUra.value},s,1))</p>`

    } else if  (arraySaudacao.length == 2){
        
        if (arraySaudacao[0] == "bom_dia"){
            var hora = "00:00-11:59";
        }else if (arraySaudacao[0] == "bom_tarde"){
            var hora = "11:59-17:59";
        }else{
            var hora = "17:59-23:59";
        }

      
        gerarUra.innerHTML =`<br><br>
        <p>[ura_${nomeUra.value}]<p>
        <p>exten => s,1,NoOp(LIGACAO DE ${arrayAsterisk[0]} PARA ${arrayAsterisk[1]} NO CANAL ${arrayAsterisk[2]})</p>
        <p>same=> n,Answer()</p>
        <p>same=>  n,ExecIfTime(${hora},*,*,*?Read(OPCAO,${nomeUra.value}/menu_${arraySaudacao[0]},1,,1,5))</p>
        <p>same=>  n,ExecIfTime(11:59-17:59,*,*,*?Read(OPCAO,${nomeUra.value}/menu_${arraySaudacao[1]},1,,1,5))</p>
        <p>;OPCOES ATIVAS</p>`
        
        for (let i = 0; i < qtsOpcoes.value; i++){
            gerarUra.innerHTML +=`<p>same => n,${arrayAsterisk[3]}="${i + 1}"]?goto(default,${Math.floor(Math.random() * 90000) + 10000},1))</p>`
        }
       
        opDesativadas.innerHTML =`<p>;OPCOES DESATIVADAS</p>

        <p>same=> n,${arrayAsterisk[3]} >= "${qtsOpcoes.value}"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "*"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "#"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "0"]?goto(ura_${nomeUra.value},s,1))</p>`
        

    } else if (arraySaudacao.length == 3){
        gerarUra.innerHTML =`<br><br>
        <p>[ura_${nomeUra.value}]<p>
        <p>exten => s,1,NoOp(LIGACAO DE ${arrayAsterisk[0]} PARA ${arrayAsterisk[1]} NO CANAL ${arrayAsterisk[2]})</p>
        <p>same=> n,Answer()</p>
        <p>same=>  n,ExecIfTime(00:00-11:59,*,*,*?Read(OPCAO,${nomeUra.value}/menu_${arraySaudacao[0]},1,,1,5))</p>
        <p>same=>  n,ExecIfTime(12:00-17:59,*,*,*?Read(OPCAO,${nomeUra.value}/menu_${arraySaudacao[1]},1,,1,5))</p>
        <p>same=>  n,ExecIfTime(17:59-23:59,*,*,*?Read(OPCAO,${nomeUra.value}/menu_${arraySaudacao[2]},1,,1,5))</p>
        <p>;OPCOES ATIVAS</p>`
        
        for (let i = 0; i < qtsOpcoes.value; i++){
            gerarUra.innerHTML +=`<p>same => n,${arrayAsterisk[3]}="${i + 1}"]?goto(default,${Math.floor(Math.random() * 90000) + 10000},1))</p>`
        }
       
        opDesativadas.innerHTML =`<p>;OPCOES DESATIVADAS</p>

        <p>same=> n,${arrayAsterisk[3]} >= "${qtsOpcoes.value}"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "*"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "#"]?goto(ura_${nomeUra.value},s,1))</p>
        <p>same=> n,${arrayAsterisk[3]} = "0"]?goto(ura_${nomeUra.value},s,1))</p>`
        

    }else if (arraySaudacao.length == 0){
       return arraySaudacao;
    }
   
}
