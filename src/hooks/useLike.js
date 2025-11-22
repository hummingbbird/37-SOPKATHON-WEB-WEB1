import { useState, useEffect } from "react";
import { toggleLike } from "../apis/videoApi";

const getLikedVideos = () => {
  const memberId = localStorage.getItem("memberId") || "1";
  const likedVideos = localStorage.getItem(`likedVideos_${memberId}`);
  return likedVideos ? JSON.parse(likedVideos) : [];
};

const saveLikedVideos = (likedVideos) => {
  const memberId = localStorage.getItem("memberId") || "1";
  localStorage.setItem(`likedVideos_${memberId}`, JSON.stringify(likedVideos));
};

export const useLike = (videoId, initialLikeCount = 0) => {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    const likedVideos = getLikedVideos();
    setIsLiked(likedVideos.includes(videoId));
  }, [videoId]);

  const handleLike = async () => {
    if (isLiking) {
      return;
    }

    try {
      setIsLiking(true);
      const memberId = localStorage.getItem("memberId") || "1";

      await toggleLike(videoId, memberId);

      const likedVideos = getLikedVideos();
      let newLikedVideos;

      if (isLiked) {
        newLikedVideos = likedVideos.filter((id) => id !== videoId);
        setLikeCount((prev) => prev - 1);
        setIsLiked(false);
      } else {
        newLikedVideos = [...likedVideos, videoId];
        setLikeCount((prev) => prev + 1);
        setIsLiked(true);
      }

      saveLikedVideos(newLikedVideos);
    } catch (error) {
      console.error("좋아요 실패:", error);
      throw error;
    } finally {
      setIsLiking(false);
    }
  };

  return {
    likeCount,
    isLiked,
    isLiking,
    handleLike,
  };
};
