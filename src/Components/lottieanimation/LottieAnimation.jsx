import React, { useEffect } from 'react';

const LottieAnimation = ({ animationData }) => {
  useEffect(() => {
    // สร้าง script tag เพื่อโหลด lottie-web จาก CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.11/lottie.min.js'; // ใช้ CDN ของ lottie-web
    script.onload = () => {
      // เมื่อ script โหลดเสร็จแล้วให้โหลดและแสดง Lottie animation
      const animation = window.lottie.loadAnimation({
        container: document.getElementById('lottie-container'),  // container สำหรับอนิเมชัน
        renderer: 'svg',  // renderer ที่ใช้
        loop: true,  // ทำให้อนิเมชันวนลูป
        autoplay: true,  // ทำให้อนิเมชันเล่นอัตโนมัติ
        animationData: animationData,  // JSON ของอนิเมชันที่นำมา
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);  // ลบ script เมื่อคอมโพเนนต์ถูกลบ
    };
  }, [animationData]);

  return <div id="lottie-container" style={{ width: 300, height: 300 }}></div>;  // กำหนดขนาดของอนิเมชัน
};

export default LottieAnimation;