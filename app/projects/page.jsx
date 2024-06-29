'use client';

import React from 'react';
import ProjectsContainer from '@/containers/Projects';
import styles from './styles.module.css'; // Doğru dosya yolunu kullanarak import ediyoruz

function ProjectsPage() {
  return (
    <div className={styles.projectsContainer}>
      <ProjectsContainer />
    </div>
  );
}

export default ProjectsPage;
