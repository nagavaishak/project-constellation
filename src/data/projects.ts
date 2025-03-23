import { ProjectProps } from '@/types/project';

export const projects: ProjectProps[] = [
  {
    id: '4',
    title: 'Ethica Labs',
    description: 'Building ethical and sustainable digital solutions.',
    tags: ['Sustainability', 'Ethics', 'Technology'],
    image: '/lovable-uploads/9c371112-78e7-496c-82f3-ee352cf17e1a.png',
    githubUrl: 'https://github.com/nagavaishak',
    liveUrl: 'https://ethicalabs.netlify.app/',
    slug: 'ethica-labs',
    content: `
# Ethica Lab: Advancing Ethical AI Governance

## Executive Summary
Artificial intelligence (AI) has become a transformative force across industries, but its rapid advancement raises significant ethical, regulatory, and governance challenges. Ethica Lab is dedicated to ensuring AI is developed and deployed responsibly by providing organizations with the tools, frameworks, and insights necessary to navigate complex AI governance landscapes. This white paper outlines our approach, methodologies, and the value we offer to enterprises and policymakers.

## Introduction
As AI adoption accelerates, organizations face increasing pressure to comply with regulatory standards, mitigate bias, ensure transparency, and maintain accountability. Without proper governance, AI systems can lead to unintended consequences, including discrimination, privacy violations, and security risks. Ethica Lab aims to bridge this gap by developing AI governance solutions that align with global best practices.

## The Need for AI Governance
- **Regulatory Compliance** – Governments and regulatory bodies worldwide are introducing AI regulations (e.g., EU AI Act, India's Digital Personal Data Protection Act). Companies must stay ahead of evolving compliance requirements.
- **Ethical Considerations** – AI must be designed to uphold fairness, avoid bias, and ensure inclusivity.
- **Security & Privacy** – AI systems process vast amounts of data, requiring robust privacy-preserving mechanisms to safeguard user information.
- **Trust & Transparency** – Organizations must adopt explainability and transparency measures to build trust in AI systems.

## Ethica Lab's Approach
Ethica Lab provides a structured framework to help enterprises develop, assess, and monitor AI systems ethically. Our methodology consists of:

- **AI Risk Assessment Framework** – A comprehensive assessment of AI models to identify risks related to bias, transparency, and security.
- **Compliance Automation** – AI-powered tools that help organizations adhere to AI regulations through automated audits and documentation.
- **Bias Mitigation & Fairness Tools** – Advanced fairness testing and bias correction mechanisms to ensure non-discriminatory AI.
- **Explainability & Interpretability Solutions** – Implementing model explainability techniques to improve stakeholder understanding and trust.
- **Training & Advisory Services** – Workshops, guidelines, and policy recommendations for organizations to establish internal AI governance frameworks.

## Case Study: Ethical AI in Action
Scenario: A financial institution faced challenges ensuring fair credit scoring using AI. Ethica Lab conducted an AI risk audit, identifying bias in loan approval decisions. By integrating fairness-enhancing algorithms and explainability tools, the institution improved compliance and fairness, reducing bias by 30% while maintaining model accuracy.

## Conclusion
AI governance is no longer optional—it is a business imperative. Ethica Lab enables organizations to navigate AI's ethical challenges by providing practical solutions for responsible AI development. By partnering with Ethica Lab, enterprises can ensure their AI systems align with global ethical standards while fostering innovation and trust.
    `
  },
  {
    id: '1',
    title: 'Censor-Analyzer',
    description: 'Social Media Censoring using visual sentiment analysis. A dynamic system that identifies and filters inappropriate content in real time on social media platforms.',
    tags: ['Flutter', 'TensorFlow', 'Firebase', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603',
    githubUrl: 'https://github.com/nagavaishak/censor-analyzer',
    slug: 'censor-analyzer',
    content: `
# Social Media Censoring using Visual Sentiment Analysis

## Objective
The project aims to create a dynamic system that identifies and filters inappropriate content (e.g., vulgar or offensive images) in real time on a social media platform. This platform resembles apps like Instagram or Facebook, allowing users to upload images, browse feeds, and interact with other users while ensuring safety through automated content moderation.

## Tech Stack

### Front-End:
- **Flutter**: Used for building a cross-platform app that runs on Android, iOS, and Windows.
- **Dart**: Programming language powering Flutter.

### Back-End:
- **Firebase APIs**: For authentication, real-time database management, and cloud storage.

### Machine Learning:
- **InceptionV3 (Transfer Learning Model)**: Used for image classification. Pre-trained on the ImageNet dataset with 78.1%+ accuracy.
- **TensorFlow**: Framework used for model training and implementation.
- **TFLite (TensorFlow Lite)**: Optimized for mobile and embedded devices, enabling real-time classification.

### Development Tools:
- Visual Studio Code
- Android Studio
- Netron (Model visualization)
- Google Colab (Model training and preprocessing)

### Programming Languages:
- Python (for ML model training and preprocessing)
- Dart (for the app's business logic and interface)

## Key Features

### Real-Time Image Moderation:
- Filters offensive or vulgar content before upload.
- Provides warnings to users if inappropriate content is detected.

### Fully Functional Social Media App:
- User registration and login.
- Feed to browse posts.
- User interactions like comments, likes, and profile searches.

### Machine Learning Integration:
- Pre-trained InceptionV3 model fine-tuned to detect specific types of inappropriate content (e.g., gore).
- Classification accuracy: 96.67%.

### Scalable and Cross-Platform:
- Single codebase supports multiple platforms.

## Future Improvements
- Extending moderation capabilities to detect nudity, profane text, and other harmful content.
- Enhancing the dataset and model to increase accuracy further.
- Adding more features to improve app usability and performance.
    `
  },
  {
    id: '2',
    title: 'Vaccine App',
    description: 'FrontLine Health workers And Mental Health Analysis with Vaccine Tracker. Provides daily tips, latest news, vaccine availability tracking, community forum for emergencies, and mental health analysis.',
    tags: ['Android Studio', 'Firebase', 'Figma', 'Git'],
    image: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0',
    githubUrl: 'https://github.com/nagavaishak/vaccine-app',
    slug: 'vaccine-app',
    content: `
# FrontLine Health workers And Mental Health Analysis with Vaccine Tracker

## Problem Description
This project concentrates on problems faced by all the individuals for Front Line Health workers and also the individuals at home due to Covid-19 pandemic.

## Key Features
- Every day tips and Latest news
- FrontLine Health workers resources
- Vaccine availability tracking
- Community forum for emergencies
- Mental Health Analysis

## Technology Stack
- **UI/UX**: Figma
- **Front-end application**: Android Studio
- **Back-end of the application**: Firebase
- **Version Control**: Git
    `
  },
  {
    id: '3',
    title: 'Fake Product Identification',
    description: 'A blockchain-based solution for identifying and preventing counterfeit products in the market, ensuring authenticity and trust for consumers.',
    tags: ['Java', 'Blockchain', 'Smart Contracts'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603',
    githubUrl: 'https://github.com/nagavaishak/fake-product',
    slug: 'fake-product-identification',
    content: `
# Fake Product Identification Using Blockchain

## Overview
This project is a blockchain-based solution for detecting counterfeit products. It provides a transparent and tamper-proof system where manufacturers, distributors, and consumers can verify the authenticity of products using blockchain technology.

## Features
- **Blockchain Integration**: Secure and immutable ledger for product authenticity.
- **Unique Product Identification**: Each product is assigned a unique hash on the blockchain.
- **Tamper-Proof Verification**: Ensures that product data cannot be altered or faked.
- **Smart Contracts**: Automates the verification process for authenticity.
- **User-Friendly Interface**: Consumers can scan QR codes or enter product IDs to verify authenticity.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (JSP for dynamic content)
- **Backend**: Java (JSP & Servlets)
- **Database**: MySQL
- **Blockchain**: Ethereum / Hyperledger (depending on implementation)
- **Smart Contracts**: Solidity (for Ethereum-based implementation)
- **Server**: Apache Tomcat

## Installation & Setup

### Prerequisites
- Java 8 or higher
- Apache Tomcat Server
- MySQL Database
- Node.js (if interacting with Ethereum blockchain)
- Metamask (for blockchain interaction)

### Set up the Database
- Import the db.sql file into MySQL.
- Update database credentials in the application.

### Deploy on Tomcat
- Place the project folder in the Tomcat webapps directory.
- Start the Tomcat server.

### Run the Application
- Access the application via http://localhost:8080/fake-product/.
- Use the web interface to verify products.

## How Blockchain is Used
- Every product entry is stored as a transaction on the blockchain.
- Each product has a unique hash, preventing duplication or forgery.
- Consumers can retrieve product history and authenticity data from the blockchain.

## Contribution
Feel free to contribute by creating a pull request or raising an issue for improvements.
    `
  },
];
