import React from 'react';
import { t } from '../../i18n';
const Footer: React.FunctionComponent = () => {
  return (
    <small>
      {t.footer.content}
      <a href={t.footer.link} target="_blank" rel="noreferrer">
        {t.footer.email}
      </a>
    </small>
  );
};

export default Footer;
