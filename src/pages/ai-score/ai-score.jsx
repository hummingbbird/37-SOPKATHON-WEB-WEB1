import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import * as styles from "./ai-score.css";
import backgroundImage from "../../assets/images/ai-score-background.svg";

const AiScore = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate("/");
  };

  const handleUpload = () => {
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.header}>점수 확인</h1>

      <div className={styles.scoreBoardWrapper}>
        <img
          src={backgroundImage}
          alt="점수 배경"
          className={styles.scoreBoardImage}
        />
        <p className={styles.scoreText}>78점</p>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <Button type="gray" size="medium" onClick={handleDelete}>
            삭제하기
          </Button>
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="primary" size="medium" onClick={handleUpload}>
            업로드
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiScore;
