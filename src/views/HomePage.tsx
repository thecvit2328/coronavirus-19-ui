import React, { FC } from 'react';
import Layout from './Layout';
import '../locales/config';
import { useTranslation } from 'react-i18next';

const HomePage: FC = ({ children }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="statistics">
        <div className="country">

          <div>
            
          </div>
          {t("covid19.population")} 70,029,772
          
          </div>
        <div className="covid19">
          <div className="wrapper">
            <div className="card">
              <div className="card-body">
                <h3>100,042</h3>
                <p className="topic">{t("covid19.actived")}</p>
                <p className="new_cases warning">+8675</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>2,432</h3>
                <p className="topic">{t("covid19.critical")}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>18,799</h3>
                <p className="topic">{t("covid19.death")}</p>
                <p className="new_cases danger">+44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
