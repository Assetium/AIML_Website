import { StaticImageData } from "next/image";

export type InsightsChunkArray = {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageSrc: StaticImageData;
};

export type TestimonialChunkArray = {
  id: string;
  name: string;
  text: string;
  imageSrc: StaticImageData;
};

export interface CardData {
  id: string;
  title: string;
  contentOne: string; // Raw HTML content
  category: string;
  author?: string;
  date?: string;
  readTime?: string;
  headerImage: string;
  link?: string; // Optional link property
}

export interface SectionOneProps {
  headerText: string;
  paragraphText1: string;
  paragraphText2?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  leftButtonHref?: string; // Optional prop for left button link
  rightButtonHref?: string; // Optional prop for right button link
  fontColor?: string;
  headerFontSize?: number;
  spanText?: string;
}

export type CardTwoProps = {
  name: string;
  text: string;
  imageSrc: StaticImageData;
  className?: string; // Add optional className prop
};

export type ManagementTeamProps = {
  name: string;
  position: string;
  imageUrl: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  department?: string;
  description?: string;
};

export type CardThreeProps = {
  imageSrc: StaticImageData | string; // Use StaticImageData if images are imported, or string if coming from a URL
  title: string;
  description?: string;
};

export type NewsletterItem = {
  id: string;
  title: string;
  content: string;
  image: string;
  backgroundImage: string;
  isSent: boolean;
  performedBy: string;
};

export type MediaItem = {
  id: string;
  headerImage: string;
  category: string;
  title: string;
  isFeatured?: boolean;
  contentOne: string;
  author?: string;
  date?: string;
  readTime?: string;
  link?: string;
};

export type ExecutiveType = {
  firstName?: string;
  surname?: string;
  title?: string;
  emailAddress?: string;
  bvn?: string | number; // Allowing both string and number types
  dob?: string;
  gender?: string;
  idNumber?: string;
  phoneNumber?: string;
  authorizedSignatoryMeansOfIdentity?: string;
  isPoliticalExposedPerson?: boolean;
  isPoliticalExposedPersonDetails?: string;
  lga?: string;
  middlename?: string;
  occupation?: string;
  placeOfWork?: string;
  residentialAddress?: string;
  signatureClass?: string;
  state?: string;
};
