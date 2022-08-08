import React, { useRef, useEffect } from 'react';

type Props = {
  resetEachFrame?: boolean,
  background?: string,
}

const Canvas: React.FC<Props> = ({
  resetEachFrame = false,
  background
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const clearCanvas = () => {
    if (contextRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = contextRef.current;
      const { offsetWidth, offsetHeight } = canvas;

      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      context.clearRect(0, 0, offsetWidth, offsetHeight);

      if (background) {
        context.fillStyle = background;
        context.fillRect(0, 0, offsetWidth, offsetHeight);
      }
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');

      clearCanvas();

      
    }
  });

  return (
    <canvas
      ref={canvasRef}
    />
  );
}

export default Canvas;