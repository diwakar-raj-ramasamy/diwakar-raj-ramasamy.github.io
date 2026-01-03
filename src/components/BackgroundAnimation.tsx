import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: Star[] = [];
        let meteors: Meteor[] = [];
        let animationFrameId: number;
        let isPressing = false;

        const handleMouseDown = () => { isPressing = true; };
        const handleMouseUp = () => { isPressing = false; };

        // Add listeners to window to catch release outside canvas
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchstart', handleMouseDown);
        window.addEventListener('touchend', handleMouseUp);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        class Star {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            opacity: number;
            twinkleSpeed: number;
            twinklePhase: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random();
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0) this.x = canvas!.width;
                if (this.x > canvas!.width) this.x = 0;
                if (this.y < 0) this.y = canvas!.height;
                if (this.y > canvas!.height) this.y = 0;

                this.twinklePhase += this.twinkleSpeed;
                this.opacity = 0.5 + Math.sin(this.twinklePhase) * 0.4;
            }

            draw() {
                if (!ctx) return;
                const baseColor = theme === 'dark' ? '255, 255, 255' : '33, 53, 71';
                ctx.fillStyle = `rgba(${baseColor}, ${Math.abs(this.opacity)})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Meteor {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            angle: number;
            active: boolean;

            constructor(forced: boolean = false) {
                this.x = 0;
                this.y = 0;
                this.length = 0;
                this.speed = 0;
                this.opacity = 0;
                this.angle = Math.PI / 4;
                this.active = false;
                if (forced) this.reset();
            }

            reset() {
                this.active = true;
                this.x = Math.random() * canvas!.width + 200;
                this.y = -100;
                if (Math.random() > 0.5) {
                    this.x = -100;
                    this.y = Math.random() * canvas!.height / 2;
                }

                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 5 + 4;
                this.opacity = 1;
            }

            update() {
                if (!this.active) return;
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);

                if (this.x > canvas!.width + 100 || this.y > canvas!.height + 100) {
                    this.active = false; // Mark for reuse or removal
                }
            }

            draw() {
                if (!ctx || !this.active) return;

                const tailX = this.x - this.length * Math.cos(this.angle);
                const tailY = this.y - this.length * Math.sin(this.angle);

                const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
                gradient.addColorStop(0, theme === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 53, 71, 1)');
                const tailColor = theme === 'dark' ? 'rgba(100, 108, 255, 0)' : 'rgba(33, 53, 71, 0)';
                gradient.addColorStop(1, tailColor);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();
            }
        }

        const init = () => {
            stars = [];
            meteors = [];

            const density = theme === 'dark' ? 6000 : 8000;
            const numberOfStars = Math.floor((canvas.width * canvas.height) / density);

            for (let i = 0; i < numberOfStars; i++) {
                stars.push(new Star());
            }

            // Initial meteors
            for (let i = 0; i < 2; i++) {
                const m = new Meteor(true);
                // Randomize positions to start mid-air
                m.x = Math.random() * canvas!.width;
                m.y = Math.random() * canvas!.height;
                meteors.push(m);
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn Meteors logic
            if (isPressing) {
                // Continuous heavy rain on press
                // 40% chance per frame, max 50 active
                if (meteors.length < 50 && Math.random() < 0.4) {
                    meteors.push(new Meteor(true));
                }
            } else {
                // Occasional default spawn
                if (Math.random() < 0.01) { // 1% chance
                    const inactive = meteors.find(m => !m.active);
                    if (inactive) inactive.reset();
                    else if (meteors.length < 5) meteors.push(new Meteor(true));
                }
            }

            // Clean up excess inactive meteors if not pressing
            if (!isPressing && meteors.length > 5) {
                meteors = meteors.filter(m => m.active || meteors.indexOf(m) < 5);
            }

            for (let star of stars) {
                star.update();
                star.draw();
            }

            for (let meteor of meteors) {
                meteor.update();
                meteor.draw();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchstart', handleMouseDown);
            window.removeEventListener('touchend', handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'var(--bg-color)',
                transition: 'background-color 0.3s ease'
            }}
        />
    );
};

export default BackgroundAnimation;
