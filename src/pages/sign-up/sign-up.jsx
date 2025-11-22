import * as styles from "./sign-up.css";
import { Input } from "./../../components/input/input";
import { Button } from "./../../components/button/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
  }); // 회원가입/로그인 데이터
  const [error, setError] = useState(false);

  // 입력 값 핸들링
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 회원가입 API
  const handleSubmit = () => {
    // const data = {
    //   nickname: formData.nickname.trim(),
    //   password: formData.password.trim(),
    // };
    const result = false;
    if (result) {
      navigate("/", { replace: true });
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>회원가입</div>
      </header>
      <div className={styles.form}>
        <div className={styles.iconBox}>앱 로고</div>
        <div className={styles.inputBox}>
          <Input
            type="text"
            value={formData.nickname}
            name="nickname"
            onChange={(e) => handleFormData(e)}
            placeholder="닉네임 입력"
          />
          <Input
            type="password"
            value={formData.password}
            name="password"
            onChange={(e) => handleFormData(e)}
            placeholder="비밀번호 입력"
          />
          {error && (
            <div className={styles.error}>
              사용할 수 없는 닉네임입니다.(임시)
            </div>
          )}
        </div>
        <Button type="primary" onClick={handleSubmit}>
          시작하기
        </Button>
      </div>
    </div>
  );
};
