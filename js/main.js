function MudaDesenho(){

    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const mes = document.querySelector('#mes').value;
    const dia = document.querySelector('#dia').value;
    const data = "2023"+"/"+mes+"/"+dia;
    
    
    if((data >='2023/05/20') && (data <='2023/06/20')){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
        
    }

    else if((data >='2023/10/23') && (data <='2023/11/21')){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Milo de Escorpião é o cavaleiro que protege a Casa de Escorpião no Santuário de Atena na Grécia, de personalidade por vezes altiva, porem nobre e justo.";
    }
    
    else if(data >='2023/02/18' && data <='2023/03/19'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "O protetor da última Casa do Zodíaco sendo o sucessor de Albafica de Peixes, Pode derrotar qualquer inimigo se estiver lutando com toda sua força, É um cavaleiro famoso não apenas por sua beleza, mas também pela sua reputação como um dos mais fortes entre os 88 cavaleiros, Possui uma personalidade um tanto arrogante e orgulhosa, Sua idéia é de que só um poder supremo absoluto pode colocar paz e ordem no mundo, mesmo que esse poder seja do mal";
    }

    else if((data >='2023/03/20') && (data <='2023/04/18')){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "O Cavaleiro de Ouro de Áries é Mu, um personagem que, antes de se revelar como tal, já era um dos mais importantes aliados dos cavaleiros de bronze. No artigo de hoje, em 10 fatos, falamos sobre esse interessante personagem.";
    }

    else if((data >='2023/09/22') && (data <='2023/10/22')){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
    }

    else if((data >='2023/01/19') && (data <='2023/02/17')){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }

    else if((data >='2023/06/21') && (data <="2023/07/21")){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/câncer.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis. As paredes da Casa de Câncer são enfeitadas com os rostos das pessoas que foram mortas até hoje por Máscara da Morte.";
    }

    else if((data >='2023/12/21') && (data <='2023/01/18')){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
    }

    else if((data >='2023/07/22') && (data <='2023/08/22')){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aiolia é um dos Doze Cavaleiros de Ouro do século XX, lutando ao serviço de Atena. Ele é o irmão mais novo de Aiolos, o falecido Cavaleiro de Sagitário e candidato a Grande Mestre. Apesar de ter muitas aparições em obras paralelas, sua principal atuação é na série clássica.";
    }

    else if((data >='2023/11/21') && (data <='2023/12/20')){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre.";
    }

    else if((data >='2023/04/19') && (data <='2023/05/19')){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades.";
    }

    else if((data >='2023/08/23') && (data <='2023/09/21')){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
        texto2.innerHTML = "";
    }
}

