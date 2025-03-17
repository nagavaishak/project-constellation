
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';

// Interactive background component
const InteractiveBackground = () => {
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

    // Matrix-like effect settings
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);
    
    // Create nodes for web-like effect
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = 30;
    
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
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    });

    // Draw function
    function draw() {
      // Clear the canvas with semi-transparent background for trailing effect
      ctx.fillStyle = 'rgba(16, 18, 27, 0.1)';
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
        const dx = mousePosition.x - node.x;
        const dy = mousePosition.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          node.vx -= force * dx / distance * 0.1;
          node.vy -= force * dy / distance * 0.1;
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

const Index = () => {
  return (
    <Layout>
      <div className="container relative">
        {/* Hero Section with Interactive Background */}
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <InteractiveBackground />
          </div>
          <AnimatedSection className="space-y-6 max-w-3xl relative z-10">
            <span className="text-sm md:text-base text-primary">Hi, my name is</span>
            <h1 className="text-4xl md:text-6xl font-bold">Naga Vaishak S K</h1>
            <h2 className="text-3xl md:text-5xl text-muted-foreground font-medium">
              Cloud engineer & stealthpreneur.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a cloud engineer by profession and stealthpreneur by passion.
              Currently, I'm working on a venture called Ethica Labs, focusing on building ethical and sustainable digital solutions.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/nagavaishak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/naga-vaishak-a322b2204/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <Link
                to="/contact"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Contact me"
              >
                <Mail size={24} />
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
