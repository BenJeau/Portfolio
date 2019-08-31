const langKey = 'lang';
const langDefault = 'en';

/**
 * Returns the strings object, but with only one language (english or french)
 */
export default (): any => {
	return getLangHelper(strings);
};

/**
 * Updates the language of the site
 * 
 * @param lang The desired language (en or fr)
 */
const changeLang = (lang: string) => {
	localStorage.setItem(langKey, lang);
};

export const oppositeLang = () => {
	return getLang() === 'en' ? 'fr' : 'en';
};

export const toggleLang = () => {
	changeLang(oppositeLang());
};

/**
 * Returns the lanugage of the site and sets the default one to english
 */
export const getLang = (): string => {
	const lang = localStorage.getItem(langKey);

	if (!lang) {
		changeLang(langDefault);
		return langDefault;
	}

	return lang;
}

/**
 * Recursive helper method to get the strings in the desired language
 *
 * @param obj The object which will initially be the strings content
 */
export const getLangHelper = (obj: any) => {
	const lang = getLang();

	return Object.keys(obj).reduce((acc, i) => {
		if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
			acc[i] = getLangHelper(obj[i]);
		} else if (i === lang) {
			return obj[i];
		} else if (i !== 'fr' && i !== 'en') {
			acc[i] = obj[i];
		}

		return acc;
	}, {});
};

/**
 * The text displayed on the website
 */
const strings = {
	project: {
		title: {
			en: 'Recent Projects',
			fr: 'Projets Récents',
		},
		all: {
			en: 'All',
			fr: 'Tout',
		},
		description: {
			en: 'You can click on the cards to open the <b>README</b> of the project',
			fr: 'Vous pouvez clicker sur les cartes pour visionner le <b>README</b> du projet'
		}
	},
	home: {
		description: {
			en: ['UI Passionate', 'Forensics Enthusisast', 'Mobile Developer', '3rd Year Software Engineering Student'],
			fr: [
				"Passionné de la conception d'interfaces",
				'Fanatique de la criminalistique',
				'Développeur mobile',
				'Étudiant en génie logiciels de 3e année',
			],
		},
	},
	navigation: {
		pages: {
			en: ['Home', 'Projects', 'Work Experience', 'Resumé'],
			fr: ['Accueil', 'Projets', 'Expérience de travail', 'Resumé'],
		},
	},
	about: {
		languages: {
			en: 'French, English',
			fr: 'Anglais, Français',
		},
		education: {
			en: 'University of Ottawa',
			fr: 'Université d\'Ottawa',
		},
		title: {
			en: 'Hi there!',
			fr: 'Salut!'
		},
		location: 'Ottawa, ON',
		email: 'benoit@jeaurond.dev',
		description: {
			en: `I'm an Software Engineering student with interest in the advancement of technology and its inner workings, more specifically in the <b>field of forensics</b> and <b>mobile development</b>. <br/> <br/>
			I've worked in the past at <a href='http://www.ic.gc.ca/eic/site/icgc.nsf/eng/home' target='_blank' rel='noopener noreferrer'>Innovation, Science and Economic Development Canada</a>, <a href='https://www.canada.ca/en/treasury-board-secretariat.html' target='_blank' rel='noopener noreferrer'>Treasury Board of Canada Secretariat</a>, <a href='http://vaellaconsulting.com/' target='_blank' rel='noopener noreferrer'>Vaella Consulting Inc.</a>, and on my own technical support company, and I loved it. I've also worked on a variety of personal projects, which can be found on <a href='https://github.com/BenJeau' target='_blank' rel='noopener noreferrer'>my GitHub</a> or on the <a id='projectlink'>projects tab</a>. However, I'm currently focusing my time on my studies at the <a href='https://www.uottawa.ca/en' target='_blank' rel='noopener noreferrer'>University of Ottawa</a>, and I'm excited to be working the field that I'm studying. <br/> <br/> 
			Furthermore, I've also received the <b>Chancellor's Scholarship of the Faculty of Engineering</b>, <b>Dean’s Excellence Award</b>, <b>Governor General's Academic Medal</b>, and <b>Lieutenant Governor’s Community Volunteer Award for Students</b>. I was as well a semi-finalist for <a href='https://loranscholar.ca/' target='_blank' rel='noopener noreferrer'>Loran Scholars</a>.`,
			fr: `Je suis un étudiant en génie logiciels avec un intérêt pour le fonctionnement et l'évolution rapide de la technologie, plus particulièrement dans le domaine de la <b>criminalistique</b> et du <b>développement d'applications mobile</b>. <br/> <br/>
			Dans le passé, j'ai travailler à <a href='http://www.ic.gc.ca/eic/site/icgc.nsf/fra/accueil' target='_blank' rel='noopener noreferrer'>Innovation, Sciences et Développement économique Canada</a>, <a href='https://www.canada.ca/fr/secretariat-conseil-tresor.html' target='_blank' rel='noopener noreferrer'>Secrétariat du Conseil du Trésor du Canada</a>, <a href='http://vaellaconsulting.com/' target='_blank' rel='noopener noreferrer'>Vaella Consulting Inc.</a> et pour ma propre compagnie de soutien technique, dans laquelle j'ai adoré. J'ai également travaillé sur divers projets personnels qui sont disponibles sur <a href='https://github.com/BenJeau' target='_blank' rel='noopener noreferrer'>mon GitHub</a> ou sur l'onglet de <a  id='projectlink'>projets</a>.  Cependant, je consacre maintenant un gros montant de mon temps à mes études à <a href='https://www.uottawa.ca/fr' target='_blank' rel='noopener noreferrer'>Université d'Ottawa</a> et je suis impatient de travailler dans le domaine que j'étudie. <br/> <br/> 
			De plus, j'ai également reçu la bourse du <b>chancelier de la Faculté de génie</b>, <b>la bourse d'excellence du doyen</b>, la <b>médaille académique du gouverneur général</b> et le <b>prix du lieutenant-gouverneur pour l'action bénévole communautaire</b>. J'étais aussi semi-finaliste pour la <a href='https://www.boursierloran.ca/' target='_blank' rel='noopener noreferrer'>bourse Loran</a>.`
		},
	},
};
