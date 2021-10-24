import React, { FC } from 'react';
import '../../locales/config';
import { useTranslation } from 'react-i18next';
import * as c from '../../constants/constants';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <small>
      <a href={c.footer.link} target="_blank" rel="noreferrer">
        {c.footer.name}
      </a>&nbsp;
      {t('footer.content')}
    </small>
  );
};

export default Footer;
