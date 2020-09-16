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
			en: ['UI Passionate', 'Digital Forensics Enthusiast', 'Mobile/Web Developer', '4th Year Software Engineering Student'],
			fr: [
				"Passionné de conceptions d'interfaces",
				'Fanatique de juridico-informatique',
				'Développeur mobile/web',
				'Étudiant en génie logiciels de 4e année',
			],
		},
	},
	resume: {
		en: 'click here to view as a PDF',
		fr: 'cliquez ici pour la version PDF'
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
			en: `Want to know more about me? The icon near my face allows you to access my social networks. To see my resume or my detailed projects, select the category in the navigation bar below. Feel free to contact me!`,
			fr: `Voulez-vous en connaître plus à mon sujet? L'icône près de mon visage vous permet d'accéder à mes réseaux sociaux. Pour voir mon résumé ou mes projets détaillés, sélectionner la catégorie choisie dans la barre de navigation ci-dessous. N'hésitez pas à communiquer avec moi!`
		}
	},
};
