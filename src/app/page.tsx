"use client";

import { useState } from "react";
import { Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Defina sua senha aqui (em produção, use variáveis de ambiente)
  const SITE_PASSWORD = "minha-senha-secreta";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === SITE_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
    }
  };

  // Página de Login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-900/50 border-blue-900/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Acesso Restrito</CardTitle>
            <CardDescription>Digite a senha para acessar o site</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="bg-slate-800/50 border-blue-900/20 text-white placeholder:text-gray-500"
                  autoFocus
                />
              </div>
              
              {error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Conteúdo do Site Pessoal (após autenticação)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/20 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Meu Site Pessoal</span>
          </div>
          <Button 
            variant="outline" 
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
            onClick={() => setIsAuthenticated(false)}
          >
            Sair
          </Button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/50 border-blue-900/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Bem-vindo ao Meu Site Pessoal</CardTitle>
              <CardDescription className="text-lg">
                Este é um espaço privado e exclusivo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg">
                  Este é o seu site pessoal protegido por senha. Apenas você tem acesso a este conteúdo.
                </p>
                
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Sobre Mim</h3>
                <p className="text-gray-300">
                  Adicione aqui informações sobre você, seus projetos, interesses e objetivos.
                </p>

                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Meus Projetos</h3>
                <p className="text-gray-300">
                  Liste seus projetos pessoais, trabalhos ou qualquer coisa que você queira documentar.
                </p>

                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Anotações</h3>
                <p className="text-gray-300">
                  Use este espaço para suas anotações pessoais, ideias e lembretes.
                </p>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-8">
                <p className="text-cyan-400 text-sm">
                  💡 <strong>Dica:</strong> Para alterar a senha, edite a constante SITE_PASSWORD no arquivo src/app/page.tsx
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
