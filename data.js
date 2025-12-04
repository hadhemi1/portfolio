// Données du portfolio basées sur le CV de Hadhemi Khadhrawi
// Exposer sur `window` pour être accessible depuis d'autres scripts
window.profileData = {
  name: "Hadhemi Khadhrawi",
  title: "Étudiante en 3ème année ingénieur Télécommunication, spécialité Data Science",
  tagline:
    "Étudiante ingénieure en télécommunications, spécialisée en Data Science, avec un fort intérêt pour le Deep Learning, l’imagerie médicale et le prototypage d’applications IA. À la recherche d’un stage PFE.",
  contact: {
    phone: "+216 54 261 332",
    email: "khadhrawi.hadhemi@gmail.com",
    linkedin: "https://www.linkedin.com/in/hadhemikhadhrawi0",
  },
  skills: {
    languages: ["Python", "C", "Java", "SQL"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    mlFrameworks: ["PyTorch", "TensorFlow", "Keras"],
    devTools: ["Git", "GitHub", "Docker"],
    web: ["Flask", "Streamlit"],
  },
  experiences: [
    {
      title: "Stage en Deep Learning – Génération d’images PET",
      company: "Get Wireless (SARL)",
      period: "Juil. 2025 – Août 2025",
      bullets: [
        "Développement d’un pipeline de prétraitement pour scanners CT (normalisation, redimensionnement, data augmentation).",
        "Conception et entraînement de modèles U-Net et Pix2Pix pour générer des images PET à partir de scanners CT.",
        "Évaluation comparative des architectures (PSNR, SSIM, MAE) et analyse des limites pour identifier la solution optimale.",
      ],
      tags: ["Deep Learning", "Medical Imaging", "U-Net", "Pix2Pix"],
    },
    {
      title: "Stage en Deep Learning – Détection de maladies chroniques",
      company: "Biware",
      period: "Juin 2025 – Juil. 2025",
      bullets: [
        "Détection de maladies chroniques à partir d’images du fond d’œil (ODIR-5K).",
        "Utilisation de CNN et de Transfer Learning (ResNet, EfficientNet).",
        "Évaluation par accuracy, F1-score et ROC-AUC.",
      ],
      tags: ["Fundus Images", "CNN", "Transfer Learning"],
    },
    {
      title: "Stage en Développement Odoo",
      company: "TINEST (SAS)",
      period: "Juil. 2024 – Août 2024",
      bullets: [
        "Exploration de l’ERP Odoo et compréhension des modules métiers.",
        "Personnalisation de modules pour répondre à des besoins spécifiques.",
        "Participation aux réunions clients et analyse des besoins.",
      ],
      tags: ["Odoo", "ERP", "Analyse de besoins"],
    },
  ],
  projects: [
    {
      title: "Reconnaissance acoustique",
      period: "Jan. 2025 – Mai 2025",
      description:
        "Comparaison de modèles (HMM, SVM, CNN, LSTM, BiLSTM) pour la reconnaissance acoustique et conception de modèles hybrides CNN-LSTM / LSTM-HMM. Utilisation de YAMNET pour l’extraction de features et déploiement d’une application Flask.",
      tags: ["Audio Classification", "Deep Learning", "Flask"],
    },
    {
      title: "Data augmentation pour le contrôle qualité industriel avec GAN",
      period: "Mai 2024",
      description:
        "Développement d’un GAN pour générer des défauts industriels rares, rééquilibrage des classes et amélioration des performances de modèles CNN pour le contrôle qualité.",
      tags: ["GAN", "Computer Vision", "Industrial Quality"],
    },
    {
      title: "Classification de texte juridique avec BERT",
      period: "Nov. 2024",
      description:
        "Fine-tuning de modèles BERT sur un corpus juridique pour la classification de textes, avec évaluation via précision, rappel et F1-score.",
      tags: ["NLP", "BERT", "Transformers"],
    },
  ],
  education: [
    {
      school: "École Nationale d’Électronique et des Télécommunications de Sfax",
      period: "2023 – Présent",
      details: "Cycle d’ingénieur en génie de télécommunications, spécialité Data Science.",
    },
    {
      school: "Institut Préparatoire aux Études d’Ingénieurs de Monastir",
      period: "2021 – 2023",
      details: "Cycle préparatoire scientifique (physique-chimie).",
    },
  ],
  certifications: [
    "CCNA : Introduction to Networks (Cisco)",
    "Microsoft AI Fundamentals (AI-900) – Microsoft Learn",
    "Hackathon : Solution intelligente pour le secteur automobile – DAAD",
  ],
};
