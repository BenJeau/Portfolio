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
	if (typeof window !== 'undefined') localStorage.setItem(langKey, lang);
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
	let lang;
	if (typeof window !== 'undefined') lang = localStorage.getItem(langKey);

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
			en: 'Here is a list of my Github projects',
			fr: 'Voici une liste de mes projets Github',
		},
		no_readme: {
			en: 'No README file is present in the selected project, but you can still see the content of the project by clicking ',
			fr: 'Aucun fichier README n’est présent dans le projet sélectionné, mais vous pouvez toujours voir le contenu du projet en cliquant '
		},
		no_readme_link: {
			en: 'here',
			fr: 'ici'
		},
		section: {
			en: ['Mobile', 'Games', 'Robotics', 'Other'],
			fr: ['Mobile', 'Jeux', 'Robotiques', 'Autres']
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
			en: `I'm an Software Engineering student with interest in the advancement of technology and its inner workings, more specifically in the <b>field of forensics</b> and <b>mobile development</b>.`,
			fr: `Je suis un étudiant en génie logiciels avec un intérêt pour le fonctionnement et l'évolution rapide de la technologie, plus particulièrement dans le domaine de la <b>criminalistique</b> et du <b>développement d'applications mobile</b>. <br/> <br/>`
		}
	},
};
