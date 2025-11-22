import Tab from "../my-page/components/tab/tab";

const MainPage = () => {
  const handleTabChange = (index, value) => {
    console.log("Tab changed:", index, value);
  };

  return (
    <div>
      <h1>메인 페이지</h1>
      <p>홈 화면입니다.</p>
      <Tab defaultTab={0} onChange={handleTabChange} />
    </div>
  );
};

export default MainPage;
