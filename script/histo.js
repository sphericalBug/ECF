// date au dessus du titre de la page :
var ul = document.querySelector('ul.date');
var years = [2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011];
years.forEach(function(year){
var li = document.createElement('li');
    li.setAttribute('class', 'year');
    li.innerHTML = year;
    ul.appendChild(li);
});
// remise des prix :
var container = document.getElementById('container-livre');
var listLi = ul.querySelectorAll('li');
var modal = document.getElementById('modal');
// table historique :
var histo = [];
    histo[2021] = [
        [
            "Meilleur roman français","Juste un fraisiers", "Amandine Laprun", "Que devient un petit fraisier à mesure que les mois se succèdent ? En l'observant, peint grandeur nature dans les pages de ce très grand album tout carton, le lecteur découvre en même temps que le héros Melvil tous les charmes d'un jardin au fil des saisons... Un beau livre au format étonnant, que l'on pourra poser au sol pour mieux l'explorer, et découvrir des merles aussi gros que ceux que l'on voit par la fenêtre, des papillons de la même taille que ceux que l'on essaye d'attraper entre les herbes, et des fraises aussi appétissantes...Une aventure à hauteur des yeux, comme si l'on jouait dans le jardin !", "image1.jpg"
        ],
        [
            "Meilleur roman étranger","Migrants", "Issa Watanabe", "Ils sont tous là, lion, toucan, cochon, éléphant, lapin, grenouille… tous différents mais tous avec un petit bagage à la main ou sur le dos. Dans la sombre forêt ils marchent. La Mort, joliment vêtue d’une cape fleurie, les suit, assise sur le dos d’un magnifique oiseau bleu. Compagne discrète, elle veille…Ils marchent tous ensemble, courbés par la fatigue et la tristesse. Parfois ils s’arrêtent pour dormir ou manger, assis en cercle. Et soudain, ils aperçoivent la mer… Tous se précipitent pour monter dans une barque bien fragile qui ne peut supporter tout ce poids et finit par craquer. La Mort attend le bon moment… Les illustrations aux couleurs énergiques et profondes, le fond noir des images et le choix d’animaux anthropomorphes donnent à cet album sans texte sur les migrants et les déracinés de tout pays, une force sourde, une dimension poli-tique bien plus percutante qu’un long discours.","image2.jpg"
        ],
        [
            "Meilleur documentaire","Quand les escargots vont au ciel", "Delphine Vallette & Pierre-Emmanuel Lyet", "Alice, Rachel et Amin jouent avec un escargot sur une aire de jeu. Malencontreusement, l'animal se fait écraser, les trois amis décident de l'enterrer. Mais Alice étant catholique, Rachel juive et Amin musulman, chacun a sa manière de rendre hommage aux défunts.","image3.jpg"
        ],
        [
            "Meilleur biographie","Alma1 - Le vent de lève", "Timothée de Fombelle", "1786. Le jour où son petit frère disparaît, Alma part sur ses traces, loin de sa famille et de la vallée d'Afrique qui les protégeait du reste du monde. Au même moment, dans le port de Lisbonne, Joseph Mars se glisse clandestinement à bord d'un navire de traite, La Douce Amélie. Il est à la recherche d'un immense trésor. Dans le tourbillon de l'Atlantique, entre l'Afrique, l'Europe et les Caraïbes, leurs quêtes et leurs destins les mènent irrésistiblement l'un vers l'autre.","image4.jpg"
        ]
    ];
    histo[2020] = [
        [
            "Meilleur roman français","Les Choses qui s'en vont", "Béatrice Alemagna", "« Dans la vie, beaucoup de choses se transforment et passent. Toutes sauf une. »Un album rare et sensible signé Beatrice Alemagna sur les mouvements de l'existence et le temps qui fait grandir, où les images changent lorsque l'on tourne de douces pages de calque.Livre offert aux bébés nés dans le Val-de-Marne en 2020.À partir de 3 ans","image5.jpg"
        ],
        [
            "Meilleur roman étranger","L'arrêt du cœur", "Agnès Debacker & Anaïs Brunet", "Depuis que Simone n'est plus là, Simon vient chaque jour dans la minuscule loge de Françoise, la concierge de son immeuble, pour boire un petit jus et, surtout, pour entendre l'histoire de Simone. Trois coups de sonnette, le murmure de la radio dans la cuisine, la tête de Simone dans son café au lait. Le cri de Françoise. Simone est morte d'un arrêt du coeur, et Simon, lui, a beaucoup de mal depuis avec son coeur en peine. Simon et Simone, c'était les deux faces d'une amitié folle, les gâteaux immangeables au gingembre, la bougie qui pète, les sauts endiablés sur les canapés et les danses à deux sur Hector la Pizza. Et aussi, leur objet magique : leur théière à voeux, remplie à ras bord de petits papiers. Alors, soudain, Simon se dit que cette théière peut faire beaucoup pour son âme triste. Il doit la récupérer chez Simone. Il doit lire tous les secrets écrits. Simon ne sait pas encore qu'une cuisine encombrée peut renfermer un grand et beau mystère.","image6.jpg"
        ],
        [
            "Meilleur documentaire","L’Estrange malaventure de Mirella", "Flore Vesco", "Moyen-Âge. Les rats ont envahi la paisible bourgade d’Hamelin. Vous croyez connaître cette histoire ? Vous savez qu’un joueur de flûte va arriver, noyer les rats en musique, puis les enfants d’Hamelin ? Oubliez ces sornettes. La véritable histoire est bien pire, et c’est grâce à Mirella, une jeune fille de quinze ans, qu’on l’a enfin compris. Cette crève la-faim a un don ignoré de tous : elle voit ce que personne d’autre ne voit. Par exemple, elle a repéré cet homme en noir qui murmure à l’oreille de ceux qui vont mourir de la peste… Et ça lui donne une sacrée longueur d’avance. Y compris sur le plus célèbre dératiseur de tous les temps.","image7.jpg" 
        ],
        [
            "Meilleur biographie","Dans Tous Les Sens", "Régis Lejonc & Philippe Nessmann", "En quoi consiste le métier de nez? Qui était Helen Keller ? Qu'est-ce qui, à l'intérieur de l'oreille, permet d'entendre ? Qu'est-ce que l'anosmie ? D'où vient la pêche Melba ? Dans ce documentaire richement illustré par Régis Lejonc, tous les secrets des cinq sens sont dévoilés aux petits curieux. Multiplicité des connaissances, des narrations et des techniques pour ce livre hors-norme, avec une dernière partie surprenante consacrée au 6ème sens. Au fil des pages, des interviews, des expressions en images, des explications scientifiques ou des anecdotes permettent de comprendre autrement le toucher, l'odorat, l'ouïe, la vue et le goût. Le lecteur pourra piocher dans cet ouvrage au gré de ses questions ou bien le dévorer du début à la fin ! Philippe Nessmann a toujours eu trois passions : les sciences, l'histoire et l'écriture. Aujourd'hui, il travaille uniquement pour l'édition jeunesse, mais toujours avec les sciences et l'histoire en toile de fond","image8.jpg"
        ]
    ];
    histo[2019] = [
        [
            "Meilleur roman Français","Milly Vodovic","Nastasia Rugani","Aujourd’hui, Milly a eu envie de mordre jusqu’au sang. Swan Cooper tirait des balles de revolver à deux pas de son frère Almaz, couché dans la boue. Alors Milly a foncé pour sauver son grand frère. Dans un élan bestial, elle a cassé le bras et le nez de Swan Cooper. Depuis, Almaz, vexé, ne lui parle plus, mais qu’importe. Milly Vodović peut tout faire désormais. Pourtant, des phénomènes étranges se produisent autour d’elle. Alors que la ville se recouvre de coccinelles, le Mange-cœurs approche. Mais Milly se répète que les monstres n’existent pas. L’histoire, elle, ne l’entend pas de la même manière.","image9.jpg","https://www.amazon.fr/Milly-Vodovic-Nastasia-Rugani/dp/2352893925"
        ],
        [
            "Meilleur roman étranger", "La légende de Podkin Le Brave1 - Naissance d'un chef", "Kieran Larwood", "Podkin est le fils d'un chef guerrier. Un jour, bien sûr, il lui faudra régner sur son clan et le préserver des dangers. Mais pour l'instant il préfère s'amuser en toute insouciance, taquinant sa soeur aînée, Paz, et jouant avec leur petit frère, Pook. Jusqu'à ce que son terrier soit attaqué par les Gorm, de redoutables lapins vêtus de métal. Podkin va devoir protéger les siens et découvrir son exceptionnelle destinée...","image10.jpg","https://www.amazon.fr/l%C3%A9gende-Podkin-Brave-1-Naissance-chef/dp/2075135827"
        ],
        [
            "Meilleur documentaire", "Duel au soleil", "Manuel Marsol", "Sous le soleil brûlant d’un désert du Far West, un virevoltant passe. Le décor se met en place : pieds nus, peau rouge et pantalon à franges versus santiags et bluejean ; arc à la flèche tendue versus revolver dégainé ; indien à couronne de plumes versus cow-boy au chapeau de cuir. Deux hommes, un duel, et le même air maussade et déterminé. Que le combat commence ! Les deux compères, séparés par une rivière, s’apprêtent à tirer. Mais d’innombrables contretemps viennent retarder le duel... Les heures passent, la nuit tombe. Finalement, le duel est remis au lendemain…","image11.jpg","https://www.amazon.fr/Duel-au-soleil-Manuel-Marsol/dp/B0788YKWY8"
        ],
        [
            "Meilleur biographie","Une super histoire de cow-boy","Delphine Perret","C’est l’histoire d’un cow-boy. Je l’ai remplacé par un singe, parce qu’on m’a dit qu’un cow-boy ça faisait trop peur avec ses dents cariées et son air mauvais. Son pistolet a été remplacé par une banane parce qu’un pistolet c’est trop dangereux. Ainsi commence cette super histoire de cow-boy : page de gauche, le texte, en grandes lettres capitales, raconte les frasques d’un cow-boy pas très commode, qui mange des bébés lapins, dit des gros mots et cambriole des banques. Mais comment illustrer ces scènes d’une violence inouie… ? Delphine Perret corrige donc le texte sur la page de droite, donnant ainsi vie à un singe qui se brosse les dents et fait des séances d’aérobics. Un rapport texte-image absolument hilarant pour ce petit livre détonant, qui tourne en dérision le politiquement correct. Les deux histoires qui se font face donnent lieu à des situations complètement absurdes dont les lecteurs, petits et grands, pourront se délecter.","image12.jpg","https://www.amazon.fr/super-histoire-cow-boy-Delphine-Perret/dp/236902092X"
        ]
    ];
    histo[2018] = [
        [
            "Meilleur roman Français", "Sirius", "Stéphane Servant","Alors que le monde se meurt, Avril, une jeune fille, tente tant bien que mal d'élever Kid. Entre leurs expéditions pour trouver de la nourriture et les leçons données au petit garçon, le temps s'écoule doucement... jusqu'au jour où le mystérieux passé d'Avril les jette brutalement sur la route. Il leur faut maintenant survivre sur une terre stérile pleine de dangers. Stéphane Servant, avec tout son talent de conteur, nous plonge dans un univers post-apocalyptique aussi fascinant que vénéneux. Une lecture addictive !","image13.jpg","https://www.amazon.fr/Sirius-St%C3%A9phane-Servant/dp/2812614331"
        ] ,
        [
            "Meilleur roman étranger", "Le Jardin Du Dedans-Dehors","Chiara Mezzalama","Il y avait un jardin. Un jardin tellement grand, un jardin sans fin. Un jardin sauvage qui avait été habité par des princes et des princesses. Des vrais, pas ceux des histoires inventées. Avant notre arrivée, le jardin avait été abandonné. Les princes et les princesses avaient été chassés, les grands portails de fer avaient été fermés. la ville où se trouvait ce jardin secret avait sombré dans la guerre, et plus personne n'avait entendu chanter les oiseaux ni l'eau des fontaines..","image14.jpg","https://www.amazon.fr/jardin-du-dedans-dehors-Chiara-Mezzalama/dp/2372730339"
        ],
        [
            "Meilleur documentaire","Coeur de bois","Henri Meunier","Aurore est une jeune femme équilibrée, attentive à elle-même et à ses enfants. Elle conduit sa vie avec assurance, comme sa voiture, qu'elle prend régulièrement pour effectuer des visites de courtoisie à un personnage solitaire, reclus dans sa maison au plus profond de la forêt: le loup. Cette histoire montre de façon lumineuse aux jeunes lecteurs qu'il est possible de devenir adulte, de dépasser le monde des passions, en apprivoisant le loup qui a pu un temps nous dévorer – et qui est autant en soi qu'en dehors de soi. Par les liens affectueux que l'on choisit d'entretenir avec lui plutôt qu'en le combattant, cet animal impétueux et vorace peut devenir un tendre et docile vieillard... Grâce à leur précision et à leur ambiance mystérieuse, les dessins servent à la fois le réalisme de l'histoire et les références au conte de fée.","image15.jpg","https://www.amazon.fr/Coeur-bois-R%C3%A9gis-Lejonc/dp/2970106892"
        ],
        [
            "Meilleur biographie","Pax et le petit soldat","Sara Pennypacker", "La guerre est imminente. Lorsque le père de Peter s'engage dans l'armée, il oblige son fils à abandonner Pax, le renard qu'il a élevé depuis le plus jeune âge et envoie le garçon vivre chez son grand-père à cinq cent kilomètres de là. Mais Peter s'enfuit à la recherche de son renard. Pendant ce temps, Pax affronte seul les dangers d'une nature sauvage et se trouve confronté à ceux de son espèce. Un garçon et son renard que la vie sépare, l'histoire d'une indéfectible amitié. Un roman d'aventures d'une intensité bouleversante. À partir de 10 ans.","image16.jpg","https://www.amazon.fr/Pax-petit-soldat-Sara-Pennypacker/dp/207066631X"
        ]
    ];
    histo[2017] = [
        [
            "Meilleur roman français","Sally Jones","Jakob Wegelius","Sally Jones est une gorille, très bonne mécanicienne sur le bateau du Chef. Lorsque celui-ci est accusé de meurtre, elle sait qu'il est innocent et se lance dans une enquête pour le prouver. Elle ne sait pas encore qu'elle devra faire le tour du monde pour qu'éclate la vérité. Un grand roman d'aventure illustré mené tambour battant.","image17.jpg","https://www.amazon.fr/Sally-Jones-Jakob-Wegelius/dp/2364749131"
        ],
        [
            "Meilleur roman étranger","Petite Pépite","Nada Matta","Petite Pépite met en scène un adulte qui cherche une robe, des chaussures, un jeu ou un livre pour une petite fille. À chaque fois, il lui faut expliquer qu’elle est différente, mais qu’elle n’est ni une extraterrestre, ni un lutin, ni une sirène. C’est presque une petite fée, car elle est un peu magique et qu’elle vit dans l’instant. Cette déclaration d’amour, c’est celle de Nada Matta à sa petite fille trisomique. Et elle nous entraîne, de page en page, par le biais de questions et réponses, à la découverte de cette différence incitant chacun à prendre le temps de découvrir et aimer. C’est aussi le livre d’une artiste qui a illustré son texte de magnifiques compositions graphiques, mêlant la nature libanaise à des portraits de son enfant, dans un seul et bel élan de création et d’amour.","image18.jpg","https://www.amazon.fr/Petite-p%C3%A9pite-Nada-Matta/dp/235289283X"
        ],
        [
            "Meilleur documentaire","Björn","Delphine Perret","Björn habite dans une caverne. Les parois sont toutes douces. Le sol est confortable. Et juste devant il y a de l’herbe tendre et un arbre rugueux, parfait pour se gratter le dos. Björn est un ours. Dans 6 histoires tendres et malicieuses, Delphine Perret nous emmène dans la forêt, auprès de Björn et ses amis. Là-bas, le quotidien est fait de siestes, de jeux empruntés aux humains, de cueillettes, et de parties de cartes. Dans une des histoires, Björn et ses amis décident d’organiser un carnaval et de se déguiser en humains… Dans une autre, nous les retrouvons en pleine visite médicale. Une des six histoires raconte l’amitié naissante entre Björn et une petite fille qui lui offre… une fourchette ! Delphine Perret se penche sur le charme des petites choses, avec une grande délicatesse et un humour pinçant. Avec un dessin au trait très épuré, elle nous offre une véritable ode à la nature et à la contemplation.","image19.jpg","https://www.amazon.fr/Bjorn-histoires-dours-Delphine-Perret/dp/2369020652"
        ],
        [
            "Meilleur biographie","Paul A Dit Tourne la page et découvre la suprise","Delphine Chedru","Paul a dit… Regarde ! Croque ! Pique ! L’enfant découvre la découpe d’un coquelicot qui, une fois la page tournée, se transforme… en papillon multicolore ! Et ainsi de suite, en passant par le crabe, la pomme, le chapeau melon, le hérisson et la bogue de marron ! Un livre-jeu aussi drôle que surprenant à manipuler, pour appréhender les formes : comme dans la nature, une forme peut toujours en cacher (ou en dévoiler) une autre…","image20.jpg","https://www.amazon.fr/Paul-dit-Tourne-d%C3%A9couvre-suprise/dp/2330066015"
        ]
    ];
    histo[2016] = [
        [
            "Meilleur roman français","Yasuke","Frédéric Marais","Frédéric Marais nous conte l'histoire vraie de Yasuke, un enfant noir né au pied du Kilimandjaro, un enfant sans nom, isolé, vivant avec les animaux, marqué comme eux. Un jour, il part à la recherche d'un nom. Il marche, rencontre la mer, un bateau sur lequel il travaille, navigue des années, mais il n'a toujours pas de nom. Et puis le bateau arrive dans un pays inconnu. L’équipage débarque et tous sont emmenés auprès du puissant et redouté seigneur Oda Nabunaga qui n'a jamais vu d'homme noir. Il est impressionné par les qualités physiques du garçon et le prend sous sa protection, le confiant à un maître d'armes. Le garçon sans nom devient un combattant redouté, fidèle au seigneur qui le nommera samouraï. Il prendra alors comme nom Yasuke. C'est ainsi qu'un esclave venu d'Afrique devint samouraï, le seul samouraï noir. Ocres, noirs, bleus éclairés de blanc donnent force à cet album, avec quelques clins d’œil à Hokusaï. Magnifique.","image21.jpg","https://www.amazon.fr/Yasuke-Fr%C3%A9d%C3%A9ric-Marais/dp/2369020415"
        ],
        [
            "Meilleur roman étranger","Le mystère de Lucy Lost","Michael Morpurgo","Mai 1915. Sur une île déserte de l'archipel des Scilly, un pêcheur et son fils découvrent une jeune fille blessée et hagarde, à moitié morte de faim et de soif. Elle ne parvient à prononcer qu'un seul mot : Lucy. D'où vient-elle ? Est-elle une sirène, ou plutôt, comme le laisse entendre la rumeur, une espionne au service des Allemands ? De l'autre côté de l'Atlantique, le Lusitania, l'un des plus rapides et splendides paquebots de son temps, quitte le port de New York. À son bord, la jeune Merry, accompagnée de sa mère, s'apprête à rejoindre son père blessé sur le front et hospitalisé en Angleterre...Un grand roman, chargé de souffle et d'émotion, à lire dès 11 ans.","image22.jpg","https://www.amazon.fr/myst%C3%A8re-Lucy-Lost-Michael-Morpurgo/dp/2070664201"
        ],
        [
            "Meilleur documentaire","L'Arbragan","Jacques Goldstyn","Ça commence avec la perte d'un gant: celui d'un petit gars original et solitaire qui trouve refuge dans un vieux chêne nommé Bertold. Le lien entre l'enfant et l'arbre est si fort que l'illustrateur l'a affublé d'un béret en forme de gland. De son poste d'observation, ce gamin domine son village et ses habitants qu'il dépeint de façon savoureuse tout en posant un regard avisé et tendre sur la nature qui l'environne. Mais alors que le printemps a redonné aux arbres leurs feuilles, celles de Bertold se font attendre. Que faire quand un arbre, son arbre, meurt...? La réponse est à lire dans cet album, mais sachez d'ores et déjà que le gant de départ aura son importance, grâce à l'imagination géniale et émouvante de ce gamin. À l'instar de son personnage, L'Arbragan est un ouvrage qui nous fait prendre de la hauteur. Il nous offre, avec beaucoup de poésie et de tendresse tant dans l'illustration magnifique que dans le texte, de nouvelles perspectives sur des thèmes forts: la différence, la solitude, la mort, le temps qui passe… Superbe!","image23.jpg","https://www.amazon.fr/LArbragan-Jacques-Goldstyn/dp/2923841700"
        ],
        [
            "Meilleur biographie", "Pomme Pomme Pomme","Corinne Dreyfuss", "C'est l'histoire d'une belle pomme rouge dans un pommier. Une pomme toute simple, qui tombe de l'arbre, «poum poum poum Tombée», se fait croquer par un gourmand qui confiera le trognon et sa graine à la pluie. Mais qui sait? Il se peut que d'une petite graine ainsi abandonnée se perpétue le cycle de la nature… Avec un graphisme épuré et très contrasté, cet album magnifique est idéal pour les tout-petits. Une histoire, presque une comptine, à relire encore et encore pour s'amuser à jouer avec les sons, pour ravir les petites oreilles et leur faire découvrir la musique des mots.","image24.jpg","https://www.amazon.fr/Pomme-pomme-Corinne-Dreyfuss/dp/2364747309"
        ]
    ];
    histo[2015] = [
        [
            "Meilleur roman français","Le ciel nous appartient","Katherine Rundell","Sophie a été trouvé bébé dans un violoncelle, flottant sur la Manche. Recueillie par Charles Maxim, un être érudit et fantasque qui parle anglais aux personnes, français aux chats et latin aux oiseaux, elle va grandir à ses côtés et bénéficier d’une éducation décalée mais tellement riche de découvertes et de libertés. Nous sommes au XIXe siècle, les services d’aide à l’enfance ne voient pas ces méthodes d’un très bon œil et dès les douze ans de Sophie, ils décident de reprendre en main son éducation. Le choix sera alors celui de la fuite. Une fuite vers Paris à la recherche de sa mère musicienne. Pour savourer toute la douceur et la sensibilité de ce roman de Katherine Rundell, nous vous recommandons d’accompagner la lecture du Requiem de Gabriel Fauré. C’est ce morceau et le violoncelle qui tiennent lieu de cordon ombilical entre Sophie et sa maman. Cette quête maternelle et musicale va se faire sur les toits de Paris et donner au roman toute sa hauteur et sa poésie. Un très beau roman qui porte sur l’enfance un regard doux et humaniste.","image25.jpg","https://www.amazon.fr/ciel-nous-appartient-Katherine-Rundell/dp/2361932660"
        ],
        [
            "Meilleur roman étranger","Le passage du diable","Anne Fine","Depuis son plus jeune âge, Daniel vit seul avec sa mère, reclus dans leur immense maison, car elle n'a cessé de lui répéter qu'il est gravement malade et que le contact avec le monde extérieur lui serait fatal. Il grandit au milieu des livres avec pour seule compagnie les personnages d'une extraordinaire maison de poupée, reproduction exacte de celle que sa mère aurait habitée autrefois. Un jour pourtant, des voisins découvrent son existence et sa vie bascule: il est enlevé brutalement à sa mère et recueilli par la famille d'un médecin. Il y grandit chaleureusement entouré et ne revoit plus sa mère placée en hôpital psychiatrique. Mais le suicide de cette dernière va l'obliger à retrouver les origines familiales dont il ignore tout. Que va-t-il découvrir dans le manoir de son oncle, dont la réplique minutieuse avait pris une telle place dans ses jeux d'enfants?","image26.jpg","https://www.amazon.fr/passage-du-diable-Anne-Fine/dp/2211222609/ref=sr_1_1?adgrpid=578327449&hvadid=80470539726233&hvbmt=be&hvdev=c&hvlocint=7957&hvlocphy=66&hvnetw=s&hvqmt=e&hvtargid=kwd-17259486731%3Aloc-66&keywords=le+passage+du+diable+anne+fine&qid=1642693029&sr=8-1"
        ],
        [
            "Meilleur documentaire","Le chien que Nino n'avait pas","Edward Van de Vendel","Edward van de Vendel fait son entrée au catalogue des éditions Didier Jeunesse en compagnie du jeune et talentueux Anton Hertbruggen avec ce magnifique album, Le Chien que Nino n'avait pas. Nino vit dans une maison, aux larges baies vitrées ouvertes sur la forêt avoisinante. Lorsqu'il joue, rend visite à sa grand­-mère et même lorsqu'il pleure, Nino est accompagné de son chien, celui qu'il n'a pas. Ensemble, ils font tout et ce chien qu'il n'a pas est pour Nino un véritable ami. Mais un jour, il disparaît et un autre chien arrive. Un que Nino n'est plus seul à voir, un chien différent, mais ce n'est pas grave puisqu'il y a encore de la place dans les rêves de Nino pour de nombreux animaux extraordinaires. Edward Van de Vendel a écrit un texte simple, sobre, qui laisse le champ libre aux pinceaux d'Anton Hertbruggen. Ce sont les couleurs qui frappent d'abord. ","image27.jpg","https://www.amazon.fr/Chien-que-Nino-navait-pas/dp/2278077899"
        ],
        [
            "Meilleur biographie", "Nous, notre histoire","Yvan Pommaux", "Un livre magnifique, une merveille, un chef-d'œuvre. Un vrai ! Le mot est si souvent galvaudé. Dans Nous, notre histoire, Yvan Pommaux raconte notre histoire, celle des hommes, des femmes et des enfants qui peuplent la terre depuis 150000 ans. C'est une histoire qui n'a pas de début (nous ne le connaissons pas) et pas de fin (nous ne la connaîtrons pas). En dépit des guerres qui nous ont opposés, nous avons inventé, travaillé, créé et transformé le monde. Nous nous sommes amusés. Nous avons fraternisé... Cet album permet d'observer ce que nous avons vécu durant tout ce temps. ","image28.jpg","https://www.amazon.fr/Nous-notre-Histoire-Yvan-Pommaux/dp/221122038X"
        ]
    ];
    histo[2014] = [
        [
            "Meilleur roman français","La petite fille en rouge","Aaron Frisch & Roberto Innocenti","Sophia demeure avec sa mère et sa sœur près d'une forêt de béton et de briques : une ville moderne. Pour aller voir sa mamie, de l'autre coté de la forêt, elle doit traverser «le Bois», un endroit magique (un centre commercial) où l'on peut se procurer tout ce dont on rêve. Mais, étourdie par les couleurs et le bruit, elle perd son chemin. Un chasseur souriant se présente, chevauchant une moto noire. Sophia lui parle de sa grand-mère dans sa petite maison... Sur la voie rapide, le chasseur quitte Sophia, prend un raccourci et arrive le premier chez la grand-mère.Imaginez la suite...","image29.jpg","https://www.amazon.fr/petite-fille-en-rouge/dp/2070650634"
        ],
        [
            "Meilleur roman étranger","Calpurnia","Jacqueline Kelly","Calpurnia Tate a onze ans. Dans la chaleur de l'été, elle s'interroge sur le comportement des animaux autour d'elle. Elle étudie les sauterelles, les lucioles, les fourmis, les opossums. Aidée de son grand-père, un naturaliste fantasque et imprévisible, elle note dans son carnet d'observation tout ce qu'elle voit et se pose mille questions. Pourquoi, par exemple, les chiens ont-ils des sourcils ? Comment se fait-il que les grandes sauterelles soient jaunes, et les petites, vertes ? Et à quoi sert une bibliothèque si on n'y prête pas de livres ? On est dans le comté de Caldwell, au Texas, en 1899. Tout en développant son esprit scientifique, Calpurnia partage avec son grand-père les enthousiasmes et les doutes quant à ses découvertes, elle affirme sa personnalité au milieu de ses six frères et se confronte aux difficultés d'être une jeune fille à l'aube du XXe siècle. Apprendre la cuisine, la couture et les bonnes manières, comme il se doit, ou se laisser porter par sa curiosité insatiable ? Et si la science pouvait ouvrir un chemin vers la liberté ?","image30.jpg","https://www.amazon.fr/Calpurnia-Jacqueline-Kelly/dp/221120533X"
        ],
        [
            "Meilleur documentaire","C'est ta vie ! / l'encyclopédie qui parle d'amitié, d'amour et de sexe aux enfants","Thierry Lenain","“Voilà. Que tu sois fille ou garçon, enfant adopté ou pas, que tu sois ici ou de l’autre côté de la Terre, tu es né-e de la rencontre de la cellule de vie d’un homme et de la cellule de vie d’une femme. Peut-être qu’avant de te faire, cette femme et cet homme avaient déjà parlé de toi, ou peut-être pas. Peut-être qu’ils se sont connus juste le temps de cette rencontre, ou peut-être qu’ils se sont aimés plus longtemps. Peut-être qu’ils s’aiment encore aujourd’hui, ou peut-être pas. Depuis, tu vis toujours avec ces parents, ou seulement avec l’un d’eux, ou peut-être avec d’autres parents. C’est ton histoire, ton histoire à toi. Elle t’appartient.”","image31.jpg","https://www.amazon.fr/Cest-vie-Lencyclop%C3%A9die-damiti%C3%A9-enfants/dp/B00AKXBTB6"
        ],
        [
            "Meilleur biographie", "Il était une fois...Contes en haïku","Agnès Domergue", "Vingt contes se cachent derrière les lignes de ces haïkus magnifiquement illustrés par Cécile Hudrisier. Un livre de poésie ludique.","image32.jpg","https://www.amazon.fr/%C3%A9tait-une-fois-Contes-ha%C3%AFku/dp/2364742153"
        ]
    ];
    histo[2013] = [
        [
            "Meilleur roman français","La maison en petit cube","Kenya Hirata","Dans une ville entièrement immergée, un vieux monsieur résiste encore et toujours à la montée du niveau de la mer. Chaque fois que l'eau atteint son plancher, il est obligé de bâtir une nouvelle maison par-dessus la précédente, si bien qu'au fil du temps son logis a fini par ressembler à une immense pile de petits cubes. Un jour, alors qu'il s'est encore une fois lancé dans la construction d'une nouvelle demeure, ses outils tombent tout au fond de l'eau. Il enfile sa combinaison pour aller les repêcher, et au fur et à mesure qu'il descend à travers ses anciennes maisons, de lointains souvenirs lui reviennent en mémoire... Découvrez le sublime livre créé par les auteurs du film La maison en petits cubes, récompensé dans les festivals du monde entier, notamment par le prestigieux Oscar du meilleur court-métrage d'animation.","image33.jpg","https://www.amazon.fr/Maison-petits-cubes-Kenya-Hirata/dp/2918857122"
        ],
        [
            "Meilleur roman étranger","Émile est invisible","Vincent Cuvellier","C'est décidé. Aujourd'hui, Émile est invisible. À midi, plus personne ne pourra le voir ! Pourquoi à midi ? Parce qu'à midi, maman aura cuisiné des endives. Des endives ! Mais c'est horrible, les endives ! De toute façon, ça fait longtemps qu'Émile avait envie d'être invisible, alors...","image34.jpg","https://www.amazon.fr/%C3%89mile-est-invisible-Vincent-Cuvellier/dp/2070644251"
        ],
        [
            "Meilleur documentaire","Black-out","Hugues Micol & Loo Hui Phang","Maximus Wyld connut son heure de gloire dans le Hollywood des années 1940-50. Métis de descendance noire, chinoise et amérindienne, il fut l'acteur aux mille visages , interprétant essentiellement des rôles «ethniques : chef indien, révolutionnaire mexicain, dandy oriental… Véritable relecture du mythe du cinéma américain par le prisme des minorités, Black-out donne à voir la dimension politique et sociale des productions hollywoodiennes. » Maximus Ohanzee Wildhorse, rebaptisé «Maximus Wyld» par Hollywood, était un comédien talentueux, prisé, admiré. Sa filmographie est une anthologie du cinéma : Vertigo, le Faucon maltais, Sunset Boulevard, la Prisonnière du désert, Rebecca… Visage cuivré, beauté inédite et présence animale, il ouvrit la voie aux stars « de couleur » dans un climat égrégationniste. Après lui, Sydney Poitier, Harry Belafonte, Yul Brynner, ont pu accéder au rang de stars. Son charisme a enflammé le cinéma blanc, l'a dévergondé, fait vaciller son hégémonie raciale. Maximus Wyld était un pionnier. Pourtant, aucun générique ne mentionne son nom. Sur le celluloïd, nulle empreinte de son visage. Maximus le précurseur repose dans le cimetière des amnésies hollywoodiennes. Quel évènement l'a poussé dans les limbes ? Quelle force occulte et supérieure a remisé sa carrière dans un triangle des Bermudes cinématographique","image35.jpg","https://www.amazon.fr/Black-out-Hugues-Micol/dp/2754828044"
        ],
        [
            "Meilleur biographie", "Max","Sarah Cohen-Scali", "19 avril 1936. Bientôt minuit. Je vais naître dans une minute exactement. Je vais voir le jour le 20 avril. Date anniversaire de notre Fürher. Je serai ainsi béni des dieux germaniques et l'on verra en moi le premier-né de la race suprême. La race aryenne. Celle qui désormais régnera en maître sur le monde. Je suis l'enfant du futur. Conçu sans amour. Sans Dieu. Sans loi. Sans rien d'autre que la force et la rage. Je mordrai au lieu de téter. Je hurlerai au lieu de gazouiller. Je haïrai au lieu d'aimer. Heil Hitler !»Max est le prototype parfait du programme «Lebensborn» initié par Himmler. Des femmes sélectionnées par les nazis mettent au monde de purs représentants de la race aryenne, jeunesse idéale destinée à régénérer l'Allemagne puis l'Europe occupée par le Reich. Une fable historique fascinante et glaçante. Une lecture choc renarquablement documentée.","image36.jpg","https://www.amazon.fr/Max-Sarah-Cohen-Scali/dp/2070643891"
        ]
    ];
    histo[2012] = [
        [
            "Meilleur roman français","De quelle couleur est le vent ?","Anne Herbauts","Un petit géant aveugle se demande quelle est la couleur du vent, et s'en va poser la question à tous ceux qui croisent son chemin. Cet album comprend des effets tactiles et porte une inscription en braille sur la couverture.","image37.jpg","https://www.amazon.fr/quelle-couleur-est-vent/dp/2203020164/ref=sr_1_1?adgrpid=64705499508&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4pGT3qijTXNt5eA9zNP0mlGnuS3Qq1M8kab7UptO1BZMLXu0NYl094aAvr4EALw_wcB&hvadid=275596533034&hvdev=c&hvlocphy=9055574&hvnetw=g&hvqmt=e&hvrand=14291068527321012485&hvtargid=kwd-313189101565&hydadcr=10432_1791849&keywords=de+quelle+couleur+est+le+vent&qid=1642692384&sr=8-1"
        ],
        [
            "Meilleur roman étranger","L'Enfant","Jules Vallès","Jacques Vingtras est un enfant du XIXe siècle. Fougueux et turbulent, il est souvent malheureux au collège et parfois incompris par ses parents. Le récit de sa vie est fait de moments tristes mais aussi d'épisodes tendres et cocasses car, même dans le malheur,le narrateur ne perd jamais son sens de l'humour.","image38.jpg","https://www.amazon.fr/LEnfant-Jules-Vall%C3%A8s/dp/2253002917"
        ],
        [
            "Meilleur documentaire","mandela et nelson","Hermann Schulz","Plus que trois jours avant le match contre les Allemands. C'est la première fois que l'équipe de foot de Bagamoyo, Tanzanie, va rencontrer une équipe européenne, avec des maillots et tout le grand jeu. En tant que capitaine, Nelson doit encore remettre le terrain en état, trouver des filets pour les buts et réunir tous les joueurs. Parmi eux, il y a Mandela, sa soeur jumelle, imbattable en défense. Leur père les a ainsi baptisés car ils sont nés le 9 mai 1994, le jour où Nelson Mandela est devenu le premier président noir d'Afrique du Sud. Mandela est très différente de Nelson. Elle se mêle toujours de tout et se bagarre à la moindre occasion. Mais dès qu'il est question de football, Nelson peut compter sur elle.","image39.jpg","https://www.amazon.fr/Mandela-Nelson-Hermann-Schulz/dp/2211204414"
        ],
        [
            "Meilleur biographie", "L'innocent de Palerme","Silvana Gandolfi", "Palerme, en Sicile. Unique survivant d'un règlement de comptes mafieux, Santino est un précieux témoin pour la justice. Mais à sept ans la loi du silence pèse déjà sur ses frêles épaules.Livourne, sur le continent. Lucio, onze ons, est l'homme de la famille. Partagé entre la responsabilité de sa petite soeur et de rares moments de liberté sur son Optimist, il semble porter l'empreinte d'un sombre passé. Mais quel fil invisible relie ces deux vies ? Inspiré de faits réels, ce Gomorra pour les jeunes lève le voile sur le mythe de la mafia. Un récit poignant, au suspense haletant servi par la plume d'une grand auteur italien.","image40.jpg","https://www.amazon.fr/Linnocent-Palerme-Silvana-Gandolfi/dp/2070659003"
        ]
    ];
    histo[2011] = [
        [
            "Meilleur roman français","Les Oiseaux en BD","Jean-Luc GARRÉRA","Ils sont partout autour de nous, dans les airs, nos arbres, nos jardins. Ils ont même envahi notre langage quotidien : bavard comme une pie, cervelle de moineau, gai comme un pinson... Mais savez-vous différencier un manchot d’un pingouin, une chouette d’un hibou ou une mouette et d’un goéland ? Savez-vous que le casoar à casque est l’oiseau le plus dangereux du monde ? Qu’ils soient migrateurs, pêcheurs, chasseurs, avec cet album entre humour et vérité scientifique, vous saurez enfin tout ce que vous rêvez savoir sur nos amis à plumes.","image41.jpg","https://www.amazon.fr/Oiseaux-en-bd-1-ebook/dp/B08C6CXBP3"
        ],
        [
            "Meilleur roman étranger","Oko - Un thé en hiver","Mélanie Rutten","C’est l’hiver. Madeleine la vieille cigale du village meurt de vieillesse. Öko, Mitsu, Eliott et les autres se réunissent pour un dernier au revoir à celle qui était un peu la grand-mère de tous. On parle de Madeleine, mais aussi de cet étrange personnage qui erre dans la forêt, un yéti qui ferait des bruits bizarre… Après Mitsu, c’est au tour d’Öko d’être au cœur d’une histoire tendre dans laquelle il se confronte à la mort, au sens de la vie, à l’amour naissant, à l’amitié mais aussi aux préjugés d’un village pour ce qui lui est étranger. Le tome hivernal de la tétralogie qui a révélé Mélanie Rutten.","image42.jpg","https://www.amazon.fr/%C3%96ko-th%C3%A9-hiver-M%C3%A9lanie-Rutten/dp/2352890861"
        ],
        [
            "Meilleur documentaire","Sauvage ?","Alexandre Galand","Le mot sauvage, du latin silvaticus (qui est relatif à la forêt, au bois), sert depuis des siècles à désigner quantité de lieux en marge de la civilisation, soi-disant peuplés par des êtres parfois eux-mêmes qualifiés de sauvages, êtres légendaires ou bien réels. L'Occident a longtemps eu besoin de ces figures comme repoussoirs, pour se construire et se définir en opposition à ce qui serait chaotique, dangereux, imprévisible, incontrôlable. Pourtant, le sauvage n'existe pas en soi. Il est toujours lié à un regard. A notre époque, l'usage de ce mot reste problématique et son sens tantôt négatif, tantôt positif. Il sert encore, comme dans les pires moments de l'histoire de la colonisation et du racisme, à désigner des personnes, à les repousser derrière des frontières, à les déshumaniser. Ces dernières décennies, dans le contexte des crises écologiques, le « sauvage » correspond à ce qui résiste à l’empreinte grandissante de l’humanité, ce qui devient rare, ce qu’il faut protéger à tout prix.","image43.jpg","https://www.amazon.fr/Sauvage-Alexandre-Galand/dp/B096VSPJTK/ref=sr_1_13?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=O6VP1OV0IW0S&keywords=sauvage%3F+alexandre&qid=1642691823&s=books&sprefix=sauvage+alexandre%2Cstripbooks%2C63&sr=1-13"
        ],
        [
            "Meilleur biographie", "Cascades et gaufres à gogo","Maria Parr", "Léna, la meilleure amie de Trille, vit seule avec sa mère. Les deux enfants sont absolument inséparables et débordent d'idée et d'énergie pour inventer les meilleurs jeux, qui se transforment bien souvent en pires bêtises. Mais la vie risque de les séparer quand la maman de Léna rencontre quelqu'un...","image44.jpg","https://www.amazon.fr/Cascades-gaufres-gogo-Maria-Parr/dp/2844207235"
        ]
    ];
for(var i = 0; i < listLi.length; i++){
    listLi[i].addEventListener('click', function(e){
        container.style.display = 'block';
        // Création de la date :
        var date = document.createElement('h2');
        date.setAttribute('class', 'year');
        date.innerText = e.target.textContent;
        container.appendChild(date);
        // Création des quatres articles :
        for(var j = 0; j < 4; j++){
            var article = document.createElement('article');
            // Création du prix :
            var titre = document.createElement('h2');
            titre.setAttribute('class', 'prix');
            titre.innerHTML = histo[e.target.textContent][j][0];
            article.appendChild(titre);
            // Création du livre :
            var livre = document.createElement('h3');
            livre.setAttribute('class', 'titre');
            livre.innerHTML = histo[e.target.textContent][j][1];
            article.appendChild(livre);
            // Création de l'auteur :
            var auteur = document.createElement('span');
            auteur.setAttribute('class', 'auteur');
            auteur.innerHTML = histo[e.target.textContent][j][2];
            article.appendChild(auteur);
            // Création du résumé :
            var resume = document.createElement('p');
            resume.setAttribute('class', 'resume');
            resume.innerHTML = histo[e.target.textContent][j][3].substr(0, 120) + '...';
            article.appendChild(resume);
            // Création du lien :
            var link = document.createElement('a');
            link.setAttribute('href', '#modal');
            link.setAttribute('name', j);
            link.setAttribute('id', date.innerText);
            link.innerHTML = "Lire la suite";
            article.appendChild(link);
            // Affichage des quatres articles :
            container.appendChild(article);
        }
        // Modal :
        var links = container.querySelectorAll('.resume + a');
        // var close = modal.querySelector('#modal a');
        for(var a = 0; a < links.length; a++){
            links[a].addEventListener('click', function(e){
                //Création image :
                var vignette = document.createElement('img');
                vignette.setAttribute('src', 'image/sorciere/grandF/'+histo[this.id][this.name][4]);
                vignette.setAttribute('class', 'img-modal');
                modal.insertBefore(vignette, modal.childNodes[0]);
                // Création du titre :
                var titreH2 = document.createElement('h2');
                titreH2.innerHTML = histo[this.id][this.name][1];
                modal.insertBefore(titreH2, modal.childNodes[1]);
                // Création de l'auteur :
                var auteurSpan = document.createElement('span');
                auteurSpan.innerHTML = histo[this.id][this.name][2];
                modal.insertBefore(auteurSpan, modal.childNodes[2]);
                // Création du résumé :
                var resumeP = document.createElement('p');
                resumeP.innerHTML = histo[this.id][this.name][3].substr(0,600) + '...';
                modal.insertBefore(resumeP, modal.childNodes[3]);
                // Création du bouton pour acheter :
                var buy = document.createElement('a');
                buy.setAttribute('href', histo[this.id][this.name][5]);
                buy.setAttribute('class', 'buy');
                buy.setAttribute('target', '_blank');
                buy.innerHTML = "Acheter";
                modal.insertBefore(buy, modal.childNodes[4]);
                // Efface le tout dans la modal :
                    if(modal.childNodes.length == 13){
                        modal.removeChild(modal.childNodes[9]);
                        modal.removeChild(modal.childNodes[8]);
                        modal.removeChild(modal.childNodes[7]);
                        modal.removeChild(modal.childNodes[6]);
                        modal.removeChild(modal.childNodes[5]);
                    }
            });
        }
        // Effacer le tout dans le container :
        if(container.childNodes.length > 8){
            for(var k = 0; k < container.childNodes.length ; k++){
                container.removeChild(container.firstChild);
            }
        }
    });
};