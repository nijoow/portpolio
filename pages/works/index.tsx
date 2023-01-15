import Seo from "../../components/_common/Seo";
import Link from "next/link";
import styles from "../../styles/works/Works.module.css";
import { prefix } from "../../config/config";

const works = [
  {
    id: 1,
    pageName: "portfolio",
    name: "portfolio",
    url: "https://nijoow.github.io/",
    imgSrc: "portfolio.PNG",
  },
  {
    id: 5,
    pageName: "treenow",
    name: "Treenow",
    url: "https://nijoow.github.io/CatchTheCandy_p5/",
    imgSrc: "",
  },
  {
    id: 6,
    pageName: "nijoow-launchpad",
    name: "nijoow-launchpad",
    url: "https://nijoow-launchpad.vercel.app/",
    imgSrc: "nijoow_launchpad.png",
  },
  {
    id: 2,
    pageName: "pnudt",
    name: "MEMORY",
    url: "https://nijoow.github.io/PNUDT12/",
    imgSrc: "pnudt12.png",
  },

  {
    id: 4,
    pageName: "catchTheCandy",
    name: "CATCH THE CANDY",
    url: "https://nijoow.github.io/CatchTheCandy_p5/",
    imgSrc: "catchTheCandy.PNG",
  },
  {
    id: 3,
    pageName: "prflLink",
    name: "prfl.link",
    url: "https://prfl.link/",
    imgSrc: "prflLink.PNG",
  },
];

//
export default function Works() {
  return (
    <div>
      <Seo customMeta={{ title: "Works" }} />
      <section>
        <div className="title">
          <Link href="/works">
            <a>Works</a>
          </Link>{" "}
        </div>
        <div className={styles.gridContainer}>
          {works.map((work) => {
            return (
              <div
                className={`${styles.card} ${styles.cardMini}`}
                key={work.id}
              >
                {work.imgSrc === "" ? (
                  <div className={styles.cardImg}>이미지가 없습니다</div>
                ) : (
                  <img
                    src={`${prefix}/images/works/${work.imgSrc}`}
                    width="384"
                    height="216"
                    className={styles.cardImg}
                  />
                )}
                <Link href={`works/${work.pageName}`}>
                  <a>
                    <div className={styles.cardOverlay}>
                      <span>{work.name} &gt;</span>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
