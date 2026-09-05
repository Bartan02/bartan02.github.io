interface AetherConfig {
    primaryRibbons: number;
    secondaryRibbons: number;
    speed: number;
    amplitude: number;
    interactive: boolean;
    resolution: number;
    colors: {
        start: string;
        mid: string;
        end: string;
    };
}

const defaultAetherConfig: AetherConfig = {
    primaryRibbons: 6,
    secondaryRibbons: 3,
    speed: 1.0,
    amplitude: 1.0,
    interactive: true,
    resolution: 5,
    colors: {
        start: '0, 209, 232',
        mid: '0, 135, 232',
        end: '0, 62, 232'
    }
};

function initAetherRibbon(userConfig: Partial<AetherConfig> = {}) {
    const config = { ...defaultAetherConfig, ...userConfig };
    const wrapper = document.getElementById('aether-wrapper');

    const canvas = document.getElementById('aether-canvas') as HTMLCanvasElement;

    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let lastTime = performance.now();
    let time = 0;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };

    const handleResize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width-16}px`;
        canvas.style.height = `${height/1.2}px`;
        ctx.scale(dpr, dpr);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        if (!config.interactive) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
        mouse.targetX = clientX - width / 2;
        mouse.targetY = clientY - height / 2;
        mouse.active = true;
    };

    const handlePointerLeave = () => {
        mouse.targetX = 0;
        mouse.targetY = 0;
        mouse.active = false;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove as EventListener);
    window.addEventListener('touchmove', handlePointerMove as EventListener, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    const noise = (x: number, t: number, o: number) =>
        (Math.sin(x * 0.0012 + t * 0.25 + o) + Math.cos(x * 0.0028 - t * 0.4 + o * 2)) / 2;

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      time += dt * 0.85 * config.speed;

      const lerpFactor = 1 - Math.exp(-9 * dt);
      mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
      mouse.y += (mouse.targetY - mouse.y) * lerpFactor;

      ctx.clearRect(0, 0, width, height);

      const layers = [
        {
          ribbonCount: config.primaryRibbons,
          step: config.resolution,
          offsetMod: 0,
          freqScale: 0.0035,
          ampScale: 55 * config.amplitude,
          speedScale: 1.1,
          primary: true,
        },
        {
          ribbonCount: config.secondaryRibbons,
          step: config.resolution * 1.5,
          offsetMod: 1.2,
          freqScale: 0.0075,
          ampScale: 30 * config.amplitude,
          speedScale: 0.7,
          primary: false,
        },
      ];

      layers.forEach((layer) => {
        ctx.globalCompositeOperation = layer.primary ? "source-over" : "screen";

        const gradient = ctx.createLinearGradient(0, 0, width, 0);

        gradient.addColorStop(
          0,
          `rgba(${config.colors.start}, ${layer.primary ? 0.1 : 0.02})`,
        );
        gradient.addColorStop(
          0.5,
          `rgba(${config.colors.mid}, ${layer.primary ? 0.8 : 0.35})`,
        );
        gradient.addColorStop(
          1,
          `rgba(${config.colors.end}, ${layer.primary ? 0.1 : 0.02})`,
        );

        for (let r = 0; r < layer.ribbonCount; r++) {
          const ribbonProgress =
            layer.ribbonCount > 1 ? r / (layer.ribbonCount - 1) : 0;
          const yOffset =
            height * 0.22 + r * (height * 0.032) + layer.offsetMod * 35;
          const baseAlpha = (1 - ribbonProgress * 0.75) * 0.8;

          ctx.beginPath();

          for (let x = 0; x <= width + layer.step; x += layer.step) {
            const edgeEnvelope = Math.sin((x / width) * Math.PI);

            const nFreq = 1 + noise(x, time, ribbonProgress) * 0.18;
            const nAmp = 1 + noise(x * 2, -time, ribbonProgress * 0.5) * 0.15;

            const wave1 =
              Math.sin(
                x * (layer.freqScale * nFreq) +
                  time * layer.speedScale +
                  r * 0.18,
              ) *
              (layer.ampScale * edgeEnvelope * nAmp);
            const wave2 =
              Math.cos(x * 0.008 - time * 0.7 + r * 0.1) *
              (20 * config.amplitude * edgeEnvelope);
            const wave3 =
              Math.sin(x * 0.018 + time * 1.4) *
              (8 * config.amplitude * edgeEnvelope);

            let mouseDisplacement = 0;
            if (config.interactive) {
              const cursorXWorld = width / 2 + mouse.x;
              const distToMouseX = Math.abs(x - cursorXWorld);
              const mouseRadius = layer.primary ? 380 : 220;
              const mouseFactor = Math.exp(
                -Math.pow(distToMouseX / mouseRadius, 2),
              );
              mouseDisplacement =
                Math.sin(x * 0.015 + time * 2.6) *
                (mouseFactor * (layer.primary ? 50 : 25) * edgeEnvelope);
            }

            const y =
              yOffset +
              wave1 +
              wave2 +
              wave3 +
              mouseDisplacement +
              mouse.y * (ribbonProgress * 0.1);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);

            if (layer.primary && x % 48 === 0) {
              ctx.fillStyle = `rgba(${config.colors.end}, 0.3)`;
              ctx.fillRect(x - 1, y - 1, 2, 2);
            }
          }

          ctx.globalAlpha = baseAlpha;
          ctx.strokeStyle = gradient;
          ctx.lineWidth = (layer.primary ? 1.4 : 0.8) + (1 - ribbonProgress);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Reset time to prevent a massive jump when resuming
        lastTime = performance.now();

        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        }
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
      }
    });

  observer.observe(wrapper);

    document.addEventListener('astro:before-swap', () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handlePointerMove as EventListener);
        window.removeEventListener('touchmove', handlePointerMove as EventListener);
        window.removeEventListener('mouseleave', handlePointerLeave);
    }, { once: true });
}

initAetherRibbon();
document.addEventListener('astro:after-swap', () => initAetherRibbon());