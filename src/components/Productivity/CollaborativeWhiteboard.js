// CollaborativeWhiteboard.js
import React, { useRef, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const CollaborativeWhiteboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Add initial drawing functionality
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    // Implement collaborative features using WebSockets or other real-time communication methods
  }, []);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Collaborative Whiteboard</Heading>
        <Text variant="lead" className="mt-2">
          Brainstorm and ideate with your team in real-time.
        </Text>
        <div className="mt-4">
          <canvas ref={canvasRef} width={600} height={400} className="border rounded-lg"></canvas>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="primary" onClick={handleClear}>
            Clear Whiteboard
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default CollaborativeWhiteboard;