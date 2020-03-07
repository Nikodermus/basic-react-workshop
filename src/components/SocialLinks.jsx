import React from 'react';
import Facebook from '../svg/Facebook';
import Github from '../svg/Github';
import Instagram from '../svg/Instagram';

const networks = [
    {
        link: 'http://fb.com/debakatas',
        Img: Facebook,
    },
    {
        link: 'http://instagram.com/debaktas',
        Img: Instagram,
    },
    {
        link: 'http://github.com/Nikodermus',
        Img: Github,
    },
];

const SocialLinks = () => (
    <div className="social-media">
        {networks.map(({ link, Img }) => (
            <a
                href={link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img></Img>
            </a>
        ))}
    </div>
);

export default SocialLinks;
