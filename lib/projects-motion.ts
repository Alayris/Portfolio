export interface ProjectMotion {
  slug: string;
  title: string;
  year: string;
  type: string;
  tags: string[];
  description: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  youtubeId?: string;
  prototypeUrl?: string;
  guidelinesUrl?: string;
  links?: { label: string; href: string }[];
  images: string[];
  images2?: string[];
  images3?: string[];
  images4?: string[];
  images5?: string[];
  cover: string;
  size: "featured" | "large" | "small";
}

export const projectsMotion: ProjectMotion[] = [
  {
    slug: "repli",
    title: "Repli",
    year: "2026",
    type: "Mémoire · Motion · Branding · Éditorial · Print",
    tags: ["Motion design", "Branding", "Éditorial", "Print"],
    description: "Comment parler de vêtements sans parler d'images ? Comment parler d'images sans parler de désirs ? Et comment parler de désirs sans aborder les systèmes qui les façonnent ? Ce sont les questions que je me suis posée lors de l'écriture de mon mémoire. Je vous présente le plus gros projet sur lequel j'ai travaillé à ce jour, ou du moins le plus complet. REPLI est né d'observations de mon entourage vis-à-vis de notre rapport à la consommation vestimentaire, que ce soit pour ceux qui consomment en fast fashion, en seconde-main, sur vinted ou ceux qui réduisent cette consommation au strict nécessaire… À l'heure où la crise climatique devient une urgence planétaire et où les industries cherchent à verdir leur image sans toujours transformer leurs pratiques, la mode occupe une place centrale dans nos vies quotidiennes, mais aussi dans les dérives systémiques. j'ai constaté des paradoxes et des dissonances cognitives dans nos manières de faire, mon mémoire s'est donc porté sur la question : « Quelle solution de design mettre en place pour que la seconde main ne devienne pas le prolongement de la surconsommation et la transformation de ses pratiques ? »\n\nMon mémoire de recherche explore les comportements d'achat des jeunes consommateurs lorsqu'il s'agit de seconde main. À travers une approche mêlant sociologie, design et expérience utilisateur, j'ai étudié les motivations, les freins et les paradoxes qui entourent la consommation textile. L'enquête s'appuie sur un questionnaire, des outils de recherche UX et plusieurs références en sciences sociales pour comprendre comment l'histoire, notre système mais aussi les réseaux sociaux, les plateformes numériques et les logiques algorithmiques influencent nos habitudes vestimentaires. Si la seconde main représente une alternative aux modèles traditionnels de la fast fashion, elle peut également encourager des achats impulsifs, des renouvellements fréquents de garde-robe et une accumulation constante de vêtements.\n\nCe travail de recherche constitue le socle de REPLI, un projet de design qui cherche à moins culpabiliser notre individualité mais bien un système, et surtout à rendre visibles les mécanismes souvent invisibles de notre consommation textile.\n\nJe vais vous spoiler la réponse à ma grande problématique, je suis convaincue que la meilleure manière d'éviter les dérives de la consommation textile, c'est avant tout de savoir, d'apprendre, de conscientiser et enfin d'agir collectivement. C'est pourquoi ce projet existe, ce n'est probablement pas une solution miracle, néanmoins c'est une solution de REPLI.",
    description2: "Comment parler de l'impact environnemental de nos vêtements sans tomber dans un discours moralisateur déjà-vu ou saturé de chiffres pas très significatifs ?\n\nPour répondre à cette question, j'ai imaginé une série de vidéos courtes en motion design au sein du projet REPLI. Pour la première saison, je me suis dit qu'il serait pertinent de s'intéresser aux matières, puisqu'elles composent tous nos vêtements et que l'on en sait pas assez sur la manière dont elles sont conçues. Le premier prototype est consacré au denim, autrement dit le jean, une pièce universelle dont le parcours révèle la complexité de l'industrie textile : culture du coton, fabrication du denim, teinture, transport, usage et fin de vie.\nL'objectif n'est pas seulement d'informer, mais de raconter l'histoire cachée derrière les vêtements que nous portons chaque jour, avec un peu d'humour et un discours assumé. À travers une narration accessible, un langage visuel dynamique et des formats adaptés aux réseaux sociaux pour capter l'attention, ces vidéos cherchent à transformer des données souvent abstraites en récits compréhensibles et mémorables. Mon objectif n'est pas nécessairement que les gens restent sur la vidéo, se confronter à ses contradictions peut parfois être difficile (je le dis pour en avoir fait l'expérience) et que le discours peut parfois sembler culpabilisant; mais même une minute d'informations peut faire son bout de chemin et peut-être que la prochaine fois la personne y réfléchira à deux fois avant d'acheter un jean neuf.\n\nCette série constitue la dimension pédagogique de REPLI : donner de l'information, des clés de compréhension et des leviers de réflexions pour mieux saisir les enjeux environnementaux du textile.",
    images: [
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983328/portfolio/images/motion/REPLI/1_yr9ecn.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983330/portfolio/images/motion/REPLI/2_f8g9go.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973095/portfolio/images/motion/REPLI/3_ucky4q.png",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973127/portfolio/images/motion/REPLI/4_dbywqv.mov",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983364/portfolio/images/motion/REPLI/5_i72bez.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973152/portfolio/images/motion/REPLI/6_efykua.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983369/portfolio/images/motion/REPLI/7_hzluqq.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973155/portfolio/images/motion/REPLI/8_xzruyu.jpg",
    ],

    youtubeId: "nFlfu_UMK5E",
    prototypeUrl: "https://www.figma.com/proto/3dmH8AkxNAzqmn3HufQxXY/Repli?node-id=2-2&starting-point-node-id=2%3A2",
    guidelinesUrl: "https://www.figma.com/proto/8LMe4nItgUrsigmaMrVqnw/Brand-Guidelines-Repli?node-id=5-124&p=f&t=XzxgZ47ralnnCboJ-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
    description4: "Le jean est partout. C'est l'un des vêtements les plus portés au monde, au point qu'il est devenu presque invisible dans notre quotidien.\nCe premier épisode pilote de REPLI s'intéresse au parcours du jean, de la culture du coton à son arrivée dans nos garde-robes. À travers un format dynamique en motion design pensé pour les réseaux sociaux, la vidéo explore les différentes étapes de sa fabrication.\nCet épisode constitue également le point de départ d'une réflexion plus large menée dans le cadre de mon projet de recherche-création REPLI.\nLe jean s'est imposé comme une évidence pour ouvrir cette série, mondial et intemporel, il représente à lui seul les paradoxes de l'industrie textile contemporaine, un vêtement du quotidien dont le parcours traverse des milliers de kilomètres et mobilise d'importantes ressources avant d'arriver jusqu'à nous.\nREPLI est une invitation à regarder nos vêtements autrement, comme le résultat d'une chaîne de production, de choix économiques, de ressources naturelles exploitées, d'éthique bafouée et de comportements que nous pouvons apprendre à questionner.",
    description3: "J'ai essayé de penser REPLI dans sa globalité, et j'ai voulu qu'on ne se limite pas à un écran, alors on se replie aussi sur le papier.\nLe projet se déploie également à travers une série de supports imprimés : affiches, cartes informatives, fanzines et objets éditoriaux conçus comme des outils accessibles.\nCes formats permettent d'explorer ces sujets là où ils vont être le plus pertinents, dans des friperies, des librairies, des lieux engagés, des assos, des expos… Là où les contenus numériques sont souvent consommés rapidement, les supports imprimés invitent à être conservés (comme nos vêtements ;)) ralentir, observer, et approfondir de manière plus durable.\nLes affiches synthétisent des données clés sur l'industrie textile et ses impacts. Les cartes proposent des informations courtes et accessibles autour des matières, (tout en étant esthétique, parce que quand c'est beau l'info passe mieux) des usages et des alternatives existantes. Les fanzines développent quant à eux une approche plus narrative et surtout plus complète.\nÀ travers les prints, REPLI cherche à rendre visibles les informations qui nous sont nécessaires, et qui structurent notre consommation vestimentaire pour apprendre à faire différemment, tout en proposant des formes de sensibilisation accessibles, tangibles et engageantes.",
    images2: [
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973018/portfolio/images/motion/REPLI/10_itt8lt.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973021/portfolio/images/motion/REPLI/11_tbescr.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973024/portfolio/images/motion/REPLI/12_xrpak7.png",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973037/portfolio/images/motion/REPLI/13_a09e0c.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973040/portfolio/images/motion/REPLI/14_bjcqme.png",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973043/portfolio/images/motion/REPLI/15_z5triw.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973046/portfolio/images/motion/REPLI/16_ngxue3.mp4",
    ],
    description6: "Comment représenter un système complexe dont le sujet nous repousse un peu à l'époque où notre attention se réduit ? Vaste réflexion…\n\nCette question a guidé toute la construction visuelle de REPLI.\nLa direction artistique s'inspire à la fois des univers éditoriaux, des photos d'archives qui m'ont servi de texture, de la typographie que je voulais brute et des couleurs pleines de vie. Je voulais aller plus loin que la communication institutionnelle traditionnelle.\nLe nom REPLI fait référence aux multiples couches qui composent un vêtement, mais aussi à la trace que le vêtement garde, et celle qu'il laisse sur la planète. Et enfin j'y vois le geste de prendre du recul.  Cette idée de couches successives se traduit sur l'ensemble du système graphique à travers des formes brutes, de la texture, des superpositions, des découpes, des juxtapositions.\nNotre DA doit revêtir une apparence familière car c'est le sujet nous concerne tous, car il atteint plusieurs couches de la société. Les couleurs, elles aussi, portent du sens, le rouge évoque l'urgence, mais entouré des autres couleurs, il s'adoucit, le jaune apporte l'espoir et l'énergie, le rose crée un espace rassurant, et le bleu apporte de l'apaisement et de la clarté. Et enfin, Le vert porte les valeurs écologiques du projet.\n\nCette approche se retrouve dans tous les supports du projet : vidéos en motion design, affiches, cartes informatives, fanzines et podcast. Chaque médium incarne l'identité, qui se veut cohérente et fondée sur les valeurs du projet.\nPlus qu'une campagne de sensibilisation, REPLI est conçu comme un dispositif de réflexion, son identité à part entière ne cherche pas à délivrer des réponses définitives mais à créer les conditions d'un questionnement. Elle invite à regarder autrement les vêtements qui nous entourent, à explorer leur histoire et à prendre conscience des systèmes invisibles qui façonnent nos habitudes de consommation, ce n'est probablement pas une solution miracle, néanmoins c'est une solution de REPLI. Et c'est le projet dont je suis le plus fière, celui qui me ressemble le plus.",
    images4: [
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973099/portfolio/images/motion/REPLI/31_itwifc.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973102/portfolio/images/motion/REPLI/32_jleidn.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973103/portfolio/images/motion/REPLI/33_vxngbe.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973105/portfolio/images/motion/REPLI/34_wiixio.png",
    ],
    images5: [
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983351/portfolio/images/motion/REPLI/35_rron5f.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973114/portfolio/images/motion/REPLI/36_xcvmwb.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973115/portfolio/images/motion/REPLI/37_vez753.png",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782983355/portfolio/images/motion/REPLI/38_z0zk8p.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983359/portfolio/images/motion/REPLI/39_jwquyp.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973130/portfolio/images/motion/REPLI/40_werv1w.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983361/portfolio/images/motion/REPLI/41_pcgoxi.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973143/portfolio/images/motion/REPLI/42_nyszfn.png",
    ],
    description5: "REPLI prend aussi la forme d'un podcast pour ouvrir le dialogue, croiser les regards et partager des pratiques.\nÀ travers des épisodes en complément des vidéos en motion design, le projet explore les histoires, les matières, les pratiques et les enjeux qui façonnent notre quotidiens. Chaque épisode propose un temps d'échange plus familier que les formats vidéo, permettant d'approfondir certaines questions et de donner davantage de place aux récits, aux témoignages et à la réflexion.\nLe podcast s'inscrit dans la continuité du mémoire et des productions visuelles du projet, il constitue un espace où l'on apprend par le biais d'experts du textile, de l'écologie, de l'économie et des personnes comme vous et moi…. Avec REPLI, l'ambition reste de comprendre avant de juger et de donner à chacun les moyens de mener sa propre réflexion.",
    images3: [
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973051/portfolio/images/motion/REPLI/18_jcyftz.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973053/portfolio/images/motion/REPLI/19_a0lqte.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983332/portfolio/images/motion/REPLI/20_rkysda.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983335/portfolio/images/motion/REPLI/21_vojyfh.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983337/portfolio/images/motion/REPLI/22_gvroe4.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973068/portfolio/images/motion/REPLI/23_dii4ff.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983340/portfolio/images/motion/REPLI/24_jko4vh.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983342/portfolio/images/motion/REPLI/25_zqg2xm.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983346/portfolio/images/motion/REPLI/26_qq5rsa.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973078/portfolio/images/motion/REPLI/27_mces1t.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983348/portfolio/images/motion/REPLI/28_vwxjgt.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973094/portfolio/images/motion/REPLI/29_snoovk.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973098/portfolio/images/motion/REPLI/30_afcw0t.png",
    ],
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973172/portfolio/images/motion/REPLI2_gzwicd.png",
    size: "featured",
  },
  {
    slug: "tracks",
    title: "Tracks",
    year: "2026",
    type: "Motion",
    tags: ["Motion design"],
    description: "Dans le cadre d'un projet de rebranding broadcast fictif, j'ai travaillé sur le renouvellement de l'identité visuelle et motion de Tracks, l'émission d'ARTE dédiée aux cultures alternatives et aux formes artistiques émergentes. L'objectif était de créer l'habillage graphique complet d'une émission TV / YouTube , autour du concept \"la culture comme résistance\".\n\nLe projet comprenait la création de plusieurs livrables broadcast : un générique de 10 secondes, un synthé au format .mogrt avec animation (découverte d'un format technique spécifique à After Effects pensé pour la réutilisabilité en production TV) ainsi qu'un bug antenne.\n\nL'identité visuelle repose sur un custom type créé pour le titre, une typographie corps Input Mono Condensed Italic, une palette de couleurs électriques et un ensemble d'assets graphiques modulaires. Le tout s'inscrit dans une esthétique numérique et underground, héritée de l'histoire de l'émission tout en l'ancrant dans les codes visuels d'internet.",
    images: [],
    images2: [
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973276/portfolio/images/motion/Tracks/2mp4_gedtel.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973278/portfolio/images/motion/Tracks/3_q0k71a.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973284/portfolio/images/motion/Tracks/4_wcwjqm.mp4",
    ],
    images3: [
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973286/portfolio/images/motion/Tracks/5_rgsyhx.jpg",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973287/portfolio/images/motion/Tracks/6_sbszw4.jpg",
    ],
    youtubeId: "aZpjUwS79m4",
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973306/portfolio/images/motion/tracks_ovrpbn.png",
    size: "featured",
  },
  {
    slug: "ode-au-vocabulaire",
    title: "Ôde au vocabulaire",
    year: "2026",
    type: "Motion expérimental",
    tags: ["Motion design", "Expérimental"],
    youtubeId: "U5qc_MXs480",
    description: "Une Ôde au Vocabulaire est un film motion design réalisé dans le cadre de mes partiels de fin d'année, en totale liberté artistique et technique. Le thème était « une ôde à… » et à nous de compléter, j'ai choisi le vocabulaire, qui part d'une fascination pour les mots rares, oubliés ou méconnus et pour ce qu'ils disent de la richesse de la langue française (il existe cependant de nombreux mots étrangers géniaux qui ne possèdent pas d'équivalents français). J'ai pensé la vidéo comme une plongée sensorielle dans l'univers du vocabulaire, la sensation du papier, la prolifération des mots sur l'écran, en passant par des définitions qui défilent, s'entrechoquent et se superposent, si la vidéo avait eu une odeur je lui aurais donné celle des vieux livres.\n\nVisuellement, la direction artistique joue sur la collision de matières et d'époques, textures de papier vieilli, planches de dictionnaire reconstituées et de linogravures, fonds colorés saturés, une esthétique à mi-chemin entre éditorial vintage et motion contemporain.",
    images: [
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958242/portfolio/images/motion/ODE_AU_VOCABULAIRE/Composition_2_zt9yan.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958247/portfolio/images/motion/ODE_AU_VOCABULAIRE/Composition_3_bbnyow.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958254/portfolio/images/motion/ODE_AU_VOCABULAIRE/Composition_4_w82c6u.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958258/portfolio/images/motion/ODE_AU_VOCABULAIRE/Composition_5_i76ppf.mp4",
    ],
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973303/portfolio/images/motion/ode-au-vocabulaire_dsfags.png",
    size: "small",
  },
  {
    slug: "les-saisons",
    title: "Les Saisons",
    year: "2026",
    type: "Motion expérimental · Workshop",
    tags: ["Motion design", "Expérimental", "Workshop"],
    description: "« Les saisons » est un projet motion comme j'en ai rarement fait, à l'école on nous a demandé de choisir entre deux thèmes et j'ai choisi « la mue ». Il est vrai je suis à une période de ma vie où les choses changent vite, du moins c'est l'impression que j'en ai, le bon comme le moins bon. Alors il faut apprendre à s'offrir au soleil, et à vivre pleinement chaque émotion.\n\nLa voix off (ma voix en l'occurrence) lit une citation du livre \"le prophète\" par Khalil Gibran, les images sont très expérimentales et structurée comme pour expliquer le refus catégorique auquel on fait généralement face aux changements de la vie, la palette se limite à du noir, du blanc et du rose, pour y voir quelque chose de binaire, avec au fond (vraiment au fond) un peu d'espoir.",
    images: [],
    youtubeId: "000-qZvqG9M",
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782958233/portfolio/images/motion/Les-saisons_upscale_jyts81.jpg",
    size: "small",
  },
  {
    slug: "rayquaza",
    title: "Rayquaza",
    year: "2025",
    type: "Motion · Projet collaboratif · Scénographie",
    tags: ["Motion design", "Collaboratif", "Digital", "Scénographie"],
    links: [{ label: "@rayquazart", href: "https://www.instagram.com/rayquazart/?hl=fr" }],
    description: "Rayquaza est une soirée musicale hyperpop/rap nantaise, qui réunit chaque édition lives et DJ sets dans un format hybride concerts + club. Pour sa 5e édition au Ferrailleur (26 octobre 2024), l'événement accueillait 11 artistes pour plus de 7h de musique non-stop, avec un closing en scène centrale à 360°.\n\nSur ce projet, j'ai pris en charge l'animation de la scénographie, le VJing et les teasers réseaux sociaux, en collaboration avec @onyji et @kizuame qui ont réalisé le logo, l'affiche, les cartes et la direction artistique globale.\n\nL'univers visuel de Rayquaza joue à fond la carte d'une esthétique internet et underground, avec un rappel flagrant au gaming et de la culture Pokémon : chaque artiste du line-up est mis en scène sous forme de carte à collectionner au format TCG, avec photo, stats, type et signature manuscrite. La palette cyan, vert fluo et bleu glacé crée une esthétique y2k et éthérée. Le logo custom dense, organique, entre graffiti et pixel art a servi pour les visuels et le merch qui était en vente lors de l'événement.",
    images: [
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782983379/portfolio/images/motion/Rayquaza/1_kb6xzi.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973211/portfolio/images/motion/Rayquaza/2_s8pdoi.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973213/portfolio/images/motion/Rayquaza/3_upv0ti.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973216/portfolio/images/motion/Rayquaza/4_samvca.jpg",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973222/portfolio/images/motion/Rayquaza/5_gsc8jh.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973226/portfolio/images/motion/Rayquaza/6_kx0avv.jpg",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973231/portfolio/images/motion/Rayquaza/7_b6guxf.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973233/portfolio/images/motion/Rayquaza/8_j4bipo.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973235/portfolio/images/motion/Rayquaza/9_cip7ib.jpg",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973187/portfolio/images/motion/Rayquaza/10_sdse6a.png",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782983381/portfolio/images/motion/Rayquaza/11_xjijxa.jpg",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782983392/portfolio/images/motion/Rayquaza/12_cp31bd.mp4",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973206/portfolio/images/motion/Rayquaza/13_x95ily.jpg",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973208/portfolio/images/motion/Rayquaza/14_tlzkm1.jpg",
      "https://res.cloudinary.com/kust8hzr/image/upload/v1782973210/portfolio/images/motion/Rayquaza/15_rbchkx.png",
    ],
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973266/portfolio/images/motion/Rayquaza_ifiqtd.png",
    size: "small",
  },
  {
    slug: "inrae",
    title: "Inrae",
    year: "2023",
    type: "Motion · Freelance",
    tags: ["Motion design", "Freelance"],
    description: "L'INRAE (Institut national de recherche pour l'agriculture, l'alimentation et l'environnement) est né en 2020 de la fusion entre l'INRA et l'IRSTEA. Premier institut de recherche agronomique en Europe, il rassemble une communauté de 12 000 personnes réparties dans plus de 200 unités de recherche à travers toute la France, avec pour ambition de construire des solutions durables pour l'agriculture, l'alimentation et l'environnement.\n\nDans le cadre d'une mission freelance, j'ai réalisé pour l'INRAE une vidéo de vulgarisation scientifique dédiée au cycle vertueux de gestion des eaux urbaines. Ce sujet explore comment les villes peuvent repenser leur rapport à l'eau : récupération des eaux pluviales, traitement et réutilisation des eaux usées, végétalisation urbaine et recharge des nappes phréatiques. Loin d'un modèle linéaire « consommer et rejeter », le cycle vertueux propose une approche circulaire et écologique, au service d'une ville plus résiliente face aux sécheresses et aux épisodes de fortes pluies.",
    images: [],
    youtubeId: "r_T-xrdS9Aw",
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973302/portfolio/images/motion/inare_awsuit.png",
    size: "small",
  },
  {
    slug: "onepoint",
    title: "Onepoint",
    year: "2024–2026",
    type: "Motion · Graphisme · Alternance",
    tags: ["Motion design", "Graphisme", "Digital"],
    description: "Onepoint est un cabinet de conseil spécialisé dans la transformation numérique des entreprises. Son approche repose sur l'innovation, le design et l'accompagnement des organisations face aux évolutions technologiques, avec une place grandissante accordée à l'intelligence artificielle et au développement. Pendant mon alternance de 2 chez Onepoint, j'ai intégré l'équipe créative en tant que motion designer. J'ai participé à la conception et à la réalisation de nombreux contenus audiovisuels destinés à la communication interne et externe de l'entreprise.\n\nJ'ai produit une grande variété de formats : showreels, vidéos promotionnelles, animations d'écrans, génériques courts, animations de logo, montages vidéo, vidéos en motion design, cartes de vœux, publicités et contenus pour les réseaux sociaux ou les événements.\n\nÉvoluer dans un environnement où l'intelligence artificielle occupait une place centrale m'a également amenée à intégrer ces nouveaux outils dans mon processus de travail. J'ai appris à expérimenter avec l'IA pour nourrir la recherche visuelle, accélérer certaines étapes de production ou explorer de nouvelles pistes créatives, tout en conservant un regard (très) critique sur ce que ça implique de travailler avec de tels outils, et de rester vigilante sur les résultats obtenus sans jamais les prendre comme produit fini.",
    images: [
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782983319/portfolio/images/motion/ONEPOINT/SHOWREEL_3_1920x1080px_251209_am_jqlnnp.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958265/portfolio/images/motion/ONEPOINT/20250826_TEASER_JOURNEE_INSTITUT_ONEPOINT_V2_5_iyaku8.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958271/portfolio/images/motion/ONEPOINT/26S-1920x1080-revolution_summit_t0ejus.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958296/portfolio/images/motion/ONEPOINT/Techpop_j4kdvx.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958299/portfolio/images/motion/ONEPOINT/animation-logo-velvet-v1_huoucq.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958304/portfolio/images/motion/ONEPOINT/carte_de_voeux_-_1920x1080_-_FR_LOGO_ENG_ueohp7.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958309/portfolio/images/motion/ONEPOINT/carte-de-voeux-montage-v5_junv8a.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958314/portfolio/images/motion/ONEPOINT/extraordinaires-ge%CC%81ne%CC%81rique_dkeft8.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958319/portfolio/images/motion/ONEPOINT/le_o_dans_l_architecture_edx12b.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958325/portfolio/images/motion/ONEPOINT/le_saviez_vous_montage-V4_i3tt0n.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958332/portfolio/images/motion/ONEPOINT/moka_apjpuv.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782958339/portfolio/images/motion/ONEPOINT/motion-my-s-life_zxu0zv.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782983326/portfolio/images/motion/ONEPOINT/opl_noar_live_stories_1920x1080px_260206_am_dspjfv.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782972994/portfolio/images/motion/ONEPOINT/revolution_summit_test_typo_cssrca.mp4",
      "https://res.cloudinary.com/kust8hzr/video/upload/v1782973010/portfolio/images/motion/ONEPOINT/revolution_summit_decompte_1920x1080px_260120_am_auvh6g.mp4",
    ],
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973013/portfolio/images/motion/Onepoint_kxwq1r.png",
    size: "small",
  },
  {
    slug: "alfii",
    title: "Alfii",
    year: "2025",
    type: "Motion",
    tags: ["Motion design"],
    description: "Alfii est une application web de gestion du flex-office développée par onepoint, conçue pour permettre aux collaborateurs de réserver leur poste de travail en présentiel, à la dernière minute ou plusieurs mois à l'avance, seul ou en équipe.\n\nFace à l'absence de solution adaptée sur le marché, onepoint a développé cet outil en interne, avec une préoccupation centrale : l'inclusion. Grâce à un algorithme de gestion de contraintes (le \"solver\"), Alfii garantit automatiquement l'attribution d'un poste adapté aux collaborateurs en situation de handicap ou ayant des besoins spécifiques, tout en regroupant leur équipe à proximité. Flex-office et postes aménagés deviennent enfin conciliables.\n\nL'application est sécurisée, hébergée en France et 100 % conforme RGPD. Elle est aujourd'hui déployée et utilisée quotidiennement par 700 collaborateurs sur trois sites du groupe onepoint.\n\nL'identité visuelle repose sur de l'illustration isométrique, avec une palette dominée par le jaune crème, le bleu pétrole et les tons beiges. L'interface allie clarté et douceur, typographie bold pour les titres, composants arrondis, UI épurée, le tout crée une expérience à la fois professionnelle et humaine.",
    images: [],
    youtubeId: "hONEAe868bM",
    cover: "https://res.cloudinary.com/kust8hzr/image/upload/v1782973301/portfolio/images/motion/alfii_wuakhr.png",
    size: "small",
  },
];
