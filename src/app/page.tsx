"use client";

import { useState } from "react";
import { Lock, User, LogOut } from "lucide-react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900/50 border border-blue-900/20 backdrop-blur-sm rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Acesso Restrito</h1>
            <p className="text-gray-400">Digite a senha para acessar o site</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-900/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                autoFocus
              />
            </div>
            
            {error && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <header className="border-b border-blue-900/20 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Meu Site Pessoal</span>
          </div>
          <button 
            className="flex items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            onClick={() => setIsAuthenticated(false)}
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 border border-blue-900/20 backdrop-blur-sm rounded-xl shadow-2xl p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo ao Meu Site Pessoal</h1>
              <p className="text-gray-400 text-lg">Este é um espaço privado e exclusivo</p>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Este é o seu site pessoal protegido por senha. Apenas você tem acesso a este conteúdo.
              </p>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Sobre Mim</h2>
                <p>
                  Adicione aqui informações sobre você, seus projetos, interesses e objetivos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Meus Projetos</h2>
                <p>
                  Liste seus projetos pessoais, trabalhos ou qualquer coisa que você queira documentar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Anotações</h2>
                <p>
                  Use este espaço para suas anotações pessoais, ideias e lembretes.
                </p>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-8">
                <p className="text-cyan-400 text-sm">
                  💡 <strong>Dica:</strong> Para alterar a senha, edite a constante SITE_PASSWORD no arquivo src/app/page.tsx
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
