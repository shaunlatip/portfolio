import styles from "../styles/ProjectTemplate.module.css";
import projectStyles from "../styles/Project.module.css";
import homeStyles from "../styles/Home.module.css";
import system from "../styles/System.module.css";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectTemplate() {
  // Refs for scroll navigation
  const overviewRef = useRef(null);
  const researchRef = useRef(null);
  const finalPrototypeRef = useRef(null);

  return (
    <div className="page">
      <Head>
        <title>Project Title | Shaun Latip</title>
      </Head>

      <div className={projectStyles.content}>
        <div className={projectStyles.hero}>
          <div className={projectStyles.heroContent}>
            <h1 className={`${system.h1} ${system.regular}`}>Project Title</h1>
            <p className={`${system.h6} ${system.regular}`} style={{ marginTop: 24 }}>
              Brief project description that explains the main goal and outcome
            </p>
          </div>
        </div>

        <div className={projectStyles.mainContent}>
          <div className={projectStyles.sectionContainer}>
            <div className={projectStyles.projectInfo}>
              <div>
                <b>Role</b>
                <p>
                  Lead Designer
                  <br />
                  Developer
                </p>
              </div>
              <div>
                <b>Timeline</b>
                <p>
                  Month Year to
                  <br />
                  Month Year
                </p>
              </div>
              <div>
                <b>Team</b>
                <p>
                  Team Member 1
                  <br />
                  Team Member 2
                </p>
              </div>
              <div>
                <b>Platform</b>
                <p>Web/Mobile/etc</p>
              </div>
            </div>
          </div>

          <div className={projectStyles.sections}>
            <div className={projectStyles.sectionContainerGradient} ref={finalPrototypeRef}>
              <div className={projectStyles.section}>
                <div className={projectStyles.sectionTitleLarge} style={{ alignSelf: "center" }}>
                  Final Solution
                </div>
              </div>
            </div>

            <div className={projectStyles.sectionContainer} style={{ padding: "2rem 0 2rem 0" }}>
              <div className={projectStyles.spreadRow} style={{ gap: "2rem" }}>
                <div className={projectStyles.spreadRowText}>
                  <b style={{ color: "#F0916C", fontWeight: "600" }}>01</b>
                  <h4 style={{ fontWeight: 600 }}>Key Feature One</h4>
                  <p>
                    Description of the first key feature and its benefits
                  </p>
                </div>
                <Image
                  className={styles.finalDesignGif}
                  style={{ borderRadius: "4px", border: "1px solid #E4E4E4" }}
                  alt="Feature One Demo"
                  src="/project-template/feature1.png"
                  width={600}
                  height={369}
                />
              </div>
            </div>

            <div className={projectStyles.sectionContainer} ref={researchRef}>
              <div className={projectStyles.section}>
                <div className={projectStyles.sectionTitleLarge}>Research</div>
                <h2 className={projectStyles.h2SectionHeader}>Research Method</h2>
                <b>Why this research method?</b>
                <p>
                  Explanation of why this research method was chosen and how it helped inform the project
                </p>
              </div>
            </div>

            <div className={projectStyles.sectionContainerGray}>
              <div className={projectStyles.section}>
                <div className={projectStyles.sectionTitleLarge}>Process</div>
                <p>
                  Description of the design and development process
                </p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Image
                  src="/project-template/process.png"
                  width={840}
                  height={567}
                  alt="Process documentation"
                />
              </div>
            </div>

            <div className={projectStyles.sectionContainer}>
              <div className={projectStyles.section}>
                <h2 className={projectStyles.h2SectionHeader}>Learnings</h2>
                <div className={projectStyles.olLarge}>
                  <div className={projectStyles.olItemLarge}>
                    <span style={{ fontSize: "1.5rem" }}>1</span>
                    <div>
                      <b>Key Learning One</b>
                      <p>
                        Description of first key learning from the project
                      </p>
                    </div>
                  </div>
                  <div className={projectStyles.olItemLarge}>
                    <span style={{ fontSize: "1.5rem" }}>2</span>
                    <div>
                      <b>Key Learning Two</b>
                      <p>
                        Description of second key learning from the project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer variant="project" />
    </div>
  );
} 