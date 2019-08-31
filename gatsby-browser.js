import "./src/global.scss";
import 'remixicon/fonts/remixicon.css';
import './src/emoji.css';

import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';

export const wrapRootElement = ({element}) => (
    <LanguageProvider>{element}</LanguageProvider>
)