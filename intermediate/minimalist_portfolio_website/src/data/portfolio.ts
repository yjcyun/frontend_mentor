import manage from '../assets/portfolio/image-portfolio-manage@2x.jpg';
import manageDetailHero from '../assets/detail/image-manage-hero@2x.jpg';
import manageDetailPreview1 from '../assets/detail/image-manage-preview-1@2x.jpg';
import manageDetailPreview2 from '../assets/detail/image-manage-preview-2@2x.jpg';

import bookmark from '../assets/portfolio/image-portfolio-bookmark@2x.jpg';
import bookmarkDetailHero from '../assets/detail/image-bookmark-hero@2x.jpg';
import bookmarkDetailPreview1 from '../assets/detail/image-bookmark-preview-1@2x.jpg';
import bookmarkDetailPreview2 from '../assets/detail/image-bookmark-preview-2@2x.jpg';

import insure from '../assets/portfolio/image-portfolio-insure@2x.jpg';
import insureDetailHero from '../assets/detail/image-insure-hero@2x.jpg';
import insureDetailPreview1 from '../assets/detail/image-insure-preview-1@2x.jpg';
import insureDetailPreview2 from '../assets/detail/image-insure-preview-2@2x.jpg';

import fylo from '../assets/portfolio/image-portfolio-fylo@2x.jpg';
import fyloDetailHero from '../assets/detail/image-fylo-hero@2x.jpg';
import fyloDetailPreview1 from '../assets/detail/image-fylo-preview-1@2x.jpg';
import fyloDetailPreview2 from '../assets/detail/image-fylo-preview-2@2x.jpg';

export interface PortfolioType {
  id: number;
  slug: string;
  hero_img: string;
  hero_img_alt: string;
  title: string;
  description: string;
  skills: string[];
  project_background: string;
  preview1: string;
  preview2: string;
  overviewImg: string;
  overviewImgAlt: string;
}

export const portfolio: PortfolioType[] = [
  {
    id: 0,
    slug: 'manage',
    hero_img: manageDetailHero,
    hero_img_alt: 'A mockup of Manage site',
    title: 'Manage',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    skills: ['Interaction Design / Front End Development', 'HTML / CSS / JS'],
    project_background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    preview1: manageDetailPreview1,
    preview2: manageDetailPreview2,
    overviewImg: manage,
    overviewImgAlt: 'A mockup of Manage site',
  },
  {
    id: 1,
    slug: 'bookmark',
    hero_img: bookmarkDetailHero,
    hero_img_alt: 'A mockup of Bookmark site',
    title: 'Bookmark',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
    skills: ['Interaction Design / Front End Development', 'HTML / CSS / JS'],
    project_background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    preview1: bookmarkDetailPreview1,
    preview2: bookmarkDetailPreview2,
    overviewImg: bookmark,
    overviewImgAlt: 'A mockup of Bookmark site',
  },
  {
    id: 2,
    slug: 'insure',
    hero_img: insureDetailHero,
    hero_img_alt: 'A mockup of Insure site',
    title: 'Insure',
    description:
      'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
    skills: ['Interaction Design / Front End Development', 'HTML / CSS / JS'],
    project_background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    preview1: insureDetailPreview1,
    preview2: insureDetailPreview2,
    overviewImg: insure,
    overviewImgAlt: 'A mockup of Insure site',
  },
  {
    id: 3,
    slug: 'fylo',
    hero_img: fyloDetailHero,
    hero_img_alt: 'A mockup of Fylo site',
    title: 'Fylo',
    description:
      'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
    skills: ['Interaction Design / Front End Development', 'HTML / CSS / JS'],
    project_background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    preview1: fyloDetailPreview1,
    preview2: fyloDetailPreview2,
    overviewImg: fylo,
    overviewImgAlt: 'A mockup of Fylo site',
  },
];
