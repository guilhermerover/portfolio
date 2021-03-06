require('./bootstrap');

// anime.js
import anime from 'animejs/lib/anime.es';
    
    var navLinks = document.querySelectorAll('.nav-link');
    var OpenMenu = document.querySelector('.open-menu');
    var aboutBtn = document.querySelector('.aboutBtn');
    var titleKnowledge = document.querySelector('.title-knowledge');
    var descriptionKnowledge1 = document.querySelector('.description-knowledge1');
    var descriptionKnowledge2 = document.querySelector('.description-knowledge2');
    var timeKnowledge = document.querySelector('.time-knowledge');
    var codeIcons = document.querySelectorAll('.codeIcons');

    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.nav-target',
        width: [ '0px', '100%' ],
    })
    .add({
        targets: '.nav-btn',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
    })
    .add({
        targets: '.logo',
        //height: [ '0rem', '5rem' ],
        opacity: [0, 1],
        translateX: [-200, 0],
        duration: 600,
    });

    anime({
        easing: 'easeOutExpo',
        targets: '.first-section',
        opacity: [0, 1],
        translateY: [-100, 0],
        delay: 2200,
    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener('mouseenter', () => {

            var letter = navLink.querySelectorAll('.letter');

            anime.timeline({
                targets: letter,
            })
            .add({
                translateX: [0, -30],
                opacity: [1, 0],
                easing: 'easeOutExpo',
                duration: 300,
                delay: (el, i) => 30 * i,
            })
            .add({
                translateX: [40, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 700,
                delay: (el, i) => 30 * i,
            })
        })
    });

    OpenMenu.addEventListener('click', () => {
        anime.timeline({
            easing: 'easeInOutExpo',
        })
        .add({
            targets: '.open-menu',
            translateX: [0, 200],
            opacity: [1, 0],
            duration: 400,
        })
        .add({
            targets: '.nav-menu1',
            translateX: ['100%', 0],
            direction: 'reverse',
            duration: 600,
            offset: '-=100',
        })
        .add({
            targets: '.nav-menu2',
            translateX: ['100%', 0],
            direction: 'reverse',
            duration: 400,
            offset: '-=300'
        })
        .add({
            targets: '.menu div, .footer-menu',
            opacity: [0, 1],
            translateX: [100, 0],
            direction: 'reverse',
            offset: '-=300',
            duration: 800,
        })
        .add({
            targets: '.CloseMenu',
            opacity: [0, 1],
            translateX: ['100%', 0],
            direction: 'reverse',
            offset: '-=300',
            duration: 400,
        })
    });
    
    aboutBtn.addEventListener('mouseenter', () => {
        anime.timeline({
            targets: '.about-icon',
            translateX: 70,
            duration: 1000,
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.about-text',
            translateX: 12,
            easing: 'easeInOutSine',
            offset: '-=400',
        })
    })

    aboutBtn.addEventListener('mouseout', () => {
        anime.timeline({
            targets: '.about-text',
            translateX: [12, 0],
            easing: 'easeInOutSine',
        })
        .add({
            targets: '.about-icon',
            translateX: [70, 0],
            easing: 'easeInOutSine',
            offset: '-=400',
        })
    })

    anime({
        easing: 'easeInOutSine',
        targets: '.scroll-btn',
        translateY: [0, 10],
        loop: true,
        direction: 'alternate',
        duration: 600,
    });

    codeIcons.forEach((codeIcon) => {
        codeIcon.children[1].classList.add('hidden');
    });

    

    codeIcons.forEach((codeIcon) => {
        codeIcon.children[0].addEventListener('mouseenter', () => {

            codeIcon.children[1].classList.remove('hidden');
            codeIcon.children[1].classList.add('block');

            switch(codeIcon.children[1].classList[0]) {
            case 'git':
                titleKnowledge.innerHTML= 'GIT';
                content = '?? uma tecnologia que possibilita a gest??o das vers??es de um projeto no in??cio, no fim e ap??s o lan??amento. Tamb??m possibilita o trabalho em equipe que trabalha em arquivos que precisam um do outro, fazendo que os membros da equipe tenham os arquivos sempre atualizados com o trabalho do colega.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '1 ano de experi??ncia';
                break;
            case 'linux':
                titleKnowledge.innerHTML= 'Linux';
                var content = '?? um sistema operacional open source que possui muitas compet??ncias tanto para uso comum quanto para servidores. Possui muita efici??ncia ao utilizar os componentes f??sicos do computador, como a mem??ria RAM e o processador, otimizando os recursos e possibilitando um menor custo, al??m de ser gratuito (open source). Mas principalmente ?? utilizado por ser conhecido pela sua seguran??a e pelo seu uso open source, podendo alterar e manipular qualquer aspecto do computador. Por possuir uma interface pouco amig??vel se comparado ao Windows, ele costuma impedir a chegada de novos usu??rios.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
                break;
            case 'nginx':
                titleKnowledge.innerHTML= 'Nginx';
                var content = '?? um software que torna o computador em um servidor web, possibilitando o uso de banco de dados remoto(na nuvem), entre outras ferramentas. Nginx concorre diretamente com o apache, outro servidor web, sendo os dois open source. J?? utilizei ambos, mas hoje utilizo o Nginx nas minhas aplica????es.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '3 meses de experi??ncia';
                break;
            case 'mysql':
                titleKnowledge.innerHTML= 'MySql';
                var content = '?? um sistema de gest??o de banco de dados. Simplificando, um banco de dados nada mais ?? que um aglomerado de arquivos com certos dados em cada um, e o MySql nada mais ?? do que o gerenciador desses arquivos, por??m utilizando da linguagem SQL para criar, alterar, ler e apagar esses arquivos.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '1 ano e 6 meses de experi??ncia';
                break;
            case 'html5':
                titleKnowledge.innerHTML= 'HTML5';
                var content = '?? uma tecnologia que possibilita a estrutura????o de uma p??gina web. Ela n??o ?? considerada uma linguagem de programa????o, mas ?? indispens??vel para qualquer site.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
                break;
            case 'sass':
                titleKnowledge.innerHTML= 'SASS';
                var content = '?? um pr??-processador que gera arquivos CSS. A sua vantagem ?? que com o com o SASS, ?? poss??vel utilizar importa????es, vari??veis, entre outras ferramentas que facilitam a rapidez do desenvolvimento e uma melhor estrutura de projeto.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '3 meses de experi??ncia';
                break;
            case 'css':
                titleKnowledge.innerHTML= 'CSS';
                var content = '?? uma tecnologia que possibilita a manipula????o da apar??ncia de um site. N??o ?? considerada uma linguagem de programa????o, mas ?? indispens??vel em p??ginas web.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
                break;
            case 'tailwindcss':
                titleKnowledge.innerHTML= 'Tailwind CSS';
                var content = '?? uma biblioteca CSS diferente das demais do mercado. O Tailwind CSS utiliza o conceito de "css utilit??rio", onde por meio de classes, s??o denominadas todas as fun????es do css, possibilitando que voc?? tenha maior controle do seu design e reduza a quantidade de arquivos css, consequentemente diminuindo a quantidade de requisi????es http. Al??m disso, possui o conceito "mobile first" que eu considero essencial nos dias de hoje, j?? que no Brasil cerca de 80% das pessoas acima de 10 anos de idade possui um celular, sendo encontrado em 99,5% dos domic??lios com acesso a internet. J?? o computador existe em apenas 45% das resid??ncias com acesso a internet.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '1 e 2 meses de experi??ncia';
                break;
            case 'javascript':
                titleKnowledge.innerHTML= 'JavaScript';
                var content = '?? uma tecnologia que possibilita o uso de a????es em um site. ?? considerada uma linguagem de programa????o e hoje, ?? indispens??vel em qualquer site j?? que, em qualquer a????o feita em um site, seja um formul??rio ou a anima????o de um bot??o, o javascript est?? presente.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
                break;
            case 'php':
                titleKnowledge.innerHTML= 'PHP';
                var content = '?? uma linguagem de programa????o que diferente do javascript que roda no lado do cliente - aquele que est?? utilizando o site -, o php roda do lado do servidor. ?? ele que faz a manipula????o dos dados antes de entrarem no banco de dados, e tamb??m ?? ele que pega esses dados do banco e pr??-processa para disponibilizar para o cliente. Essa ?? s?? uma das fun????es de uma linguagem que atua do lado do servidor.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
                break;
            case 'livewire':
                titleKnowledge.innerHTML= 'Livewire';
                var content = '?? um framework frontend para Laravel que facilita muito o desenvolvimento, criando em poucas linhas de c??digo uma aplica????o rodando dinamicamente com ajax sem nenhuma linha de javascript escrita diretamente. A vis??o desse framework ?? o futuro do mercado de programa????o, j?? que ele oferece tudo que precisamos: velocidade, praticidade e qualidade.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '1 e 2 meses de experi??ncia';
                break;
            case 'alpinejs':
                titleKnowledge.innerHTML= 'Alpine.js';
                var content = '?? uma biblioteca javascript que realiza a????es b??sicas que todo site utiliza, como esconder e mostrar um objeto, fazer anima????es, entre outras, com pouqu??ssimas linhas de c??digo. Al??m disso, ?? muito leve e pr??tico.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '1 e 2 meses de experi??ncia';
                break;
            case 'laravel':
                titleKnowledge.innerHTML= 'Laravel';
                var content = '?? um framework fullstack que utiliza o php para gerar toda a estrutura necess??ria para manter um projeto seguro, estruturado e pr??tico, facilitando e agilizando muito o desenvolvimento de um novo projeto(n??o pode ser usado em projetos j?? existentes). O Laravel ?? uma inspira????o para outros frameworks de outras linguagens de programa????o por ser muito bem constru??do e de f??cil utiliza????o.';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '1 e 2 meses de experi??ncia';
                break;
            case 'bootstrap':
                titleKnowledge.innerHTML= 'Bootstrap 4';
                var content = '?? uma biblioteca CSS que facilita o uso do css com classes pr??-criadas para diversos fins que definem a apar??ncia de um site. Interessante notar que ela adota um modelo de classes "padr??o", enquanto o Tailwind CSS utiliza classes utilit??rias com foco no conceito "mobile first".';
                descriptionKnowledge1.innerHTML= content;
                descriptionKnowledge2.innerHTML= content;
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
                break;
            default:
                //
                titleKnowledge.innerHTML = 'Veja as tecnologias que eu conhe??o.';
                descriptionKnowledge1.innerHTML= 'Clique em algum ??cone para ver mais.';
                descriptionKnowledge2.innerHTML= 'Passe o mouse sobre algum ??cone para ver mais.';
                timeKnowledge.innerHTML= '2 anos de experi??ncia';
            }
        })
    });

    codeIcons.forEach((codeIcon) => {
        codeIcon.addEventListener('mouseout', () => {
            codeIcon.children[1].classList.remove('block');
            codeIcon.children[1].classList.add('hidden');
            //knowledge.classList.remove('hidden');

            titleKnowledge.innerHTML = 'Veja as tecnologias que eu conhe??o.';
            descriptionKnowledge1.innerHTML = 'Clique em algum ??cone para ver mais.';
            descriptionKnowledge2.innerHTML = 'Passe o mouse sobre algum ??cone para ver mais.';
            timeKnowledge.innerHTML= '';
            
        })
    });