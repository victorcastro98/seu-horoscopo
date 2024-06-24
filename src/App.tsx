import React from "react";
import image from "./assets/sh-title.png";
import Content from "./components/Content";

function App() {
  const [content, setContent] = React.useState(false as boolean);

  const handleButtonClick = () => {
    setContent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#353DED] p-4">
      <img src={image} alt="eu" className="w-[50%]" />
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        {!content ? (
          <button
            onClick={handleButtonClick}
            className="bg-black text-light p-4 h-full rounded-3xl text-5xl
          shadow-[0_0_14px_0_rgba(196,183,255)] hover:shadow-[0_0_30px_0_rgba(196,183,255)]"
          >
            Quero meu horóscopo
          </button>
        ) : (
          <Content />
        )}
      </div>
    </div>
  );
}

export default App;
