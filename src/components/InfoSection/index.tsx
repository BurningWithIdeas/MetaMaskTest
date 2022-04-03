import React from 'react';
import { InfoSectionProps } from './InfoSection.types';
import './InfoSection.styles.css';

const InfoSection: React.FC<InfoSectionProps> = ({ imageLink, header, message }) => (
  <div className="account-page">
    <img className="account-page__image" src={imageLink} />
    <h1>{header}</h1>
    <span>{message}</span>
  </div>
);

export default InfoSection;
