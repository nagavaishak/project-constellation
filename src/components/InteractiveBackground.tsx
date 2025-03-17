
import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Network nodes settings
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    // Mouse interaction
    let mousePosition = { x: 0, y: 0 };
    let mouseRadius = 100;
    let isMouseInCanvas = false;
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      isMouseInCanvas = true;
    });
    
    canvas.addEventListener('mouseout', () => {
      isMouseInCanvas = false;
    });

    // Draw function
    function draw() {
      // Clear the canvas with semi-transparent background for trailing effect
      ctx.fillStyle = 'rgba(16, 18, 27, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      ctx.strokeStyle = 'rgba(65, 84, 255, 0.3)';
      
      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Prevent leaving canvas
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
        
        // Mouse repulsion
        if (isMouseInCanvas) {
          const dx = mousePosition.x - node.x;
          const dy = mousePosition.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            node.vx -= force * dx / distance * 0.1;
            node.vy -= force * dy / distance * 0.1;
          }
        }
        
        // Draw the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(65, 84, 255, 0.6)';
        ctx.fill();
      }
      
      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(65, 84, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
};

export default InteractiveBackground;
