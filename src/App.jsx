import React, { useState } from 'react';
import { ChevronLeft, Plus, ArrowRight, User } from 'lucide-react';

// --- DATA ---
const PYTHON_MODULES = [
  {
    id: 'variables',
    num: '01',
    short: 'VAR',
    title: 'Variables & Types',
    shortDesc: 'Stocker tes données de trafic',
    time: '05.00',
    tags: ['Bases', 'Data'],
    bgColor: 'bg-[#323232]',
    textColor: 'text-white',
    accentColor: 'text-gray-400',
    lesson: `
### Les Variables
Une variable, c'est comme une boîte dans laquelle on range une donnée. On lui donne un nom pour la retrouver facilement. En Python, pas besoin de mots compliqués pour créer une variable.

**Exemples :**
<pre>
visites = 1500      # Un nombre entier (Integer)
taux_rebond = 45.5  # Un nombre à virgule (Float)
site = "Cultura"    # Du texte (String)
</pre>

### Les règles
- Un nom de variable ne contient pas d'espace (utilise le tiret du bas \`_\`).
- Il ne commence jamais par un chiffre.
- Python comprend tout seul le type de donnée que tu lui donnes.
    `,
    quiz: {
      question: "Comment créer une variable contenant le texte 'Bonjour' ?",
      options: [
        "var texte = Bonjour",
        "texte = 'Bonjour'",
        "String texte = 'Bonjour'",
        "texte == Bonjour"
      ],
      correct: 1,
      explanation: "En Python, on écrit juste le nom de la variable, le signe =, et le texte entre guillemets (simples ou doubles)."
    }
  },
  {
    id: 'conditions',
    num: '02',
    short: 'CON',
    title: 'Les Conditions',
    shortDesc: 'Si, Sinon, Alors',
    time: '08.30',
    tags: ['Logique', 'Choix'],
    bgColor: 'bg-[#E15F41]',
    textColor: 'text-white',
    accentColor: 'text-orange-200',
    lesson: `
### Faire des choix (if, elif, else)
Les conditions permettent à ton code de réagir différemment selon la situation. C'est la base de toute application interactive.

**Exemple :**
<pre>
visites = 500

if visites > 1000:
    print("Super trafic !")
elif visites > 100:
    print("Trafic moyen.")
else:
    print("Il faut optimiser le site.")
</pre>

### L'indentation est vitale
Attention, en Python, les espaces avant le \`print()\` (l'indentation) sont obligatoires. C'est ce qui indique à Python que ce code est *à l'intérieur* de la condition.
    `,
    quiz: {
      question: "Que manque-t-il à la fin de la ligne d'une condition 'if' en Python ?",
      options: [
        "Un point-virgule (;)",
        "Une parenthèse fermante",
        "Deux points (:)",
        "Rien du tout"
      ],
      correct: 2,
      explanation: "En Python, les lignes contenant 'if', 'elif' ou 'else' doivent obligatoirement se terminer par deux points (:) pour annoncer le bloc de code qui suit."
    }
  },
  {
    id: 'boucles',
    num: '03',
    short: 'BOU',
    title: 'Les Boucles',
    shortDesc: 'Répéter des actions',
    time: '12.00',
    tags: ['Automatisation'],
    bgColor: 'bg-[#A8AFD3]',
    textColor: 'text-gray-900',
    accentColor: 'text-indigo-800',
    lesson: `
### La boucle FOR
La boucle \`for\` permet de parcourir les éléments d'une liste un par un et de répéter une action pour chacun.

**Exemple :**
<pre>
pages = ["Accueil", "Panier", "Paiement"]

for page in pages:
    print("L'utilisateur a visité : " + page)
</pre>

Cette boucle va s'exécuter 3 fois, en remplaçant la variable \`page\` par chaque élément de la liste à chaque tour. C'est très pratique pour analyser des lignes dans un fichier de données.
    `,
    quiz: {
      question: "À quoi sert principalement la boucle 'for' ?",
      options: [
        "À faire un choix logique",
        "À répéter un bout de code à l'infini",
        "À parcourir les éléments d'une série ou d'une liste",
        "À créer une nouvelle variable"
      ],
      correct: 2,
      explanation: "La boucle 'for' est conçue spécifiquement pour itérer (parcourir) sur une séquence (comme une liste, un texte, etc.)."
    }
  },
  {
    id: 'structures',
    num: '04',
    short: 'DIC',
    title: 'Listes & Dicos',
    shortDesc: 'Organiser la data',
    time: '15.45',
    tags: ['Data', 'Structure'],
    bgColor: 'bg-[#8D4546]',
    textColor: 'text-white',
    accentColor: 'text-red-200',
    lesson: `
### Les Listes
Une liste permet de stocker plusieurs éléments dans une seule variable. On utilise les crochets \`[]\`.
<pre>
prix = [15.99, 20.00, 9.50]
</pre>

### Les Dictionnaires
C'est le format roi pour la data. Il fonctionne avec des paires **clé: valeur**. On utilise les accolades \`{}\`.
<pre>
produit = {
    "nom": "Livre Python",
    "prix": 25,
    "stock": True
}

# Pour afficher le nom :
print(produit["nom"])
</pre>
    `,
    quiz: {
      question: "Comment accède-t-on à la valeur 'prix' dans le dictionnaire 'produit' ?",
      options: [
        "produit[prix]",
        "produit(prix)",
        "produit['prix']",
        "produit.prix"
      ],
      correct: 2,
      explanation: "Dans un dictionnaire Python, on accède à une valeur en mettant le nom de la clé entre crochets et entre guillemets : mon_dico['ma_cle']."
    }
  }
];

// --- COMPONENTS ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); 
  const [activeModule, setActiveModule] = useState(null);
  const [progress, setProgress] = useState([]); 

  const handleStartModule = (mod) => {
    setActiveModule(mod);
    setCurrentScreen('lesson');
  };

  const markModuleComplete = (modId) => {
    if (!progress.includes(modId)) {
      setProgress([...progress, modId]);
    }
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] font-sans text-[#1C1C1E] flex justify-center selection:bg-orange-200">
      {/* Mobile Wrapper */}
      <div className="w-full max-w-[400px] bg-[#F2F0EA] min-h-screen shadow-2xl relative overflow-x-hidden flex flex-col">
        
        {currentScreen === 'home' && (
          <HomeScreen 
            modules={PYTHON_MODULES} 
            progress={progress} 
            onStart={handleStartModule} 
          />
        )}
        
        {currentScreen === 'lesson' && activeModule && (
          <LessonScreen 
            module={activeModule} 
            onBack={() => setCurrentScreen('home')}
            onNext={() => setCurrentScreen('quiz')}
          />
        )}
        
        {currentScreen === 'quiz' && activeModule && (
          <QuizScreen 
            module={activeModule} 
            onBack={() => setCurrentScreen('lesson')}
            onComplete={() => markModuleComplete(activeModule.id)}
          />
        )}

      </div>
    </div>
  );
}

// --- HOME SCREEN ---
function HomeScreen({ modules, progress, onStart }) {
  const [filter, setFilter] = useState('all'); // 'todo', 'done', 'all'
  
  const completedCount = progress.length;
  const totalCount = modules.length;

  const filteredModules = modules.filter(mod => {
    if (filter === 'todo') return !progress.includes(mod.id);
    if (filter === 'done') return progress.includes(mod.id);
    return true;
  });

  return (
    <div className="flex-1 p-6 flex flex-col pt-12">
      
      {/* Header */}
      <header className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Bonjour, Analyste 👋</h1>
          <p className="text-[#8E8E8B] text-sm mt-1">Prêt pour ton projet 20h ?</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#D9D9D9] border border-[#C7C7C7] flex items-center justify-center overflow-hidden">
          <User className="w-5 h-5 text-gray-500" />
        </div>
      </header>

      {/* Pilules de filtrage */}
      <div className="flex gap-2 mb-8 items-center">
        <button 
          onClick={() => setFilter('todo')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border border-[#1C1C1E] transition-colors ${filter === 'todo' ? 'bg-[#1C1C1E] text-white' : 'text-[#1C1C1E]'}`}
        >
          À faire
        </button>
        <button 
          onClick={() => setFilter('done')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border border-[#1C1C1E] transition-colors ${filter === 'done' ? 'bg-[#1C1C1E] text-white' : 'text-[#1C1C1E]'}`}
        >
          Terminé
        </button>
        <button 
          onClick={() => setFilter('all')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium border border-[#1C1C1E] transition-colors ${filter === 'all' ? 'bg-[#1C1C1E] text-white' : 'text-[#1C1C1E]'}`}
        >
          Tout
        </button>
        <button className="ml-auto w-8 h-8 rounded-full border border-[#1C1C1E] flex items-center justify-center">
          <Plus className="w-4 h-4 text-[#1C1C1E]" />
        </button>
      </div>

      {/* Zone "Progression" (Style Date) */}
      <div className="flex items-center gap-6 mb-8 px-2 border-b border-[#E0DED6] pb-6">
        <div>
          <p className="text-sm font-bold text-[#1C1C1E]">Projet</p>
          <p className="text-5xl font-bold tracking-tighter leading-none mt-1">{completedCount}/{totalCount}</p>
          <p className="text-sm font-bold text-[#1C1C1E] uppercase mt-1 tracking-widest">MODULES</p>
        </div>
        <div className="h-16 w-[1px] bg-[#E0DED6]"></div>
        <div className="flex-1">
          <p className="text-[#8E8E8B] text-sm leading-snug">
            {completedCount === totalCount 
              ? "Tu es prêt ! Tu peux lancer ton projet." 
              : "Avance étape par étape. Garde les choses simples."}
          </p>
        </div>
      </div>

      {/* Liste des modules façon Calendrier */}
      <div className="flex flex-col gap-3 pb-8">
        {filteredModules.length === 0 && (
          <p className="text-center text-[#8E8E8B] mt-8">Rien à afficher ici.</p>
        )}
        
        {filteredModules.map((mod) => {
          const isCompleted = progress.includes(mod.id);
          return (
            <div 
              key={mod.id}
              onClick={() => onStart(mod)}
              className={`w-full rounded-[20px] p-4 flex cursor-pointer transition-transform active:scale-95 ${mod.bgColor} ${mod.textColor} relative shadow-sm`}
            >
              {/* Colonne de gauche (Date/Num) */}
              <div className="w-[80px] flex flex-col items-center justify-center border-r border-white/20 pr-4">
                <span className={`text-xs uppercase font-medium ${mod.accentColor}`}>MOD</span>
                <span className="text-3xl font-bold leading-none my-1">{mod.num}</span>
                <span className={`text-xs uppercase font-medium ${mod.accentColor}`}>{mod.short}</span>
              </div>

              {/* Colonne de droite (Détails) */}
              <div className="flex-1 pl-4 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    {mod.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-mono ${mod.accentColor}`}>{mod.time}</span>
                </div>
                
                <h3 className="text-lg font-bold leading-tight mb-1">{mod.title}</h3>
                <p className={`text-xs leading-tight opacity-90 ${mod.accentColor} mb-6`}>{mod.shortDesc}</p>
                
                <div className="absolute bottom-4 right-4">
                  {isCompleted ? (
                    <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center bg-white/20">
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- LESSON SCREEN ---
function LessonScreen({ module, onBack, onNext }) {
  const renderContent = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-bold mt-6 mb-2 tracking-tight text-[#1C1C1E]">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-2 text-[#4A4A4A] text-sm">{line.replace('- ', '')}</li>;
      }
      if (line.startsWith('<pre>')) return null;
      if (line.startsWith('</pre>')) return null;
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-3 text-[#4A4A4A] text-sm leading-relaxed">
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-[#1C1C1E] font-bold">{part}</strong> : part)}
          </p>
        );
      }
      if (line.trim() === '') return null;
      return <p key={index} className="mb-3 text-[#4A4A4A] text-sm leading-relaxed">{line}</p>;
    });
  };

  const codeBlocks = module.lesson.match(/<pre>([\s\S]*?)<\/pre>/g) || [];

  return (
    <div className="flex-1 flex flex-col bg-[#F2F0EA]">
      {/* Navbar */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button onClick={onBack} className="w-10 h-10 rounded-full border border-[#1C1C1E] flex items-center justify-center hover:bg-[#1C1C1E] hover:text-white transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-sm tracking-wider text-[#1C1C1E] uppercase">Leçon {module.num}</span>
        <div className="w-10 h-10"></div> {/* Spacer */}
      </div>

      {/* Header Module avec sa couleur */}
      <div className={`mx-6 rounded-[20px] p-6 mb-6 ${module.bgColor} ${module.textColor} shadow-md`}>
        <h1 className="text-2xl font-bold tracking-tight mb-2">{module.title}</h1>
        <p className={`text-sm ${module.accentColor}`}>{module.shortDesc}</p>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-32 overflow-y-auto">
        <div className="prose prose-sm max-w-none">
          {module.lesson.split(/<pre>[\s\S]*?<\/pre>/).map((textChunk, index) => (
            <React.Fragment key={index}>
              {renderContent(textChunk)}
              {codeBlocks[index] && (
                <div className="my-5 bg-[#2B2B2B] rounded-xl p-4 shadow-inner">
                  <pre className="text-[13px] font-mono text-[#D4D4D4] leading-relaxed overflow-x-auto">
                    {codeBlocks[index].replace('<pre>\n', '').replace('</pre>', '').replace('<pre>', '')}
                  </pre>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[400px] mx-auto p-6 bg-gradient-to-t from-[#F2F0EA] via-[#F2F0EA] to-transparent">
        <button 
          onClick={onNext}
          className={`w-full ${module.bgColor} ${module.textColor} font-bold py-4 rounded-[20px] flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg`}
        >
          Passer au test <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// --- QUIZ SCREEN ---
function QuizScreen({ module, onBack, onComplete }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { quiz } = module;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const isCorrect = selectedOption === quiz.correct;

  return (
    <div className="flex-1 flex flex-col bg-[#F2F0EA]">
      {/* Navbar */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button onClick={onBack} disabled={isSubmitted} className="w-10 h-10 rounded-full border border-[#1C1C1E] flex items-center justify-center disabled:opacity-50">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-sm tracking-wider text-[#1C1C1E] uppercase">Test</span>
        <div className="w-10 h-10"></div>
      </div>

      <div className="flex-1 px-6 pb-32 flex flex-col">
        <div className="mt-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E8E8B] mb-2 block">Question</span>
          <h2 className="text-2xl font-bold leading-tight text-[#1C1C1E]">{quiz.question}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {quiz.options.map((option, index) => {
            let btnStyle = "border-[#C7C7C7] text-[#1C1C1E]";
            
            if (isSubmitted) {
              if (index === quiz.correct) {
                btnStyle = "bg-[#A2C78E] border-[#A2C78E] text-[#1C1C1E] font-bold"; // Vert de la maquette
              } else if (index === selectedOption) {
                btnStyle = "bg-[#DE6044] border-[#DE6044] text-white"; // Rouge/Orange
              } else {
                btnStyle = "border-[#E0DED6] text-[#A0A0A0] opacity-50";
              }
            } else if (selectedOption === index) {
              btnStyle = "bg-[#1C1C1E] border-[#1C1C1E] text-white font-bold";
            } else {
              btnStyle = "bg-white/50 border-[#C7C7C7] hover:border-[#1C1C1E]";
            }

            return (
              <button
                key={index}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(index)}
                className={`p-4 rounded-[16px] text-left transition-all border shadow-sm ${btnStyle}`}
              >
                <span className="font-mono text-sm">{option}</span>
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className="mt-8 p-5 rounded-[20px] bg-white/60 border border-[#E0DED6]">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#1C1C1E] mb-2">
              {isCorrect ? 'Bien vu !' : 'Oups...'}
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              {quiz.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[400px] mx-auto p-6 bg-gradient-to-t from-[#F2F0EA] via-[#F2F0EA] to-transparent">
        {!isSubmitted ? (
          <button 
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className={`w-full py-4 rounded-[20px] font-bold text-md transition-transform ${selectedOption !== null ? 'bg-[#1C1C1E] text-white active:scale-95 shadow-lg' : 'bg-[#D9D9D9] text-[#8E8E8B] cursor-not-allowed'}`}
          >
            Valider
          </button>
        ) : (
          <button 
            onClick={onComplete}
            className="w-full bg-[#1C1C1E] text-white py-4 rounded-[20px] font-bold text-md flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
          >
            {isCorrect ? 'Valider le module' : 'Retourner au menu'}
          </button>
        )}
      </div>
    </div>
  );
}
