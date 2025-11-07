import { ReactNode } from "react";

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  affiliation: string;
  visuals_placeholder: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcomes: string;
  gallery: GalleryItem[];
}