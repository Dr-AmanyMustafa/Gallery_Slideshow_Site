import { useEffect, useState } from "react";
import './ProgressBar.css';


const ProgressBar = ({ ImageIndex, images }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setProgress(((ImageIndex + 1) / images.length) * 100);
  }, [ImageIndex, images]);

  return (
    <div className="progressBar" style={{ width: `${progress}%` }}></div>
    
  );
};

export default ProgressBar;
