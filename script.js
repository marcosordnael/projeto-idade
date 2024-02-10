function verificar() {
    var agora = new Date();
    var anoAgora = agora.getFullYear();
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value) - 1; // Mês começa de 0 (janeiro é 0)
    var ano = parseInt(document.getElementById('ano').value);
    
    // Verifica se todos os campos de entrada foram preenchidos
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert('[ERRO] Verifique os dados digitados e tente novamente!');
        return; // Sai da função se algum campo estiver vazio ou não numérico
    }

    var nascimento = new Date(ano, mes, dia);
    var idade = Math.floor((agora - nascimento) / (1000 * 60 * 60 * 24 * 365)); // Calcula a idade em anos
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var msg = document.getElementById('msg');
    var foto = document.getElementById('foto');

    var genero = '';
    if (sexo == 'm') {
        genero = 'Homem';
    } else {
        genero = 'Mulher';
    }

    msg.innerHTML = `Você é ${genero} e tem ${idade} anos`;

    if (nascimento > agora || idade < 0) {
        alert('[ERRO] Verifique os dados digitados e tente novamente!');
        return; // Sai da função se a data de nascimento for futura ou se a idade for negativa
    }

    if (idade >= 0 && idade < 10) {
        foto.src = sexo === "f" ? 'imagens/bebe-menina.jpeg' : 'imagens/bebe-menino.jpeg';
    } else if (idade >= 10 && idade < 18) {
        foto.src = sexo === "f" ? 'imagens/mulher-jovem.png' : 'imagens/homem-jovem.png';
    } else if (idade >= 18 && idade < 60) {
        foto.src = sexo === "f" ? 'imagens/mulher-adulta.jpeg' : 'imagens/homem-adulto.jpeg';
    } else {
        foto.src = sexo === "f" ? 'imagens/m-idosa.jpeg' : 'imagens/h-idoso.jpeg';
    }
}
