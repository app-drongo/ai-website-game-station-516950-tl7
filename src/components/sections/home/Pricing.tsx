'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Check,
  Star,
  Zap,
  ChevronDown,
  Gamepad2,
  Users,
  Trophy,
  Crown,
  Rocket,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Gaming Plans',
  mainTitle: 'Choose Your',
  mainTitleHighlight: 'Gaming Level',
  mainDescription:
    'Unlock premium gaming experiences with our flexible plans. Join millions of gamers worldwide and level up your gameplay.',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
  billingAnnualBadge: 'Save 25%',
  plan1Name: 'Casual Gamer',
  plan1Description: 'Perfect for casual gaming sessions',
  plan1Price: 'Free',
  plan1CTA: 'Start Playing',
  plan1CTAHref: '/signup',
  plan2Name: 'Pro Gamer',
  plan2Description: 'For serious gamers and streamers',
  plan2Price: '$19',
  plan2Period: '/month',
  plan2Badge: 'Most Popular',
  plan2CTA: 'Go Pro',
  plan2CTAHref: '/signup',
  plan2Trial: '7-day free trial • Cancel anytime',
  plan3Name: 'Elite Champion',
  plan3Description: 'Ultimate gaming experience with exclusive perks',
  plan3Price: '$49',
  plan3Period: '/month',
  plan3Badge: 'Premium',
  plan3CTA: 'Join Elite',
  plan3CTAHref: '/signup',
  bottomTitle: 'Need a custom gaming solution?',
  bottomDescription:
    "We offer enterprise gaming solutions for tournaments, gaming cafes, and large communities. Let's create the perfect gaming environment for your needs.",
  bottomCTA: 'Contact Gaming Team',
  bottomCTAHref: '/contact',
} as const;

const FAQ_DATA = [
  {
    question: 'Can I change my plan anytime?',
    answer:
      "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and various regional payment methods. All transactions are secured with enterprise-grade encryption.',
  },
  {
    question: 'Can I play offline?',
    answer:
      'Yes! Many of our games support offline play. However, some multiplayer features and cloud saves require an internet connection.',
  },
  {
    question: 'Is there a family plan available?',
    answer:
      'Absolutely! Our Pro and Elite plans support multiple user profiles. Contact us for special family pricing on multiple accounts.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer:
      "We'll notify you before you reach your limits. You can either upgrade your plan or purchase additional resources as needed.",
  },
];

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: config.plan1Name,
      description: config.plan1Description,
      price: config.plan1Price,
      period: '',
      badge: null,
      icon: Gamepad2,
      features: [
        'Access to 50+ casual games',
        'Basic graphics settings',
        'Community forums',
        '5GB cloud storage',
        'Standard support',
        'Mobile gaming',
      ],
      cta: config.plan1CTA,
      ctaHref: config.plan1CTAHref,
      popular: false,
      color: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      name: config.plan2Name,
      description: config.plan2Description,
      price: billingCycle === 'annual' ? '$15' : config.plan2Price,
      period: config.plan2Period,
      badge: config.plan2Badge,
      icon: Trophy,
      features: [
        'Access to 500+ premium games',
        'Ultra HD graphics (4K)',
        'Priority matchmaking',
        '100GB cloud storage',
        '24/7 priority support',
        'Cross-platform gaming',
        'Streaming tools',
        'Tournament access',
        'Exclusive beta games',
      ],
      cta: config.plan2CTA,
      ctaHref: config.plan2CTAHref,
      popular: true,
      color: 'from-purple-500/10 to-pink-500/10',
    },
    {
      name: config.plan3Name,
      description: config.plan3Description,
      price: billingCycle === 'annual' ? '$39' : config.plan3Price,
      period: config.plan3Period,
      badge: config.plan3Badge,
      icon: Crown,
      features: [
        'Everything in Pro Gamer',
        'Unlimited game library',
        '8K gaming support',
        'Unlimited cloud storage',
        'Dedicated account manager',
        'Custom gaming profiles',
        'VIP tournament access',
        'Early game releases',
        'Exclusive merchandise',
        'Gaming coaching sessions',
      ],
      cta: config.plan3CTA,
      ctaHref: config.plan3CTAHref,
      popular: false,
      color: 'from-amber-500/10 to-orange-500/10',
    },
  ];

  return (
    <section className="py-24 bg-background" data-editable="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            <Rocket className="w-4 h-4 mr-2 text-primary" />
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingMonthly">{config.billingMonthly}</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingAnnual">{config.billingAnnual}</span>
              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                <span data-editable="billingAnnualBadge">{config.billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-xl border-2',
                  plan.popular
                    ? 'border-primary/50 shadow-xl shadow-primary/20 lg:scale-105'
                    : 'border-border/50 hover:border-primary/30'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                      <Star className="size-3 mr-1 fill-current" />
                      <span data-editable="plan2Badge">{plan.badge}</span>
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', plan.color)} />

                <CardHeader className={cn('relative text-center pb-8', plan.popular && 'pt-10')}>
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit border-primary/30">
                      <span data-editable="plan3Badge">{plan.badge}</span>
                    </Badge>
                  )}

                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  <CardTitle className="text-2xl mb-2">
                    <span data-editable={`plan${index + 1}Name`}>{plan.name}</span>
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    <span data-editable={`plan${index + 1}Description`}>{plan.description}</span>
                  </CardDescription>

                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">
                      <span data-editable={`plan${index + 1}Price`}>{plan.price}</span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">
                        <span data-editable={`plan${index + 1}Period`}>{plan.period}</span>
                      </span>
                    )}
                  </div>
                  {billingCycle === 'annual' && plan.period && (
                    <p className="text-sm text-primary mt-2">Save 25% with annual billing</p>
                  )}
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      'w-full text-base py-6 font-semibold',
                      plan.popular && 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30'
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate(plan.ctaHref)}
                    data-editable-href={`plan${index + 1}CTAHref`}
                    data-href={plan.ctaHref}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    <span data-editable={`plan${index + 1}CTA`}>{plan.cta}</span>
                  </Button>

                  {plan.name === config.plan2Name && (
                    <p className="text-center text-sm text-muted-foreground">
                      <span data-editable="plan2Trial">{config.plan2Trial}</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our gaming plans
            </p>
          </div>

          <div className="grid gap-4">
            {FAQ_DATA.map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border/50 bg-background/50 p-6 text-left hover:bg-muted/50 transition-colors">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <Users className="w-4 h-4 mr-2" />
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
