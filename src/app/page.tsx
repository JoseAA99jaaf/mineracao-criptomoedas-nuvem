"use client";

import { useState, useEffect } from "react";
import { Cpu, Zap, TrendingUp, Shield, Cloud, Brain, ChevronRight, Check, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [hashRate, setHashRate] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [activeMiners, setActiveMiners] = useState(0);

  // Simulação de mineração em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setHashRate(prev => Math.min(prev + Math.random() * 5, 100));
      setEarnings(prev => prev + Math.random() * 0.00001);
      setActiveMiners(prev => Math.min(prev + Math.floor(Math.random() * 2), 1247));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "49",
      hashrate: "10 TH/s",
      features: ["IA Básica", "Suporte 24/7", "Dashboard Analytics", "Auto-otimização"],
      popular: false
    },
    {
      name: "Professional",
      price: "149",
      hashrate: "50 TH/s",
      features: ["IA Avançada GPT-4", "Prioridade Máxima", "API Access", "Multi-moedas", "Relatórios Detalhados"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "499",
      hashrate: "200 TH/s",
      features: ["IA Proprietária", "Dedicado 24/7", "White Label", "Pool Privado", "Consultoria Estratégica"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/20 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CloudMiner AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Planos</a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Estatísticas</a>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              Começar Agora
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              <Zap className="w-3 h-3 mr-1" />
              Powered by GPT-4 & Advanced AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Mineração de Cripto
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Inteligente</span>
            </h1>
            <p className="text-xl text-gray-400">
              Maximize seus lucros com mineração na nuvem otimizada por IA. 
              Algoritmos avançados escolhem automaticamente as moedas mais rentáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg">
                Iniciar Mineração Grátis
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Ver Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">{activeMiners.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Mineradores Ativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$2.4M+</div>
                <div className="text-sm text-gray-400">Lucros Gerados</div>
              </div>
            </div>
          </div>

          {/* Live Mining Dashboard */}
          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Dashboard de Mineração ao Vivo
              </CardTitle>
              <CardDescription>Simulação em tempo real</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Hash Rate</span>
                  <span className="text-cyan-400 font-mono">{hashRate.toFixed(2)} TH/s</span>
                </div>
                <Progress value={hashRate} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">Ganhos (24h)</div>
                  <div className="text-2xl font-bold text-green-400">
                    ${earnings.toFixed(5)}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">Eficiência IA</div>
                  <div className="text-2xl font-bold text-cyan-400">98.7%</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-400 mb-2">Moedas Sendo Mineradas</div>
                <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                  <span className="text-white font-medium">Bitcoin (BTC)</span>
                  <Badge className="bg-green-500/10 text-green-400">+12.4%</Badge>
                </div>
                <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                  <span className="text-white font-medium">Ethereum (ETH)</span>
                  <Badge className="bg-green-500/10 text-green-400">+8.2%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-slate-900/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tecnologia de Ponta
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nossa IA analisa milhares de variáveis em tempo real para maximizar seus lucros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">IA Avançada</CardTitle>
              <CardDescription>
                Algoritmos de machine learning escolhem automaticamente as moedas mais rentáveis
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Infraestrutura Global</CardTitle>
              <CardDescription>
                Data centers em 15 países com hardware de última geração e energia renovável
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Segurança Máxima</CardTitle>
              <CardDescription>
                Criptografia de nível militar e carteiras cold storage para proteger seus ativos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Hardware Otimizado</CardTitle>
              <CardDescription>
                ASICs e GPUs de última geração com overclock automático gerenciado por IA
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">ROI Maximizado</CardTitle>
              <CardDescription>
                Média de 15-25% de retorno mensal com otimização contínua de estratégias
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Início Instantâneo</CardTitle>
              <CardDescription>
                Comece a minerar em menos de 60 segundos. Sem configuração complexa
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Planos para Todos os Perfis
          </h2>
          <p className="text-xl text-gray-400">
            Escolha o plano ideal e comece a minerar hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'bg-gradient-to-b from-cyan-900/30 to-slate-900/50 border-cyan-500/50 scale-105' 
                  : 'bg-slate-900/50 border-blue-900/20'
              } backdrop-blur-sm hover:border-cyan-500/50 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.hashrate}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="container mx-auto px-4 py-20 bg-slate-900/30">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Garantido</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-gray-400">Criptomoedas Suportadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-gray-400">Usuários Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400">Suporte Especializado</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/20 backdrop-blur-sm">
          <CardContent className="py-16 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Junte-se a milhares de mineradores que já estão lucrando com nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg">
                Criar Conta Grátis
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                Falar com Especialista
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/20 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">CloudMiner AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Mineração inteligente de criptomoedas na nuvem com tecnologia de IA avançada.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentação</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900/20 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2024 CloudMiner AI. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
