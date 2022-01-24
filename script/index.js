// Menu burger :
var btn = document.getElementById('burger');
var nav = document.getElementById('main-nav');
btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Création du tableau des juristes :
var juristes = [
    {
        prenom : 'Paule Constant',
        nom : 'Constant',
        texte : "Née à Gan, près de Pau, Paule Constant a passé son enfance et une bonne partie de sa vie aux quatre coins du monde. Docteur ès lettres et sciences humaines de Paris-Sorbonne, Professeur des Universités, elle a enseigné la littérature française à l’Université d’Aix-Marseille. Elle vit à Aix-en-Provence, où elle écrit ses livres. <br>L’Afrique a servi de cadre à plusieurs de ses romans. L’enfance, l’éducation des filles, la condition féminine, la justice, le colonialisme, sont les grands thèmes de l’inspiration d’une œuvre qu’elle a construite d’emblée, dans sa totalité, comme un témoignage sur la condition humaine. <br>Elle est traduite dans une trentaine de pays. <br><br>Parmi les prix reçus : le Prix Goncourt (1998), le Grand Prix du roman de l’Académie française (1990), le Prix de l’essai de l’Académie française (1987), la Targa Jean Giono - récompense franco-italienne -pour l’ensemble de son œuvre (1995), le Prix du Centre International d’Etudes Francophones “destiné à récompenser une contribution exceptionnelle au développement des études francophones dans le monde“ (2008).<br>Elle a été membre du jury Femina. <br><br>A Aix-en-Provence, elle a créé en 2000 le Centre des Écrivains du Sud - Jean Giono, dont elle préside, organise et anime les activités. Depuis 2015, elle est la directrice littéraire Festival des Ecrivains du Sud de la ville d’Aix-en-Provence.",
        image : 'paule.jpg'
    },
    {
        prenom : 'Philippe',
        nom : 'Claudel',
        texte : "Né en 1962 en Lorraine, à Dombasle-sur-Meurthe, petite commune industrielle où il réside toujours. <br>Après l’obtention de son baccalauréat (scientifique) en 1981, il fait la fête pendant 2 ans, écrit des poèmes, dessine, boit trop, lit beaucoup, travaille sur des courts-métrages, chante comme choriste dans un groupe punk.<br><br>La rencontre avec sa femme Dominique, en 1983, l’incite à entreprendre des études de littérature, d’histoire de l’art et de cinéma qui s’achèveront quelques années plus tard par une agrégation de lettres modernes et une thèse de doctorat remarquée en littérature française consacrée à André Hardellet (1911 - 1974). Il enseigne en collège, lycée, dans les hôpitaux auprès d’enfants malades, pendant 12 ans à la maison d’arrêt de Nancy et 4 ans dans un établissement spécialisé pour enfants handicapés.<br>En 2001, il est nommé maître de conférences en littérature et anthropologie culturelle  à l’Université de Nancy II (Université de Lorraine).<br><br>Passionné de montagne, il aime comparer cette dernière à l’écriture :<br>«Ce qui me plaît dans la montagne comme dans l’écriture, c’est de me trouver confronté à quelque chose qui me dépasse, de façon humaine, et d’essayer d’y trouver ma voie, que ce soit sur une paroi ou dans un roman.» (Le lieu essentiel - Arthaud). <br>Ses principaux romans sont traduits dans une quarantaine de langues. Il est aussi réalisateur et dramaturge.",
        image : "philippe.jpg"
    },
    {
        prenom : "Didier",
        nom : "Decoin",
        texte : "Didier Decoin est le fils du cinéaste Henri Decoin. Après des études secondaires au collège Sainte-Croix de Neuilly-sur-Seine, il commence sa carrière comme journaliste de presse écrite à France Soir. Puis il collabore à plusieurs journaux comme Le Figaro, Les Nouvelles littéraires, participe à Europe I et à la création du magazine V.S.D. Également féru de navigation, il a longtemps été chroniqueur à la revue Neptune Moteur.<br>Parallèlement au journalisme, il entame une carrière de romancier. Il a vingt ans lorsqu'il publie son premier livre, Le Procès à l'amour. Celui-ci sera suivi d'une vingtaine de titres, dont John l'Enfer pour lequel, en 1977, il reçoit le prix Goncourt.<br>Il assure, à deux reprises, la présidence de la Société des gens de lettres de France et il est l'un des fondateurs de la SCAM (Société civile des auteurs multimédia).<br>Pour sauvegarder sa liberté d'écrivain, Didier Decoin se dote d'un second métier garant de son indépendance, celui de scénariste. Au cinéma, il travaille pour des réalisateurs tels que Marcel Carné, Robert Enrico, Henri Verneuil, et Maroun Bagdadi avec qui il recevra, pour le film Hors-la-vie, le prix spécial du jury au festival de Cannes.<br>Mais c'est à la télévision que Didier Decoin consacre l'essentiel de ses activités. Auteur de très nombreux scripts originaux et d'adaptations, et après avoir dirigé pendant trois ans et demi la fiction de France 2, il reçoit en 1999 le Sept d'Or du meilleur scénario pour Le Comte de Monte-Cristo (mini-série télévisée diffusée en 1998).<br>En 2007, il est élu président de l'association Les écrivains de Marine.En 2012, il est élu à l'unanimité président du Festival International des programmes audiovisuels (FIPA)Didier Decoin vit en Normandie. Il est marié et est père de trois enfants. Son fils Julien Decoin est aussi écrivain.",
        image : "didier.jpg"
    },
    {
        prenom : "Françoise",
        nom : "Chandernagor",
        texte : "Née dans une famille de maçons creusois alliés aux descendants d'un esclave indien affranchi, mère de trois enfants, Françoise Chandernagor a toujours partagé sa vie entre Paris et le Limousin.<br><br>Après un diplôme de l'Institut d'Etudes Politiques de Paris et une maîtrise de droit public, elle entre à 21 ans à l'Ecole Nationale d'Administration (ENA), d'où elle sort deux ans plus tard « major » de sa promotion. Elle est la première femme à obtenir ce rang. <br>Elle intègre alors le Conseil d'Etat où elle va exercer différentes fonctions juridictionnelles, notamment celles de Rapporteur Général, chargé du rapport public, mais également, à l’extérieur du Conseil d’Etat, des responsabilités administratives dans le domaine économique.<br><br>Parallèlement, elle accepte à titre bénévole des missions dans divers organismes caritatifs ou culturels ; elle assure notamment la vice-présidence de la Fondation de France jusqu'en 1988. En 1994, elle quitte l'administration pour se consacrer à l'écriture. <br>Depuis 1981, date à laquelle elle a publié L'Allée du Roi, Françoise Chandernagor a écrit douze romans ; les uns peignent la société contemporaine, les autres sont des romans « dans l’Histoire ». Plusieurs ont été traduits dans une quinzaine de langues, et deux d'entre eux - L’Allée du Roi et l’Enfant des Lumières - ont fait l'objet d'adaptations télévisuelles. Elle a aussi publié trois essais (Maintenon ; Liberté pour l’histoire en collaboration avec Pierre Nora ; Quand les femmes parlent d'amour) et une pièce de théâtre (représentée à Bruxelles, avec Jacqueline Bir, en 1993-1994 et 2008, et à Paris, avec Geneviève Casile en 1994-1995 et Marie-Christine Barrault en 2009).",
        image : "francoise.jpg"
    },
    {
        prenom : "Tahar",
        nom : "Ben Jelloun",
        texte : "Je suis né à Fès le 15 décembre 1947. J'ai fréquenté d'abord l'école coranique du quartier, ensuite, à 6 ans je suis entré à l'école primaire franco-marocaine bilingue. Le matin l'enseignement était donné en français, l'après-midi en arabe. L'école était dirigée par un Français.<br><br>En 1955, mes parents déménagent à Tanger où je rejoins avec mon frère l'école primaire du détroit où je passe le certificat d'études primaires.<br>En 1956 j'entre au lycée Ibn Al Khatib. Enseignement à majorité francophone. Après le brevet je passe au lycée français Regnault où j'obtiens mon baccalauréat en 1963.<br>À Rabat, études de philosophie.<br><br>23 mars 1965 : manifestations d'étudiants et de lycéens dans les grandes villes du Maroc. Répression, arrestations. Juillet 1966 : Mes études de philosophie sont interrompues ; je suis envoyé dans un camp disciplinaire de l'armée (à El Hajeb puis à Ahermemou dans l'Est du Maroc) avec 94 autres étudiants soupçonnés d'avoir organisé les manifestations de mars 65. Je suis libéré en janvier 1968 et je reprends mes études.<br><br>Octobre 1968 : je rejoins mon premier poste d'enseignant au lycée Charif Idrissi à Tétouan où je suis le premier professeur de philo dans cet établissement. Je publie la même année mon premier poème <em>l'Aube des dalles</em> dans la revue <em>Souffles</em> écrit en cachette dans le camp disciplinaire.<br><br>Octobre 1970 : je suis muté au lycée Mohamed V à Casablanca. J'ai peu enseigné durant cette année à cause des grèves des lycéens. Les éditions Atalantes, rattachées à Souffles que dirigeait le poète Abdellatif Laabi publient mon premier recueil de poésie <em>Hommes sous linceul de silence</em> préfacé par Abraham Serfaty. J'arrive le 11 septembre 1971 à Paris. François Maspero publie mes poèmes et Maurice Nadeau mon premier roman \"Harrouda\".<br>Depuis plusieurs ouvrages publiés au Seuil dont \"La Nuit sacrée\" Prix Goncourt 1987. Je rejoins la maison Gallimard en 2006 où je publie \"Partir\".<br>2010, j'abandonne les gribouillages et dessins pour peindre sur toile. Je fais ma première exposition de peinture le 18 avril 2013 au Musée San Salvatore in Lauro à Rome.",
        image : "tahar.jpg"
    },
    {
        prenom : "Patrick",
        nom : "Rambaud",
        texte : "Patrick Rambaud est né à Paris en 1946, sous le signe du taureau. Vingt ans plus tard il sort du lycée Condorcet pour s’inscrire à la toute nouvelle faculté de Nanterre, alors perdue au milieu des bidonvilles. Il ne fréquentera les amphithéâtres que deux mois, préférant passer ses journées et ses nuits à la cinémathèque. En 1968, le voici troufion dans l’armée de l’air, et pour seize mois. Il sortira pour écrire un premier livre biscornu et servira de «rewriter» dans une maison d’édition.<br><br>En 1970, il se retrouve à la fondation du journal Actuel, avec Jean-François Bizot et Michel-Antoine Burnier. Il y restera quatorze ans et y usera les touches de sa machine à écrire Olivetti Lettera 32. Pendant cette période, avec son cousin Michel-Antoine Burnier, il va composer des parodies et des romans historiques (chez Grasset, qui obtiendront le prix Alexandre Dumas et le prix Lamartine).<br>Suivront une quarantaine de livres aux sujets variés, des parodies encore (notamment sous le nom de Marguerite Duraille) et des romans (chez Grasset toujours et chez André Balland).<br><br>En parallèle, avec Bernard Haller, il écrit des sketches et un spectacle représenté au théâtre national de Chaillot, «Fregoli», mis en scène et en couleurs vives par Jérôme Savary. Il a également travaillé à deux scénarios de Jean-Pierre Mocky, «Les saisons du plaisir» et «Une nuit à l’Assemblée».<br>En vingt-sept ans, pour lui ou pour les autres (car il a mené une copieuse activité de «Ghost writer», écrivain fantôme pour traduire avec plus d’élégance notre mot «nègre»), il a calculé avoir couvert plus de cent cinquante mille pages.",
        image: "patrick.jpg"
    }
];
// Affichage des cartes dans la page web :
var container = document.querySelector('.container');
juristes.forEach(juriste => {
    // Création des sections :
    var section = document.createElement('section');
    section.setAttribute('class', 'juree');
    // Création des container image et img :
    var containerImg = document.createElement('div');
    containerImg.setAttribute('class', 'container-img');
    var img = document.createElement('img');
    img.setAttribute('src', 'image/jury/'+juriste.image);
    img.setAttribute('alt', juriste.prenom+' '+juriste.nom);
    containerImg.appendChild(img);
    section.appendChild(containerImg);
    // Création des titres h3 :
    var h3 = document.createElement('h3');
    h3.innerHTML = juriste.prenom + ' ' + juriste.nom;
    section.appendChild(h3);
    // Création des paragraphes :
    var para = document.createElement('p');
    para.innerHTML = juriste.texte.substr(0, 75) + '...';
    section.appendChild(para);
    // Création des liens :
    var lien = document.createElement('a');
    lien.setAttribute('href', '#');
    lien.innerText = "Lire la suite";
    section.appendChild(lien);
    // Affichage des résultats :
    container.appendChild(section);
});

    // Création du slider :
    var arrowL = document.getElementById('arrow-left');
    var arrowR = document.getElementById('arrow-right');
    var ul = document.getElementById('slider');
    var current = 0;

    arrowR.addEventListener('click', function(){
        if(current < 8){
            ul.style.transform += 'translateX(-280px)';
            current++;
        }
    });
    arrowL.addEventListener('click', function(){
        if(current > 0){
            ul.style.transform += 'translateX(280px)';
            current--;
        }
    });