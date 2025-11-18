import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  // ... 기존 코드 ...

  const navigate = useNavigate();

  const handleCardClick = (trend: Trend) => {
    // ✅ 상세 페이지로 이동
    navigate(`/trends/${trend.id}`);
  };

  // ... 나머지 코드 ...
};
