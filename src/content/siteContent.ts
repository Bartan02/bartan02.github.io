import type {SiteContent} from "@types";

export const SITE_CONTENT: Record<string, SiteContent> = {
    en: {
        hero: {
            name: "Bartosz Adamczyk",
            specialty: "Software Developer",
            summary: "I am a proactive software developer focused on turning complex challenges into clean, dependable, and purposeful digital solutions. Driven by curiosity and a commitment to continuous growth, blending technical problem-solving with a user-first mindset.",
            siteLogo: "/logos/badamczykwhite.svg",
        },
        experience: [
            {
                company: "Acknowledge B.V.",
                department: "Software Solutions",
                position: "Graduation Internship",
                startDate: "February 2026",
                endDate: "July 2026",
                summary: [
                    "Researching and designing a technical framework to connect generative AI capabilities with Dynamics 365 Business Central.",
                    "Developing a functional Proof of Concept using Microsoft Copilot Studio, Azure AI Foundry and the Model Context Protocol (MCP).",
                    "Developing custom Business Central extension and API pages with Application Language (AL) to handle data retrieval adapted for the AI assistant."
                ],
            },
            {
                company: "HZ University of Applied Sciences",
                position: "Teacher Assistant",
                startDate: "September 2025",
                endDate: "January 2026",
                summary: [
                    "Assisting in conducting practical sessions for first-year ICT students, focusing on programming basics and web development."
                ],
            },
            {
                company: "Joint Research Center Zeeland",
                position: "Internship",
                startDate: "February 2025",
                endDate: "July 2025",
                summary: [
                    "Developing a 3D virtual anatomy application using C++ and Unreal Engine, aimed at supporting HZ University of Applied Sciences nursing program."
                ],
            },
            {
                company: "Diebold Nixdorf",
                position: "Internship",
                startDate: "May 2021",
                endDate: "May 2021",
                summary: [
                    "Creating the web application for searching appropriate install files for ATM machines and the desktop application modifying certain Windows system properties."
                ],
            },
        ],
        projects: {
            title: "projects",
            foreword: "These are side and personal projects I built out of curiosity and a desire to solve small, practical problems. They serve as an ongoing playground for me to explore new tools, try out different development practices, and learn through trial and error outside of a structured curriculum. Each project represents an effort to turn a simple idea into a clean, functional digital tool.",
            projectsList: [
                {
                    name: "AH Prijzenvergelijker",
                    summary: "A web application that compares grocery prices between the Dutch and Belgian Albert Heijn supermarkets. It provides mainly border residents, commuters, and expats with spotting cross-border price differences and finding the best deals on identical products.",
                    image: "/projects/ahprijzenvergelijker.webp",
                    notYetReleased: true,
                },
                {
                    name: "Portfolio website",
                    summary: "A personal portfolio website built to showcase my software engineering projects, practical experience, and technical skill set. Designed with a responsive, modern interface to provide visitors with a clear overview of my work and background.",
                    linkSource: "https://github.com/Bartan02/bartan02.github.io",
                    image: "/projects/portfoliowebsite.webp",
                },
            ],
        },
        uniProjects: {
            title: "uniProjects",
            foreword: "This section gathers key academic projects developed during my studies at HZ University of Applied Sciences. These assignments provided valuable opportunities to work through fundamental concepts in software design, domain modeling, and full-stack development across various tech stacks. Many of them involved team collaboration, which helped me learn how to coordinate effectively, adapt to project constraints, and build reliable solutions to real requirements.",
            projectsList: [
                {
                    name: "Priority Request Viewer",
                    summary: "A web-based application that makes complex traffic priority data easier to understand. It helps road authorities explore and replay priority request scenarios, gain insight into what happens at intersections, and better explain or diagnose situations where things do not go as expected.",
                    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7419366654423289857/",
                    image: "/projects/prv.webp",
                },
                {
                    name: "DnD Character Sheet Generator",
                    summary: "A full-stack application built in Go that simplifies character creation and management for Dungeons & Dragons 5e under the SRD 5.1 ruleset. Featuring both a web interface and a CLI, it uses a domain-driven architecture to handle character generation, core rule mechanics, gear loadouts, and spellcasting progression." ,      linkSource: "https://github.com/Bartan02/Dungeons-Dragons-5e-character-sheet-generator",
                    image: "/projects/dnd.webp",
                },
                {
                    name: "StepUp!",
                    summary: "An application that connects people through sports. It tracks your performance during activity and it also allows you to meet/chat with other sport colleagues.",
                    linkSource: "https://github.com/Bartan02/positive-health-int-team-2",
                    image: "/projects/stepup.webp",
                },
                {
                    name: "JRCZ Temperature Monitoring Application",
                    summary: "An application that provides with clear visualization of temperature room records inside Joint Research Center Zeeland building and thus helps monitor past temperatures in order to analyze and reduce energy waste.",
                    image: "/projects/jrcz.webp",
                },
                {
                    name: "OOP Educational Game",
                    summary: "An educational game for kids, aged around 8-10, about identity theft issue and preventing from it.",
                    image: "/projects/oopgame.webp",
                },
            ],
        },

        about: {
            description:
                ["My passion for creating digital solutions stems from a genuine interest in understanding how modern systems function and how they can be refined to serve people better. My educational journey began with foundational technical studies in Poland at Technical High School of Mechatronics No. 1 in Warsaw where the core fundamentals of computing first sparked my lasting curiosity. I later expanded that foundation internationally while pursuing an Information and Communication Technology degree in the Netherlands at HZ University of Applied Sciences, alongside focused studies in startup development and innovation at The Hague University of Applied Sciences. Studying and living in different environments taught me to be adaptable, open-minded, and quick to pick up new ways of thinking. Whenever I run into a tricky problem, I see it as a chance to learn something new, explore fresh ideas, and improve the way I build things.",
                    "This curiosity naturally shapes my work philosophy, which is built on clarity, thoroughness, and a deep respect for the end user’s experience. Instead of adding complexity for the sake of it, my goal is always to deliver clean, reliable, and well-structured software that genuinely addresses user needs. I place strong emphasis on thoughtful design, maintainable code, and adapting smoothly to new tools and environments. Within any team setting, I strive to be a reliable and supportive contributor through strong organizational discipline, transparent communication, and a constructive outlook. A commitment to long-term sustainability and open feedback loops drives every stage of my development process, ensuring that each solution is both durable and built with purpose.",
                    "Outside of development, I find inspiration in staying active and exploring the world around me. I love traveling to new places, experiencing different cultures, and discovering music that fuels focus and creative energy. Whether it is engaging in sports, learning new languages, or discussing business ideas and future technologies, I believe a curious, well-rounded lifestyle directly feeds back into my work",
                ],
            image: "/bartoszadamczyk.webp",
        }
    },
    fr: {
        hero: {
            name: "Bartosz Adamczyk",
            specialty: "Software Développeur",
            summary:
                "Développeur logiciel proactif, je m'attache à transformer des défis complexes en solutions numériques claires, fiables et utiles. Porté par la curiosité et la volonté de progresser en continu, j'allie résolution de problèmes techniques et approche axée sur l'utilisateur.",
            siteLogo: "/logos/badamczykwhite.svg",
        },
        experience: [
            {
                company: "Acknowledge B.V.",
                department: "Software Solutions",
                position: "Stage de fin d'études",
                startDate: "Février 2026",
                endDate: "Juillet 2026",
                summary: [
                    "Recherche et conception d'un cadre technique pour intégrer des capacités d'IA générative à Dynamics 365 Business Central.",
                    "Développement d'une preuve de concept (PoC) fonctionnelle à l'aide de Microsoft Copilot Studio, Azure AI Foundry et du protocole Model Context Protocol (MCP).",
                    "Développement d'une extension Business Central personnalisée et de pages d'API en Application Language (AL) pour gérer l'extraction de données adaptées à l'assistant IA.",
                ],
            },
            {
                company: "HZ University of Applied Sciences",
                position: "Assistant de professeur",
                startDate: "Septembre 2025",
                endDate: "Janvier 2026",
                summary: [
                    "Assistance à la conduite de séances pratiques pour les étudiants de première année en TIC, axées sur les bases de la programmation et le développement web."
                ],
            },
            {
                company: "Joint Research Center Zeeland",
                position: "Stage de pratique",
                startDate: "Février 2025",
                endDate: "Juillet 2025",
                summary: [
                    "Développement d'une application d'anatomie virtuelle en 3D utilisant C++ et Unreal Engine, visant à soutenir le programme de soins infirmiers (Verpleegkunde) de la HZ Univeristy of Applied Sciences."
                ],
            },
            {
                company: "Diebold Nixdorf",
                position: "Stage de pratique",
                startDate: "Mai 2021",
                endDate: "Mai 2021",
                summary: [
                    "Création de l'application web pour la recherche des fichiers d'installation appropriés pour les distributeurs automatiques de billets et de l'application de bureau pour la modification de certaines propriétés sous Windows"
                ],
            },
        ],
        projects: {
            title: "projects",
            foreword: "Il s'agit de projets personnels et secondaires réalisés par curiosité et avec l'envie de résoudre des problèmes pratiques du quotidien. Ils constituent pour moi un terrain d'expérimentation continu pour explorer de nouveaux outils, tester différentes méthodes de développement et apprendre par essais et erreurs en dehors d'un cadre académique. Chaque projet reflète la volonté de transformer une idée simple en un outil numérique propre et fonctionnel.",
            projectsList: [
                {
                    name: "AH Prijzenvergelijker",
                    summary: "Une application web qui compare les prix des produits d'épicerie entre les supermarchés Albert Heijn néerlandais et belges. Elle permet principalement aux frontaliers, aux navetteurs et aux expatriés de repérer les écarts de prix transfrontaliers et de trouver les meilleures offres sur des produits identiques.",
                    image: "/projects/ahprijzenvergelijker.webp",
                    notYetReleased: true,
                },
                {
                    name: "Site portfolio",
                    summary: "Un site portfolio personnel conçu pour présenter mes projets d'ingénierie logicielle, mon expérience pratique et mes compétences techniques. Doté d'une interface moderne et responsive, il offre aux visiteurs un aperçu clair de mon parcours et de mes réalisations.",
                    linkSource: "https://github.com/Bartan02/bartan02.github.io",
                    image: "/projects/portfoliowebsite.webp",
                },
            ],
        },
        uniProjects: {
            title: "uniProjects",
            foreword: "Cette section rassemble les principaux projets académiques réalisés au cours de mes études à la HZ University of Applied Sciences. Ces travaux m'ont permis de mettre en pratique les concepts fondamentaux de conception logicielle, de modélisation de domaine et de développement full-stack sur diverses piles technologiques. Plusieurs projets ont été menés en équipe, ce qui m'a appris à collaborer efficacement, à m'adapter aux contraintes et à concevoir des solutions fiables répondant à des exigences réelles.",
            projectsList: [
                {
                    name: "Priority Request Viewer",
                    summary: "Une application web qui facilite la compréhension des données complexes de priorité de trafic. Elle aide les autorités routières à explorer et à rejouer des scénarios de demande de priorité, à mieux comprendre ce qui se passe aux intersections, et à mieux expliquer ou diagnostiquer les situations où les choses ne se passent pas comme prévu.",
                    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7419366654423289857/",
                    image: "/projects/prv.webp",
                },
                {
                    name: "Générateur de fiches de personnage D&D",
                    summary: "Une application full-stack développée en Go qui simplifie la création et la gestion de personnages pour Dungeons & Dragons 5e selon les règles du SRD 5.1. Dotée d'une interface web et d'une CLI, elle s'appuie sur une architecture orientée domaine (DDD) pour gérer la génération de personnages, les mécaniques de règles de base, l'équipement et la progression des sorts.",
                    linkSource: "https://github.com/Bartan02/Dungeons-Dragons-5e-character-sheet-generator",
                    image: "/projects/dnd.webp",
                },
                {
                    name: "StepUp!",
                    summary: "Une application qui met les gens en contact par le biais du sport. Il suit vos performances pendant l'activité et vous permet également de rencontrer d'autres collègues sportifs ou de discuter avec eux.",
                    linkSource: "https://github.com/Bartan02/positive-health-int-team-2",
                    image: "/projects/stepup.webp",
                },
                {
                    name: "Application de surveillance de la température JRCZ",
                    summary: "Une application qui permet de visualiser clairement les relevés de température dans les pièces du bâtiment du Joint Research Center Zeeland et ainsi de surveiller les températures passées afin d'analyser et de réduire les gaspillages d'énergie.",
                    image: "/projects/jrcz.webp",
                },
                {
                    name: "Jeu éducatif sur la POO",
                    summary: "Un jeu éducatif pour les enfants, âgés de 8 à 10 ans, sur le thème de l'usurpation d'identité et de sa prévention.",
                    image: "/projects/oopgame.webp",
                },
            ],
        },
        about: {
            description: [
                "Ma passion pour la conception de solutions numériques est née d'un réel intérêt pour le fonctionnement des systèmes modernes et la manière de les perfectionner pour mieux servir les utilisateurs. Mon parcours a débuté en Pologne par une formation technique solide au Technikum Mechatroniczne n°1 de Varsovie, où les bases de l'informatique ont éveillé ma curiosité. J'ai ensuite enrichi ce socle à l'international aux Pays-Bas, en suivant un cursus en technologies de l'information et de la communication à la HZ University of Applied Sciences, complété par des études axées sur le développement de startups et l'innovation à The Hague University of Applied Sciences. Étudier et vivre dans des contextes variés m'a appris à être adaptable, ouvert d'esprit et réactif face à de nouvelles façons de penser. Face à un problème complexe, j'y vois toujours une opportunité d'apprendre, d'explorer de nouvelles idées et d'affiner mes pratiques.",
                "Cette curiosité façonne naturellement ma philosophie de travail, fondée sur la clarté, la rigueur et le respect de l'expérience utilisateur. Plutôt que de complexifier inutilement, je cherche toujours à concevoir des logiciels propres, fiables et bien structurés qui répondent à de véritables besoins. J'accorde une importance primordiale à une conception soignée, à un code maintenable et à une intégration fluide des nouveaux outils et environnements. Au sein d'une équipe, je veille à être un collaborateur fiable et constructif grâce à une solide discipline organisationnelle, une communication transparente et un état d'esprit positif. La recherche de durabilité et des retours réguliers guident chaque étape de mon processus de développement, garantissant des solutions pérennes et pertinentes.",
                "En dehors du code, je puise mon inspiration dans l'activité physique et la découverte du monde. J'aime voyager, explorer de nouvelles cultures et écouter des musiques qui stimulent ma concentration et ma créativité. Qu'il s'agisse de faire du sport, d'apprendre des langues ou d'échanger sur des idées d'entreprises et les technologies d'avenir, je suis convaincu qu'un mode de vie curieux et équilibré enrichit directement mon travail — en gardant mon regard frais, pragmatique et ouvert à de nouvelles perspectives.",
            ],
            image: "/bartoszadamczyk.webp",
        }
    },
    nl: {
        hero: {
            name: "Bartosz Adamczyk",
            specialty: "Softwareontwikkelaar",
            summary:
                "Als proactieve softwareontwikkelaar richt ik me op het vertalen van complexe uitdagingen naar heldere, betrouwbare en doordachte digitale oplossingen. Gedreven door nieuwsgierigheid en continue professionele groei combineer ik technisch probleemoplossend vermogen met een gebruikersgerichte aanpak.",
            siteLogo: "/logos/badamczykwhite.svg",
        },
        experience: [
            {
                company: "Acknowledge B.V.",
                department: "Software Solutions",
                position: "Afstudeerstage",
                startDate: "Februari 2026",
                endDate: "Juli 2026",
                summary: [
                    "Onderzoeken en ontwerpen van een technisch framework om generatieve AI-functionaliteiten te integreren met Dynamics 365 Business Central.",
                    "Ontwikkelen van een functionele Proof of Concept met Microsoft Copilot Studio, Azure AI Foundry en het Model Context Protocol (MCP).",
                    "Ontwikkelen van maatwerk Business Central-extensies en API-pagina's in Application Language (AL) voor gegevensontsluiting afgestemd op de AI-assistent.",
                ],
            },
            {
                company: "Hogeschool Zeeland",
                position: "Docent Assistent",
                startDate: "September 2025",
                endDate: "Januari 2026",
                summary: [
                    "Assistentie bij het geven van praktische sessies voor eerstejaars ICT-studenten, met de focus op programmeerbasis en webontwikkeling."
                ],
            },
            {
                company: "Joint Research Center Zeeland",
                position: "Meeloopstage ",
                startDate: "Februari 2025",
                endDate: "Juli 2025",
                summary: [
                    "Ontwikkeling van een 3D virtuele anatomie applicatie met C++ en Unreal Engine, gericht op het ondersteunen van het verpleegkundeprogramma van HZ."
                ],
            },
            {
                company: "Diebold Nixdorf",
                position: "Meeloopstage",
                startDate: "Mei 2021",
                endDate: "Mei 2021",
                summary: [
                    "Het maken van de webapplicatie voor het zoeken naar de juiste installatiebestanden voor pinautomaten en de desktopapplicatie voor het wijzigen van enkele eigenschappen op Windows"
                ],
            },
        ],
        projects: {
            title: "projects",
            foreword: "Dit zijn persoonlijke nevenprojecten die ik uit nieuwsgierigheid heb gebouwd om kleine, praktische problemen op te lossen. Ze dienen als een doorlopende proeftuin om nieuwe tools te verkennen, verschillende ontwikkelmethoden uit te proberen en buiten het vaste curriculum via trial-and-error te leren. Elk project weerspiegelt het streven om een eenvoudig idee om te zetten in een nette, functionele digitale tool.",
            projectsList: [
                {
                    name: "AH Prijzenvergelijker",
                    summary: "Een webapplicatie die supermarktprijzen vergelijkt tussen de Nederlandse en Belgische Albert Heijn. Het helpt vooral grensregiobewoners, forenzen en expats bij het in kaart brengen van grensoverschrijdende prijsverschillen en het vinden van de beste deals voor identieke producten.",
                    image: "/projects/ahprijzenvergelijker.webp",
                    notYetReleased: true,
                },
                {
                    name: "Portfoliowebsite",
                    summary: "Een persoonlijke portfoliowebsite gebouwd om mijn software engineering-projecten, praktijkervaring en technische vaardigheden te presenteren. Ontworpen met een responsieve, moderne interface om bezoekers een helder overzicht te bieden van mijn werk en achtergrond.",
                    linkSource: "https://github.com/Bartan02/bartan02.github.io",
                    image: "/projects/portfoliowebsite.webp",
                },
            ],
        },
        uniProjects: {
            title: "uniProjects",
            foreword: "Dit overzicht bevat belangrijke academische projecten die zijn ontwikkeld tijdens mijn studie aan HZ University of Applied Sciences. Deze opdrachten boden waardevolle kansen om te werken met fundamentele concepten in softwareontwerp, domeinmodellering en full-stack ontwikkeling over diverse tech stacks heen. Veel projecten waren in teamverband, wat me leerde effectief samen te werken, om te gaan met projectkaders en betrouwbare oplossingen te bouwen voor reële vereisten.",
            projectsList: [
                {
                    name: "Priority Request Viewer",
                    summary: "Een webgebaseerde applicatie die complexe verkeersprioriteitsgegevens gemakkelijker te begrijpen maakt. Het helpt wegautoriteiten om prioriteitsaanvraagscenario's te verkennen en opnieuw af te spelen, inzicht te krijgen in wat er bij kruispunten gebeurt, en situaties beter uit te leggen of te diagnosticeren wanneer dingen niet gaan zoals verwacht.",
                    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7419366654423289857/",
                    image: "/projects/prv.webp",
                },
                {
                    name: "DnD Character Sheet Generator",
                    summary: "Een full-stack applicatie gebouwd in Go die het aanmaken en beheren van personages voor Dungeons & Dragons 5e volgens de SRD 5.1-regels vereenvoudigt. Voorzien van zowel een webinterface als een CLI, maakt het gebruik van een domain-driven architectuur voor personagegeneratie, spelregels, uitrusting en spreukprogressie.",
                    linkSource: "https://github.com/Bartan02/Dungeons-Dragons-5e-character-sheet-generator",
                    image: "/projects/dnd.webp",
                },
                {
                    name: "StepUp!",
                    summary: "Een applicatie die mensen verbindt door middel van sport. Het houdt je prestaties tijdens de activiteit bij en stelt je ook in staat om andere sportcollega's te ontmoeten/chatten.",
                    linkSource: "https://github.com/Bartan02/positive-health-int-team-2",
                    image: "/projects/stepup.webp",
                },
                {
                    name: "JRCZ Temperature Monitoring Applicatie",
                    summary: "Een applicatie die een duidelijke visualisatie biedt van de temperatuur in het gebouw van het Joint Research Center Zeeland en zo helpt bij het monitoren van temperaturen uit het verleden om energieverspilling te analyseren en te verminderen.",
                    image: "/projects/jrcz.webp",
                },
                {
                    name: "OOP educatief spel",
                    summary: "Een educatief spel voor kinderen van ongeveer 8-10 jaar over identiteitsdiefstal en het voorkomen daarvan.",
                    image: "/projects/oopgame.webp",
                },
            ],
        },
        about: {
            description: [
                "Mijn passie voor het ontwikkelen van digitale oplossingen komt voort uit een oprechte interesse in hoe moderne systemen werken en hoe ze geoptimaliseerd kunnen worden om mensen beter te ondersteunen. Mijn leertraject begon met een technische basis in Polen aan het Technikum Mechatroniczne nr. 1 in Warschau, waar de fundamenten van de informatica mijn blijvende nieuwsgierigheid wekten. Deze basis heb ik vervolgens internationaal uitgebreid in Nederland met een studie HBO-ICT aan de HZ University of Applied Sciences, aangevuld met vakken gericht op startup-ontwikkeling en innovatie aan De Haagse Hogeschool. Wonen en studeren in verschillende omgevingen heeft me geleerd flexibel, ruimdenkend en leergierig te zijn. Wanneer ik voor een complexe uitdaging sta, zie ik dat als een kans om nieuwe kennis op te doen, innovatieve ideeën te verkennen en mijn manier van bouwen te verfijnen.",
                "Deze nieuwsgierigheid vormt de basis van mijn werkfilosofie, die rust op helderheid, grondigheid en respect voor de gebruikerservaring. In plaats van onnodige complexiteit toe te voegen, streef ik altijd naar schone, betrouwbare en goed gestructureerde software die daadwerkelijk inspeelt op de behoeften van de eindgebruiker. Ik hecht veel waarde aan een doordacht design, onderhoudbare code en het soepel adopteren van nieuwe tools en werkomgevingen. Binnen een team ben ik een betrouwbare en ondersteunende schakel dankzij sterke organisatorische discipline, open communicatie en een constructieve instelling. Duurzaamheid op lange termijn en continue feedbackloops staan centraal in elke fase van mijn ontwikkelproces, waardoor oplossingen toekomstbestendig en doelgericht blijven.",
                "Buiten development haal ik inspiratie uit een actieve levensstijl en het ontdekken van de wereld om me heen. Ik reis graag naar nieuwe plekken, leer over verschillende culturen en luister naar muziek die focus en creativiteit stimuleert. Of het nu gaat om sporten, nieuwe talen leren of sparren over innovatieve businessideeën en toekomstige technologieën: ik geloof dat een veelzijdige en nieuwsgierige levenshouding direct bijdraagt aan mijn werk, doordat het mijn perspectief fris, nuchter en open houdt voor nieuwe kansen.",
            ],
            image: "/bartoszadamczyk.webp",
        }
    },
    pl: {
        hero: {
            name: "Bartosz Adamczyk",
            specialty: "Software Developer",
            summary:
                "Jestem proaktywnym programistą, który przekształca złożone wyzwania w przejrzyste, niezawodne i celowe rozwiązania cyfrowe. Kieruje mną ciekawość oraz chęć ciągłego rozwoju, a w pracy łączę analityczne myślenie z podejściem zorientowanym na użytkownika.",
            siteLogo: "/logos/badamczykwhite.svg",
        },
        experience: [
            {
                company: "Acknowledge B.V.",
                department: "Software Solutions",
                position: "Praktyka dyplomowa",
                startDate: "Luty 2026",
                endDate: "Lipiec 2026",
                summary: [
                    "Badanie i projektowanie architektury technicznej łączącej możliwości generatywnej sztucznej inteligencji z systemem Dynamics 365 Business Central.",
                    "Opracowanie funkcjonalnego Proof of Concept (PoC) z wykorzystaniem Microsoft Copilot Studio, Azure AI Foundry oraz Model Context Protocol (MCP).",
                    "Tworzenie dedykowanego rozszerzenia Business Central oraz stron API w języku Application Language (AL) do pobierania danych dostosowanych do asystenta AI.",
                ],
            },
            {
                company: "HZ University of Applied Sciences",
                position: "Asystent nauczyciela",
                startDate: "Wrzesień 2025",
                endDate: "Styczeń 2026",
                summary: [
                    "Pomoc w prowadzeniu zajęć praktycznych dla studentów pierwszego roku ICT, koncentrujących się na podstawach programowania i tworzeniu stron internetowych."
                ],
            },
            {
                company: "Joint Research Center Zeeland",
                position: "Staż studencki",
                startDate: "Luty 2025",
                endDate: "Lipiec 2025",
                summary: [
                    "Rozwój aplikacji wirtualnej anatomii 3D przy użyciu języka C++ i silnika Unreal Engine, mającej na celu wsparcie kierunku pielęgniarskiego (Verpleegkunde) w HZ University of Applied Sciences."
                ],
            },
            {
                company: "Diebold Nixdorf",
                position: "Praktyka (technikum)",
                startDate: "Maj 2021",
                endDate: "Maj 2021",
                summary: [
                    "Stworzenie aplikacji webowej do wyszukiwania odpowiednich plików instalacyjnych dla maszyn ATM oraz aplikacji desktopowej zmieniającej niektóre właściwości w systemie Windows"
                ],
            },
        ],
        projects: {
            title: "projects",
            foreword: "Są to projekty poboczne i osobiste, które stworzyłem z ciekawości oraz chęci rozwiązywania drobnych, praktycznych problemów. Służą mi jako przestrzeń do testowania nowych narzędzi, eksperymentowania z różnymi praktykami programistycznymi i nauki metodą prób i błędów poza programem studiów. Każdy projekt to próba przekształcenia prostego pomysłu w przejrzyste, funkcjonalne narzędzie cyfrowe.",
            projectsList: [
                {
                    name: "AH Prijzenvergelijker",
                    summary: "Aplikacja internetowa porównująca ceny artykułów spożywczych między holenderskimi a belgijskimi supermarketami Albert Heijn. Ułatwia mieszkańcom terenów przygranicznych, osobom dojeżdżającym do pracy oraz ekspatom wyłapywanie różnic cenowych i znajdowanie najlepszych ofert na identyczne produkty.",
                    image: "/projects/ahprijzenvergelijker.webp",
                    notYetReleased: true,
                },
                {
                    name: "Strona portfolio",
                    summary: "Osobista strona portfolio stworzona w celu zaprezentowania moich projektów inżynierskich, doświadczenia praktycznego oraz umiejętności technicznych. Zaprojektowana z responsywnym, nowoczesnym interfejsem, aby zapewnić odwiedzającym przejrzysty wgląd w mój profil i zrealizowane prace.",
                    linkSource: "https://github.com/Bartan02/bartan02.github.io",
                    image: "/projects/portfoliowebsite.webp",
                },
            ],
        },
        uniProjects: {
            title: "uniProjects",
            foreword: "Ta sekcja gromadzi kluczowe projekty akademickie zrealizowane podczas moich studiów na HZ University of Applied Sciences. Zadania te były doskonałą okazją do praktycznego zgłębiania fundamentalnych koncepcji projektowania oprogramowania, modelowania domenowego oraz programowania full-stack przy użyciu różnych technologii. Wiele z nich wymagało pracy zespołowej, co pozwoliło mi rozwinąć umiejętności efektywnej koordynacji, adaptacji do ograniczeń projektowych oraz budowania niezawodnych rozwiązań odpowiadających realnym wymaganiom.",
            projectsList: [
                {
                    name: "Priority Request Viewer",
                    summary: "Aplikacja internetowa, która ułatwia zrozumienie skomplikowanych danych dotyczących priorytetów ruchu drogowego. Pomaga władzom drogowym eksplorować i odtwarzać scenariusze żądań priorytetowych, uzyskać wgląd w to, co dzieje się na skrzyżowaniach, oraz lepiej wyjaśniać lub diagnozować sytuacje, w których rzeczy nie przebiegają zgodnie z oczekiwaniami.",
                    linkPost: "https://www.linkedin.com/feed/update/urn:li:activity:7419366654423289857/",
                    image: "/projects/prv.webp",
                },
                {
                    name: "DnD Character Sheet Generator",
                    summary: "Aplikacja full-stack napisana w języku Go, ułatwiająca tworzenie i zarządzanie postaciami w Dungeons & Dragons 5e w oparciu o zestaw zasad SRD 5.1. Wyposażona w interfejs webowy oraz CLI, wykorzystuje architekturę Domain-Driven Design do generowania postaci, obsługi mechaniki reguł, ekwipunku oraz progresji zaklęć.",
                    linkSource: "https://github.com/Bartan02/Dungeons-Dragons-5e-character-sheet-generator",
                    image: "/projects/dnd.webp",
                },
                {
                    name: "StepUp!",
                    summary: "Aplikacja, która łączy ludzi poprzez sport - śledzi wydajność podczas aktywności, a także pozwala spotkać się/porozmawiać z innymi sportowcami.",
                    linkSource: "https://github.com/Bartan02/positive-health-int-team-2",
                    image: "/projects/stepup.webp",
                },
                {
                    name: "Aplikacja do monitorowania temperatury JRCZ",
                    summary: "Aplikacja, która zapewnia przejrzystą wizualizację zapisów temperatur w pomieszczeniach budynku Joint Research Center Zeeland, a tym samym pomaga monitorować przeszłe temperatury w celu analizy i zmniejszenia strat energii.",
                    image: "/projects/jrcz.webp",
                },
                {
                    name: "Gra edukacyjna OOP",
                    summary: "Gra edukacyjna dla dzieci w wieku około 8-10 lat dotycząca tematu kradzieży tożsamości i jej zapobieganiu.",
                    image: "/projects/oopgame.webp",
                },
            ],
        },
        about: {
            description: [
                "Moja pasja do tworzenia rozwiązań cyfrowych wynika z autentycznego zainteresowania tym, jak funkcjonują współczesne systemy i jak można je udoskonalać, aby lepiej służyły ludziom. Moja ścieżka edukacyjna rozpoczęła się od solidnych podstaw technicznych w Technikum Mechatronicznym nr 1 w Warszawie, gdzie fundamenty informatyki po raz pierwszy rozbudziły moją ciekawość. Tę bazę rozwijałem później za granicą, studiując technologie informacyjno-komunikacyjne (ICT) w Holandii na uczelni HZ University of Applied Sciences, równolegle zgłębiając zagadnienia rozwoju startupów i innowacji na The Hague University of Applied Sciences. Nauka i życie w międzynarodowym środowisku nauczyły mnie elastyczności, otwartości oraz szybkiego przyswajania nowych sposobów myślenia. Każdy złożony problem traktuję jako okazję do nauki, testowania świeżych koncepcji i ciągłego doskonalenia swojego warsztatu.",
                "Ta ciekawość naturalnie kształtuje moją filozofię pracy, opartą na przejrzystości, dokładności i szacunku dla doświadczenia użytkownika końcowego. Zamiast dodawać zbędną złożoność, zawsze dążę do dostarczania czystego, niezawodnego i dobrze ustrukturyzowanego oprogramowania, które odpowiada na realne potrzeby. Kładę duży nacisk na przemyślany design, łatwy w utrzymaniu kod oraz płynną adaptację do nowych narzędzi i środowisk. W zespole staram się być niezawodnym i pomocnym partnerem, stawiając na dyscyplinę organizacyjną, transparentną komunikację i konstruktywne podejście. Dbałość o długofalową jakość oraz otwartość na bieżący feedback wyznaczają kierunek na każdym etapie mojej pracy, gwarantując tworzenie trwałych i celowych rozwiązań.",
                "Poza programowaniem czerpię inspirację z aktywnego trybu życia i poznawania świata. Uwielbiam podróże, odkrywanie nowych kultur oraz muzykę, która sprzyja skupieniu i kreatywności. Niezależnie od tego, czy uprawiam sport, uczę się języków obcych, czy dyskutuję o pomysłach biznesowych i technologiach przyszłości, wierzę, że wszechstronny styl życia bezpośrednio przekłada się na moją pracę — pozwalając zachować świeże spojrzenie, pragmatyzm i otwartość na nowe możliwości.",
            ],
            image: "/bartoszadamczyk.webp",
        }
    }
};