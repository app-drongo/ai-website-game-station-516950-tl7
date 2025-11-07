'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2, Users, Trophy, Zap, Shield, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

type BackgroundPattern = 'dots' | 'grid' | 'gradient';

const DEFAULT_HERO = {
  badge: 'Join 50,000+ Gamers Worldwide',
  title: 'Ultimate Gaming',
  titleHighlight: 'Experience',
  subtitle:
    'Dive into the most immersive gaming platform with cutting-edge graphics, seamless multiplayer, and endless adventures waiting for you.',
  primaryCTA: 'Start Gaming',
  secondaryCTA: 'Watch Trailer',
  primaryCTAHref: '/play',
  secondaryCTAHref: '/trailer',
  feature1Icon: 'gamepad2',
  feature1Text: 'Premium Games',
  feature2Icon: 'users',
  feature2Text: 'Multiplayer Ready',
  feature3Icon: 'trophy',
  feature3Text: 'Tournaments',
  trustedByText: 'Powered by industry leaders',
  showTrustedLogos: true,
  backgroundPattern: 'gradient' as BackgroundPattern,
  showAnimatedBadge: true,
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'gamepad2':
        return Gamepad2;
      case 'users':
        return Users;
      case 'trophy':
        return Trophy;
      case 'zap':
        return Zap;
      case 'shield':
        return Shield;
      case 'globe':
        return Globe;
      default:
        return Gamepad2;
    }
  };

  const Feature1Icon = getIcon(config.feature1Icon);
  const Feature2Icon = getIcon(config.feature2Icon);
  const Feature3Icon = getIcon(config.feature3Icon);

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] overflow-hidden bg-background"
      data-editable="hero"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(147, 51, 234, 0.3) 0%, 
              rgba(79, 70, 229, 0.2) 25%, 
              rgba(16, 185, 129, 0.1) 50%, 
              transparent 70%)`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] [background-size:100px_100px] opacity-[0.03]" />
      </div>

      {/* Floating gradient orbs with animation */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/[0.08] blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/[0.08] blur-3xl animate-pulse animation-delay-1000" />
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 rounded-full bg-secondary/[0.05] blur-2xl animate-bounce"
        style={{ animationDuration: '3s' }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[100vh] flex-col items-center justify-center py-20 text-center">
          {/* Animated Badge */}
          {config.showAnimatedBadge && (
            <div className="mb-8 inline-flex animate-fade-in">
              <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-md px-6 py-3 text-sm shadow-lg shadow-primary/10">
                <Gamepad2 className="h-4 w-4 text-primary animate-pulse" />
                <span data-editable="badge" className="text-muted-foreground font-medium">
                  {config.badge}
                </span>
              </div>
            </div>
          )}

          {/* Main Title with enhanced styling */}
          <h1 className="max-w-5xl text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl animate-fade-in animation-delay-100">
            <span data-editable="title" className="text-foreground block mb-4">
              {config.title}
            </span>
            <span className="relative">
              <span
                data-editable="titleHighlight"
                className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent animate-gradient-x"
              >
                {config.titleHighlight}
              </span>
              <div
                className="absolute -right-4 -top-4 h-8 w-8 text-primary/60 animate-spin"
                style={{ animationDuration: '3s' }}
              >
                <Trophy className="h-full w-full" />
              </div>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-editable="subtitle"
            className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl animate-fade-in animation-delay-200"
          >
            {config.subtitle}
          </p>

          {/* Feature Pills with gaming theme */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 animate-fade-in animation-delay-300">
            <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-background/70 backdrop-blur-sm px-6 py-3 text-base shadow-lg">
              <Feature1Icon className="h-5 w-5 text-primary" />
              <span data-editable="feature1Text" className="text-foreground font-medium">
                {config.feature1Text}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-background/70 backdrop-blur-sm px-6 py-3 text-base shadow-lg">
              <Feature2Icon className="h-5 w-5 text-primary" />
              <span data-editable="feature2Text" className="text-foreground font-medium">
                {config.feature2Text}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-background/70 backdrop-blur-sm px-6 py-3 text-base shadow-lg">
              <Feature3Icon className="h-5 w-5 text-primary" />
              <span data-editable="feature3Text" className="text-foreground font-medium">
                {config.feature3Text}
              </span>
            </div>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row animate-fade-in animation-delay-400">
            <Button
              size="lg"
              className="group px-10 py-4 text-lg font-semibold shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/40 transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <Gamepad2 className="mr-3 h-6 w-6" />
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 backdrop-blur-sm text-lg font-semibold hover:bg-primary/10 transition-all duration-300 px-10 py-4 shadow-lg"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>

          {/* Trusted By Section */}
          {config.showTrustedLogos && (
            <div className="mt-24 w-full max-w-5xl animate-fade-in animation-delay-500">
              <p
                data-editable="trustedByText"
                className="mb-8 text-base text-muted-foreground font-medium"
              >
                {config.trustedByText}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500">
                {/* Gaming industry placeholder logos */}
                {[1, 2, 3, 4, 5].map(i => (
                  <div
                    key={i}
                    className="h-12 w-32 rounded-lg bg-muted-foreground/20 flex items-center justify-center"
                  >
                    <Gamepad2 className="h-6 w-6 text-muted-foreground/40" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
