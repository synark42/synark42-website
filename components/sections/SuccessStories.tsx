"use client";

import TextPressure from "@/components/TextPressure";

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <h2>Success Stories</h2>
      <div className="stories-grid">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="story blurred-box">
            <TextPressure
              text="Revealing Soon"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
