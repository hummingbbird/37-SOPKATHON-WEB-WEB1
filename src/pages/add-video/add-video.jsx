import { useState } from "react";
import AddVideoHeader from "../../components/add-video-header/add-video-header";
import { Button } from "../../components/button/button";
import * as styles from "./add-video.css";
import plusGrayIcon from "../../assets/icons/plus-gray.png";

const AddVideo = () => {
  const [description, setDescription] = useState("");

  const handleVideoSelect = () => {
    // 영상 선택 로직
    console.log("영상 선택");
  };

  const handleUpload = () => {
    // 업로드 로직
    console.log("업로드", description);
  };

  return (
    <div>
      <AddVideoHeader />
      <div className={styles.container}>
        <div className={styles.videoSelectArea} onClick={handleVideoSelect}>
          <img src={plusGrayIcon} alt="추가" className={styles.plusIcon} />
          <span className={styles.selectText}>영상 선택하기</span>
        </div>

        <textarea
          className={styles.textArea}
          placeholder="게시글 작성 (최대 50자)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={50}
        />

        <div className={styles.buttonWrapper}>
          <Button type="primary" size="medium" onClick={handleUpload}>
            업로드하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
