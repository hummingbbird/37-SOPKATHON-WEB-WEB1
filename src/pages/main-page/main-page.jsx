import sampleImage from "../../assets/images/eya.jpeg";
import sampleImage2 from "../../assets/images/sample2.jpeg";
import sampleImage3 from "../../assets/images/sample3.jpg";
import { MainGrid } from "../../components/main-grid/main-grid";
import * as styles from "./main-page.css";

const MOCK_VIDEOS = [
  {
    id: 1,
    nickname: "사용자1",
    likeCount: 10,
    imageUrl: sampleImage,
  },
  {
    id: 2,
    nickname: "사용자2",
    likeCount: 20,
    imageUrl: sampleImage2,
  },
  {
    id: 3,
    nickname: "사용자3",
    likeCount: 30,
    imageUrl: sampleImage3,
  },
  {
    id: 4,
    nickname: "사용자4",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    id: 5,
    nickname: "사용자5",
    likeCount: 40,
    imageUrl: sampleImage2,
  },
  {
    id: 6,
    nickname: "사용자6",
    likeCount: 40,
    imageUrl: sampleImage3,
  },
  {
    id: 7,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    id: 8,
    nickname: "사용자5",
    likeCount: 40,
    imageUrl: sampleImage2,
  },
  {
    id: 9,
    nickname: "사용자6",
    likeCount: 40,
    imageUrl: sampleImage3,
  },
  {
    id: 10,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
];

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainGrid videos={MOCK_VIDEOS} />;
    </div>
  );
};

export default MainPage;
