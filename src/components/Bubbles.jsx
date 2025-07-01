import React, { useState, useEffect, useMemo } from 'react';

const BUBBLE_COUNT = 30;
const PADDING = 20;
const MIN_SIZE = 40;
const MAX_SIZE = 100;

function getRandom(min, max) {
  return min + Math.random() * (max - min);
}

function createBubble() {
  const size = getRandom(MIN_SIZE, MAX_SIZE);
  const left = getRandom(0, 100 - (size / window.innerWidth) * 100);
  const top = getRandom(0, 100 - (size / window.innerHeight) * 100);
  return {
    id: Math.random().toString(36).slice(2),
    size,
    left,
    top,
    delay: Math.random() * 4,
  };
}

export default function Bubbles() {
  const initialBubbles = useMemo(() => Array.from({ length: BUBBLE_COUNT }, createBubble), []);
  const [bubbles, setBubbles] = useState(initialBubbles);

  useEffect(() => {
    if (bubbles.length < BUBBLE_COUNT) {
      const timeout = setTimeout(() => {
        setBubbles(prev => {
          if (prev.length < BUBBLE_COUNT) {
            return [...prev, createBubble()];
          }
          return prev;
        });
      }, 800 + Math.random() * 1200);
      return () => clearTimeout(timeout);
    }
  }, [bubbles]);

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full" style={{ padding: PADDING }}>
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="absolute rounded-full opacity-30 animate-bounce-slow aspect-square transition-transform duration-200 pointer-events-auto"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `calc(${bubble.left}% )`,
            top: `calc(${bubble.top}% )`,
            background: 'radial-gradient(circle at 30% 30%, #a78bfa 60%, #6d28d9 100%)',
            filter: 'blur(2px)',
            animationDelay: `${bubble.delay}s`,
            boxShadow: '0 0 0 3px rgba(255,255,255,0.5)',
            zIndex: 1,
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '12%',
              left: '14%',
              width: '32%',
              height: '10%',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%)',
              borderRadius: '40% 60% 60% 40%/60% 40% 60% 40%',
              transform: 'rotate(-18deg)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
        </span>
      ))}
    </div>
  );
}
