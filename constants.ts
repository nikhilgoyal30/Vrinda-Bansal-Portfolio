import { Project } from './types';

export const CONTACT_INFO = {
    email: "vrindabansalwork@gmail.com",
    linkedin: "https://www.linkedin.com/in/vrinda-bansal-581b68371",
    phone: "+91 8851744802",
};

export const PROFILE_IMAGE_URL = "https://i.postimg.cc/fRD26hkd/IMG-0193.jpg";

export const PROJECTS: Project[] = [
  {
    id: "room-transformation",
    title: "Advanced Room Transformation System",
    thumbnail: "https://i.postimg.cc/L6fnYc9v/CONTEMPORARY-1.jpg",
    affiliation: "100x Engineers Program Project",
    visuals_placeholder: "A gallery or before/after slider showing AI-driven room redesigns in various styles like contemporary, minimalist, etc.",
    challenge: "Visualizing interior design concepts is a major hurdle for clients and designers alike. Traditional methods like mood boards and 2D mockups often fail to accurately convey the final look and feel, leading to costly revisions and client dissatisfaction.",
    solution: "Engineered a multi-step AI system within ComfyUI to generate high-fidelity room redesigns from a single source image. This workflow allows for the application of various design styles, preserving the room's core architecture and lighting while completely transforming its aesthetic in a photorealistic manner.",
    technologies: ["ComfyUI", "Stable Diffusion", "ControlNet", "MLSD Pre-processors", "Generative AI"],
    outcomes: "This system provides a powerful tool for rapid, cost-effective design visualization. It allows designers and clients to explore dozens of concepts in minutes, improving communication, accelerating decision-making, and ensuring the final design aligns perfectly with the creative vision.",
    gallery: [
      { type: 'image', src: 'https://i.postimg.cc/L6fnYc9v/CONTEMPORARY-1.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/VsJS1S23/SCANDINAVIAN-1.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/mgykV7Fy/INDIAN_TRADITIONAL-1.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/sg4xK5Zx/JAPANDI-1.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/FFYfmf24/MINIMALIST-1.jpg' },
    ]
  },
  {
    id: "character-fusion",
    title: "Character Fusion Systems",
    thumbnail: "https://i.postimg.cc/XvNJPXwx/Comfy-UI-temp-apiie-00040.png",
    affiliation: "100x Engineers Program Project",
    visuals_placeholder: "A gallery showcasing unique, high-fidelity portraits created by blending the features of two or more source characters.",
    challenge: "Creating entirely new, unique, and believable characters for concept art, gaming, or marketing is a time-intensive artistic process. Maintaining specific stylistic traits while blending different facial features presents a significant technical and creative challenge.",
    solution: "I developed a sophisticated portrait generation pipeline using ControlNet for structural guidance and custom-trained LoRA models for stylistic consistency. This system allows for the precise fusion of multiple character traits, resulting in high-fidelity, art-directable portraits that are entirely unique yet coherent.",
    technologies: ["LoRA Model Training", "ControlNet", "ComfyUI", "Generative AI", "Character Design"],
    outcomes: "This project demonstrates an advanced capability in model customization and controlled image generation. The system accelerates the character concepting phase by an order of magnitude, providing a powerful tool for artists and creative directors to rapidly prototype and visualize new ideas.",
    gallery: [
      { type: 'image', src: 'https://i.postimg.cc/XvNJPXwx/Comfy-UI-temp-apiie-00040.png' },
      { type: 'image', src: 'https://i.postimg.cc/zfDBQ3nn/Comfy-UI-temp-ffpku-00070.png' },
      { type: 'image', src: 'https://i.postimg.cc/8zmcwLrr/Comfy-UI-temp-ntrho-00045.png' },
      { type: 'image', src: 'https://i.postimg.cc/CKM12dj8/Comfy-UI-temp-tfgrg-00013.png' },
      { type: 'image', src: 'https://i.postimg.cc/k5M4HDxb/Comfy-UI-temp-tfgrg-00039.png' },
    ]
  },
  {
    id: "ai-advertisement",
    title: "AI Advertisement Portfolio",
    thumbnail: "https://i.postimg.cc/ZqP889J1/Whats-App-Image-2025-11-07-at-4-53-28-AM.jpg",
    affiliation: "Freelance Client Work",
    visuals_placeholder: "A dynamic video reel showcasing several short, engaging AI-generated video ads for different products or brands.",
    challenge: "Brands constantly need a high volume of fresh, engaging video content for social media, but traditional video production is slow, expensive, and difficult to scale. This creates a bottleneck that limits campaign agility and the ability to test different creative approaches.",
    solution: "Leveraged a suite of multiple AI tools to concept, script, generate, and edit high-performing video advertisements for client campaigns. This involved managing end-to-end Instagram strategies, implementing automated workflows to improve response times, and using AI to reduce content creation time, allowing for rapid iteration and deployment.",
    technologies: ["Generative Video AI", "AI Content Generation", "LoRA Model Training & Customization", "Prompt Engineering", "Creative Direction for Digital Campaigns"],
    outcomes: "This AI-driven approach delivered significant, measurable results for clients: increased engagement by 50%, improved response times by 80%, reduced content creation time by 30%, and created video content with 45% higher average view duration and 35% increased shareability.",
    gallery: [
      { 
        type: 'video', 
        src: 'https://www.youtube.com/embed/as-NHBiSJ2o',
        thumbnail: 'https://i.postimg.cc/ZqP889J1/Whats-App-Image-2025-11-07-at-4-53-28-AM.jpg'
      },
    ]
  },
  {
    id: "product-visualization",
    title: "Generative AI Product Visualization",
    thumbnail: "https://i.postimg.cc/c4YBxkPM/Generated-Image-November-07-2025-4-58AM-2.png",
    affiliation: "Freelance & R&D",
    visuals_placeholder: "A gallery showcasing a single product (e.g., a cosmetic bottle) placed in dozens of different, photorealistic AI-generated environments and lifestyle scenes.",
    challenge: "Creating a diverse library of product images for e-commerce and marketing traditionally requires costly and logistically complex photoshoots for every single environment or concept, limiting creative possibilities.",
    solution: "I utilized AI tools, including custom workflows in ComfyUI, to conduct completely virtual product photoshoots. By isolating a core product image, I can generate an infinite variety of scenes, backgrounds, and lighting conditions, creating a vast portfolio of on-brand marketing assets without a physical camera.",
    technologies: ["Product Photoshoot with AI Tools", "ComfyUI", "Stable Diffusion", "ControlNet", "Prompt Engineering & Automation"],
    outcomes: "This method drastically cuts down on the cost and time associated with traditional product photography. It provides brands with unparalleled creative flexibility, allowing for the generation of hundreds of unique marketing images for A/B testing, seasonal campaigns, and social media content in a matter of hours.",
    gallery: [
      { type: 'image', src: 'https://i.postimg.cc/c4YBxkPM/Generated-Image-November-07-2025-4-58AM-2.png' },
      { type: 'image', src: 'https://i.postimg.cc/dVYmLmYq/dior-3.png' },
      { type: 'image', src: 'https://i.postimg.cc/JzLcGcL4/Generated-Image-November-07-2025-4-57AM.png' },
      { type: 'image', src: 'https://i.postimg.cc/YCHfhfH2/Generated-Image-November-07-2025-4-58AM.png' },
      { type: 'image', src: 'https://i.postimg.cc/CxgHzHgx/Generated-Image-November-07-2025-4-58AM-1.png' },
    ]
  },
  {
    id: "fashion-photography",
    title: "AI Fashion Photography",
    thumbnail: "https://i.postimg.cc/qq6gGY2b/Generated-Image-November-07-2025-4-54AM-1.jpg",
    affiliation: "Creative Exploration",
    visuals_placeholder: "A gallery of hyper-realistic, AI-generated fashion models in various creative outfits and virtual locations.",
    challenge: "Traditional fashion photography is constrained by the high costs of hiring models, photographers, and stylists, as well as the logistics of location scouting and physical photoshoots. Creating diverse and imaginative campaign visuals is often a slow and expensive process.",
    solution: "I developed an AI-driven workflow to generate entire fashion campaigns from scratch. This involves creating hyper-realistic virtual models with consistent facial and body features, designing unique apparel concepts with text prompts, and placing these models in imaginative, AI-generated virtual locations. The process provides complete creative control over every element, from lighting to art direction.",
    technologies: ["Stable Diffusion", "ComfyUI", "ControlNet", "LoRA", "Generative Adversarial Networks (GANs)", "Virtual Set Creation"],
    outcomes: "This solution revolutionizes fashion marketing by enabling brands to produce limitless, high-fashion imagery at a fraction of the cost and time. It allows for rapid A/B testing of styles, concepts, and models, and opens up new creative avenues that are impossible to achieve with traditional photography.",
    gallery: [
      { type: 'image', src: 'https://i.postimg.cc/T15hcSnt/Generated-Image-November-07-2025-4-54AM-2.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/7hJbNcSB/Generated-Image-November-07-2025-4-54AM-3.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/rsRz9b5Z/hoodie-2-jpg.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/yNnJ601C/Generated-Image-November-07-2025-4-54AM.jpg' },
      { type: 'image', src: 'https://i.postimg.cc/qq6gGY2b/Generated-Image-November-07-2025-4-54AM-1.jpg' },
    ]
  }
];