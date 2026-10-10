import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, Shuffle, Upload, Pencil, ChevronLeft, ChevronRight, Check, X, RotateCcw, Search, Plus, Trash2, FileText, Layers, CircleHelp, ArrowRight, Eye } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import questionBank from "./questionBank.json";
import "./style.css";

const initialQuestions = questionBank;
const STORAGE_KEY = "solid-stateless-v2";

function cleanSource(text = "") {
  return String(text)
    .replace(/\{=tex\}/g, "")
    .replace(/`(?=\\)/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeFieldText(value = "") {
  return String(value || "")
    .replace(/\$\$/g, "")
    .replace(/\\\[|\\\]/g, "")
    .replace(/\\\(|\\\)/g, "")
    .replace(/^\s*\*\*(?:Question|Original question)\s*:\*\*\s*/gi, "")
    .replace(/\n\s*\*\*(?:Question|Original question|Options?)\s*:\*\*\s*/gi, "\n")
    .replace(/\*\*Solution\s*:\*\*\s*/gi, "")
    .replace(/\*\*(?:Question|Original question|Options?)\s*:\*\*\s*/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/√/g, "\\sqrt ")
    .replace(/×/g, "\\times ")
    .replace(/⁻¹/g, "^{-1}")
    .replace(/²/g, "^{2}")
    .replace(/³/g, "^{3}")
    .trim();
}

function prepareMarkdown(raw = "", asOption = false) {
  let text = normalizeFieldText(raw);
  text = cleanSource(text);

  text = text
    .replace(/\\sqrt\s+\(([^)]+)\)/g, "\\sqrt{$1}")
    .replace(/\\sqrt\s+([A-Za-z0-9^_+\-]+)/g, "\\sqrt{$1}")
    .replace(/\b([A-Za-z])\s*\^\s*\{?(-?\d+)\}?/g, (_, base, exp) => `${base}^{${exp}}`);

  text = text.replace(/\[\[|\]\]/g, "");

  text = text.replace(/\(([^()\n]*\\(?:frac|sqrt|times|sigma|mu|Omega|pi|theta|lambda|rho|hbar|cdot|approx|alpha|beta|gamma|mathrm|text|cos|sin)[^()\n]*)\)/g,
    (_, formula) => `$${formula.trim()}$`
  );

  text = text.replace(/(?<!\\)\(([^()\n]{1,220})\)/g, (whole, inside) => {
    const looksLikeMath =
      /\\[a-zA-Z]+|[A-Za-z0-9][_^]\{?[-A-Za-z0-9]+|[×√⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/.test(inside);

    return looksLikeMath ? `$${inside.trim()}$` : whole;
  });

  if (asOption && !/[$]/.test(text)) {
    const looksLikeMath =
      /\\[a-zA-Z]+|[A-Za-z0-9][_^]\{?[-A-Za-z0-9]+|[×√⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/.test(text);

    if (looksLikeMath) text = `$${text.replace(/^\(|\)$/g, "").trim()}$`;
  }

  return text;
}

function MathDisplay({ children }) {
  const raw = normalizeFieldText(children || "");
  if (!raw) return null;

  return <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{`$$\n${raw.replace(/\n+/g, "\n")}\n$$`}</ReactMarkdown>;
}

function MathMarkdown({ children, option = false }) {
  return <div className={option ? "md-content option-math" : "md-content"}>
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{prepareMarkdown(children, option)}</ReactMarkdown>
  </div>;
}

function loadQuestions() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (Array.isArray(saved) && saved.length) {
      return saved.map((q) => ({
        ...q,
        formula: normalizeFieldText(q.formula || ""),
        explanation: normalizeFieldText(q.explanation || ""),
        notes: normalizeFieldText(q.notes || ""),
        answerText: q.answerText || "",
        options: Array.isArray(q.options) ? q.options : [],
      }));
    }
  } catch (error) {
    console.error("Could not load saved questions:", error);
  }

  return initialQuestions.map((q) => ({
    ...q,
    formula: normalizeFieldText(q.formula || ""),
    explanation: normalizeFieldText(q.explanation || ""),
    notes: normalizeFieldText(q.notes || ""),
  }));
}
function parseMarkdownQuestions(source, fallbackWeek) {
  const text = cleanSource(source);
  const sections = [...text.matchAll(/^#{2,4}\s*(Q(?:uestion)?\s*\d+)[.\s—–-]*(.*?)\s*$/gim)];
  const parsed = [];
  if (!sections.length) return parsed;
  for (let i = 0; i < sections.length; i++) {
    const head = sections[i], end = sections[i + 1]?.index ?? text.length;
    let block = text.slice(head.index + head[0].length, end);
    let week = Number((text.match(/^#{1,3}\s*(?:week|wk)\s*[-:]?\s*(\d+)/im) || [])[1] || fallbackWeek || 3);
    const title = head[2].trim();
    const qLabel = block.match(/\*\*(?:Original question|Question)\s*:?\*\*/i);
    if (qLabel) block = block.slice(qLabel.index + qLabel[0].length);
    const answerMatch = block.match(/\*\*(?:Correct option expected by the quiz|Correct option|Correct answer|Calculated answer|Final answer)\s*:\*\*\s*([\s\S]*?)(?=\n|$)/i)
      || block.match(/\*\*(?:Correct option expected by the quiz|Correct option|Correct answer|Calculated answer|Final answer)\s*:\s*([\s\S]*?)\*\*/i);
    const answerText = answerMatch?.[1]?.trim() || "";

    const formulaMatch = block.match(/\*\*(?:Formulas?|Formula(?:s)?|Key formula(?:s)?)\s*:?\*\*\s*([\s\S]*?)(?=\n\*\*(?:Explanation|Solution|Reasoning)|\n---|\n## |$)/i)
      || block.match(/\*\*(?:Formulas?|Formula(?:s)?|Key formula(?:s)?)\s*:\s*([\s\S]*?)(?=\n\*\*(?:Explanation|Solution|Reasoning)|\n---|\n## |$)/i);
    const solutionMatch = block.match(/\*\*Solution\s*:?\*\*\s*([\s\S]*?)(?=\n\*\*(?:Question|Options|Correct option|Formulas?|Formula|Explanation|Reasoning|Memory trick|Exam trap)|\n---|\n## |$)/i)
      || block.match(/\*\*(?:Explanation|Reasoning)\s*:?\*\*\s*([\s\S]*?)(?=\n\*\*(?:Question|Options|Correct option|Formulas?|Formula|Memory trick|Exam trap)|\n---|\n## |$)/i);
    const formula = normalizeFieldText(formulaMatch?.[1] || "");
    const explanation = normalizeFieldText(solutionMatch?.[1] || "");
    let answer = null;
    const answerLetter = answerText.match(/\(([A-D])\)/i) || answerText.match(/\b([A-D])\b/i);
    if (answerLetter) answer = answerLetter[1].toUpperCase().charCodeAt(0) - 65;
    const answerPos = answerMatch ? block.indexOf(answerMatch[0]) : block.length;
    const preAnswer = block.slice(0, answerPos);
    const optionHeader = preAnswer.match(/\*\*Options?\s*:?\*\*/i);
    const optionStart = optionHeader ? optionHeader.index + optionHeader[0].length : 0;
    const optionArea = preAnswer.slice(optionStart);
    const marks = [...optionArea.matchAll(/(?:^|\s)(?:[-*]\s*)?\(([A-D])\)\s*/gim)];
    const options = [];
    for (let j = 0; j < marks.length && options.length < 4; j++) {
      const letter = marks[j][1].toUpperCase();
      if (letter.charCodeAt(0) !== 65 + options.length) continue;
      const start = marks[j].index + marks[j][0].length;
      const finish = marks[j + 1]?.index ?? optionArea.length;
      let value = optionArea.slice(start, finish).replace(/^\s*[-*]\s*/g, "").trim();
      value = value.replace(/\s+-\s*$/g, "").trim();
      options.push(value);
    }
    let question = optionHeader ? block.slice(0, optionHeader.index) : optionArea.slice(0, marks[0]?.index ?? optionArea.length);
    question = question.replace(/^\s*\*\*Question type:[\s\S]*?\n\n/i, "").trim();
    question = question.replace(/^\s*\*\*Given:[\s\S]*?(?=\n\n|$)/i, "").trim();
    const weekMatch = title.match(/week\s*(\d+)/i);
    if (weekMatch) week = Number(weekMatch[1]);
    if (question && options.length >= 2) {
      parsed.push({
        id: `w${week}-import-${Date.now()}-${i}-${Math.random().toString(36).slice(2,6)}`,
        week, number: Number((head[1].match(/\d+/) || [i + 1])[0]), title,
        question: question.replace(/^\s*[-*]+\s*/, "").trim(),
        options: options.map(o => cleanSource(o).replace(/^\(|\)$/g, "")),
        answer: answer !== null && answer < options.length ? answer : null,
        answerText: answerText,
        formula, explanation, notes: explanation
      });
    }
  }
  return parsed;
}

function App() {
  const [questions, setQuestions] = useState(loadQuestions);
  const [page, setPage] = useState("study");
  const [mode, setMode] = useState("week");
  const [selectedWeek, setSelectedWeek] = useState(3);
  const [session, setSession] = useState([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState({});
  const [revealed, setRevealed] = useState({});
  const [showNotes, setShowNotes] = useState({});
  const [query, setQuery] = useState("");
  const [editId, setEditId] = useState(null);
  const [draft, setDraft] = useState({ week: 3, question: "", options: ["", "", "", ""], answer: 0, formula: "", explanation: "" });
  const [notice, setNotice] = useState("");
  const fileRef = useRef(null);
  const weeks = useMemo(() => [...new Set(questions.map(q => Number(q.week)))].sort((a,b)=>a-b), [questions]);
  const current = session[index];
  React.useEffect(() => {
    if (page === "study" && session.length) {
      requestAnimationFrame(() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [session.length, page]);
  const filtered = useMemo(() => questions.filter(q => (!query || `${q.question} ${q.title} ${q.options.join(" ")}`.toLowerCase().includes(query.toLowerCase()))), [questions, query]);
  function persist(next) { setQuestions(next); localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); }
  function start(nextMode = mode, week = selectedWeek) {
    let pool = questions.filter(q => nextMode === "mix" || Number(q.week) === Number(week));
    if (!pool.length) { setNotice(`Week ${week} mein abhi questions nahi hain. Manage Questions se Markdown import karo.`); return; }
    pool = [...pool].sort(() => Math.random() - 0.5);
    setMode(nextMode); setSelectedWeek(Number(week)); setSession(pool); setIndex(0); setPicked({}); setRevealed({}); setShowNotes({}); setPage("study"); setNotice("");
  }
  function importFiles(files) {
    const arr = Array.from(files || []);
    if (!arr.length) return;
    Promise.all(arr.map(file => new Promise(resolve => {
      const match = file.name.match(/(?:week|wk)[ _-]?(\d+)/i);
      const fallback = match ? Number(match[1]) : selectedWeek;
      const reader = new FileReader();
      reader.onload = () => resolve({ name: file.name, parsed: parseMarkdownQuestions(String(reader.result || ""), fallback) });
      reader.onerror = () => resolve({ name: file.name, parsed: [] });
      reader.readAsText(file);
    }))).then(results => {
      const imported = results.flatMap(r => r.parsed);
      if (!imported.length) { setNotice("No questions detected. Is file format ke liye parser ko adapt karna hoga; existing bank safe hai."); return; }
      persist([...questions, ...imported]); setNotice(`${imported.length} questions imported from ${results.length} file(s). Existing questions were preserved.`); setQuery("");
    });
    if (fileRef.current) fileRef.current.value = "";
  }
  function saveDraft() {
    const q = { ...draft, week: Number(draft.week), options: draft.options.map(s => s.trim()).filter(Boolean), answer: Number(draft.answer), title: draft.title || `Question ${questions.length + 1}`, notes: draft.notes || "" };
    if (!q.question.trim() || q.options.length < 2) { setNotice("Question aur kam se kam 2 options required hain."); return; }
    if (q.answer >= q.options.length) q.answer = 0;
    if (editId) persist(questions.map(item => item.id === editId ? { ...item, ...q, id: editId } : item));
    else persist([...questions, { ...q, id: `w${q.week}-${Date.now()}` }]);
    setEditId(null); setDraft({ week: selectedWeek, question: "", options: ["", "", "", ""], answer: 0, formula: "", explanation: "" }); setNotice(editId ? "Question updated." : "Question added.");
  }
  function editQuestion(q) { setEditId(q.id); setDraft({ ...q, options: [...q.options, "", "", "", ""].slice(0,4), formula: q.formula || "", explanation: q.explanation || q.notes || "" }); setPage("manage"); }
  function deleteQuestion(id) { if (confirm("Delete this question?")) { persist(questions.filter(q => q.id !== id)); setNotice("Question deleted."); } }
  function exportMarkdown() {
    const text = weeks.map(w => `# Week ${w}\n\n` + questions.filter(q => Number(q.week)===w).map((q,i)=>`## Q${q.number || i+1}. ${q.title || q.question}\n\n${q.question}\n\n**Options**\n\n${q.options.map((o,j)=>`- (${String.fromCharCode(97+j)}) ${o}`).join("\n")}\n\n${q.answer == null ? "**Correct answer: unconfirmed**" : `**Correct option: (${String.fromCharCode(97+q.answer)})**`}\n\n**Formula:**\n\n${q.formula || ""}\n\n**Explanation:**\n\n${q.explanation || q.notes || ""}`).join("\n\n")).join("\n\n");
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href=url; a.download="solid-stateless-questions.md"; a.click(); URL.revokeObjectURL(url);
  }
  const answered = Object.keys(picked).filter(id => revealed[id]).length;
  const correct = Object.keys(picked).filter(id => revealed[id] && picked[id] === session.find(q=>q.id===id)?.answer).length;
  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={() => setPage("study")} aria-label="Solid Stateless home"><span className="brand-shapes"><i/><b/><em/></span><span>SOLID<br/>STATELESS<span className="brand-dot">.</span></span></button>
      <div className="top-meta"><span className="course-tag">NPTEL / SOLID STATE PHYSICS</span><button className={`nav-link ${page==="study"?"active":""}`} onClick={()=>setPage("study")}><BookOpen size={16}/> Study</button><button className={`nav-link ${page==="manage"?"active":""}`} onClick={()=>setPage("manage")}><Pencil size={16}/> Manage questions</button></div>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="red-dot"/> YOUR PERSONAL REVISION SYSTEM</p><h1>KNOW THE<br/><span>STATE</span> OF<br/>YOUR SOLIDS.</h1><p className="hero-sub">Build recall, one question at a time.</p><div className="hero-actions"><button className="btn btn-red" onClick={()=>document.getElementById("study-modes")?.scrollIntoView({behavior:"smooth",block:"start"})}>Choose a recall session <ArrowRight size={17}/></button></div></div>
        <div className="hero-art" aria-hidden="true"><div className="art-circle"/><div className="art-square"/><div className="art-center"><span>SS</span><small>RECALL<br/>REPEAT<br/>RETAIN</small></div><div className="art-triangle"/></div>
        <div className="hero-index">01 / REVISE</div>
      </section>
      {notice && <div className="notice" role="status"><CircleHelp size={17}/>{notice}<button onClick={()=>setNotice("")} aria-label="Dismiss"><X size={15}/></button></div>}
      {page === "study" ? <section className="workspace" id="study-modes">
        <div className="section-heading"><div><p className="eyebrow">PICK YOUR MODE</p><h2>HOW DO YOU<br/>WANT TO STUDY?</h2></div><p className="section-caption">Recall the answer before checking it. Repeat difficult questions until the formulas and reasoning stick.</p></div>
        <div className="mode-grid">
          <article className="mode-card week-card"><div className="card-top"><span className="mode-number">01</span><BookOpen size={24}/></div><h3>WEEK BY WEEK</h3><p>One topic at a time. Build confidence before moving on.</p><label htmlFor="week-select">SELECT WEEK</label><select id="week-select" value={selectedWeek} onChange={e=>setSelectedWeek(Number(e.target.value))}>{Array.from({length:12},(_,i)=>i+1).map(w=><option key={w} value={w}>Week {String(w).padStart(2,"0")} {weeks.includes(w)?"· loaded":"· empty"}</option>)}</select><button className="btn btn-blue full" onClick={()=>start("week",selectedWeek)}>Study this week <ArrowRight size={16}/></button></article>
          <article className="mode-card mix-card"><div className="card-top"><span className="mode-number">02</span><Shuffle size={24}/></div><h3>MIX IT UP</h3><p>Questions from every loaded week, in a new random order.</p><div className="mix-visual"><span className="mix-pill">W03</span><span className="mix-pill red">W08</span><span className="mix-pill yellow">W04</span><span className="mix-pill">W10</span><span className="mix-cross">×</span></div><button className="btn btn-yellow full" onClick={()=>start("mix")}>Start mixed practice <ArrowRight size={16}/></button></article>
          <article className="mode-card manage-card"><div className="card-top"><span className="mode-number">03</span><Layers size={24}/></div><h3>BUILD YOUR BANK</h3><p>Import Weeks 1, 2, 11, 12. Fix typos or edit any existing question.</p><div className="manage-mini"><span><Upload size={15}/> Import .md</span><span><Pencil size={15}/> Edit answers</span></div><button className="btn btn-outline full" onClick={()=>setPage("manage")}>Manage questions <ArrowRight size={16}/></button></article>
        </div>
        {session.length > 0 && <section className="quiz-panel" id="quiz"><div className="quiz-head"><div><p className="eyebrow">ACTIVE SESSION</p><h2>{mode==="mix"?"MIXED PRACTICE":`WEEK ${String(selectedWeek).padStart(2,"0")}`}</h2></div><button className="text-button" onClick={()=>{setSession([]);setIndex(0)}}><X size={16}/> Exit session</button></div>
          <div className="progress-row"><span>QUESTION {index+1} / {session.length}</span><span>{answered} ANSWERED · {correct} CORRECT</span></div><div className="progress-track"><span style={{width:`${((index+1)/session.length)*100}%`}}/></div>
          {current && <div className="question-area"><div className="question-meta"><span className="week-stamp">WEEK {String(current.week).padStart(2,"0")}</span><span>QUESTION {String(current.number || index+1).padStart(2,"0")}</span></div><div className="question-prompt"><MathMarkdown>{current.question}</MathMarkdown></div>{current.title&&<p className="question-title">{current.title}</p>}<div className="option-list">{current.options.map((option,i)=>{const chosen=picked[current.id]===i;const show=!!revealed[current.id];const correctAnswer=current.answer!=null&&i===current.answer;return <button key={i} className={`option ${chosen?"chosen":""} ${show&&correctAnswer?"right":""} ${show&&chosen&&!correctAnswer?"wrong":""}`} onClick={()=>{if(!show)setPicked(p=>({...p,[current.id]:i}))}} disabled={show}><span className="option-letter">{String.fromCharCode(65+i)}</span><div className="option-text"><MathMarkdown option>{option}</MathMarkdown></div>{show&&correctAnswer&&<Check size={18}/ >}{show&&chosen&&!correctAnswer&&<X size={18}/>}</button>})}</div>
            {!revealed[current.id] ? <button className="btn btn-red submit-answer" disabled={picked[current.id]===undefined} onClick={()=>setRevealed(r=>({...r,[current.id]:true}))}>Check answer <Check size={17}/></button> : (
              <div className={`explanation ${current.answer==null?"unknown":picked[current.id]===current.answer?"good":"bad"}`}>
                <strong>{current.answer==null?"ANSWER NOT CONFIRMED IN SOURCE":picked[current.id]===current.answer?"CORRECT — NICE RECALL.":"NOT QUITE — REVIEW THIS ONE."}</strong>
                {current.answerText && <p className="source-answer"><MathMarkdown>{current.answerText}</MathMarkdown></p>}
                {current.formula?.trim() && <div className="feedback-field"><b>KEY FORMULA</b><MathDisplay>{current.formula}</MathDisplay></div>}
                {(current.explanation || current.notes)?.trim() && <div className="feedback-field"><b>EXPLANATION</b><MathMarkdown>{current.explanation || current.notes}</MathMarkdown></div>}
                {current.answer != null && picked[current.id] !== current.answer && (
                  <button
                    className="btn btn-outline retry-answer"
                    onClick={() => {
                      setRevealed((r) => ({ ...r, [current.id]: false }));
                      setPicked((p) => {
                        const next = { ...p };
                        delete next[current.id];
                        return next;
                      });
                    }}
                  >
                    <RotateCcw size={15} /> Try again / change answer
                  </button>
                )}
              </div>
            )}
            <div className="quiz-nav"><button className="btn btn-outline" disabled={index===0} onClick={()=>setIndex(i=>i-1)}><ChevronLeft size={17}/> Previous</button>{index<session.length-1?<button className="btn btn-blue" onClick={()=>setIndex(i=>i+1)}>Next question <ChevronRight size={17}/></button>:<button className="btn btn-yellow" onClick={()=>{setSession([]);setNotice(`Session complete: ${correct}/${answered} correct. Start another round when ready.`)}}>Finish session <Check size={17}/></button>}</div>
          </div>}
        </section>}
      </section> : <section className="workspace manage-workspace">
        <div className="section-heading"><div><p className="eyebrow">YOUR QUESTION BANK</p><h2>KEEP IT<br/>CORRECT.</h2></div><p className="section-caption">Import Markdown files, add a question manually, or edit and remove existing entries. Your changes stay in this browser.</p></div>
        <div className="manage-toolbar"><div className="searchbox"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search questions or options…"/></div><button className="btn btn-blue" onClick={()=>fileRef.current?.click()}><Upload size={16}/> Import .md files</button><input ref={fileRef} className="hidden" type="file" accept=".md,.markdown,.txt,text/markdown,text/plain" multiple onChange={e=>importFiles(e.target.files)}/><button className="btn btn-yellow" onClick={exportMarkdown}><FileText size={16}/> Export bank</button></div>
        <div className="import-note"><strong>MARKDOWN IMPORT FORMAT</strong><code>{`# Week 3\n\n## Q1. Your question here?\n**Options**\n- (a) First option\n- (b) Second option\n- (c) Third option\n- (d) Fourth option\n**Correct option: (b)**`}</code><p>Importer supports common assignment/quiz Markdown patterns: Q headings, optional “Original question” labels, option labels (a)–(d), and marked correct answers. File names like <b>Week 11.md</b> set the fallback week. Existing questions are preserved.</p></div>
        <div className="editor-layout"><form className="editor-card" onSubmit={e=>{e.preventDefault();saveDraft()}}><div className="editor-title"><span className="editor-icon"><Plus size={19}/></span><div><p className="eyebrow">{editId?"EDIT ENTRY":"ADD MANUALLY"}</p><h3>{editId?"Edit question":"New question"}</h3></div></div>
          <label>WEEK<select value={draft.week} onChange={e=>setDraft(d=>({...d,week:Number(e.target.value)}))}>{Array.from({length:12},(_,i)=>i+1).map(w=><option key={w} value={w}>Week {w}</option>)}</select></label>
          <label>QUESTION<textarea required rows="3" value={draft.question} onChange={e=>setDraft(d=>({...d,question:e.target.value}))} placeholder="Type the question exactly as it appears in NPTEL…"/></label>
          <div className="option-edit-label">OPTIONS <span>Choose the radio button for the correct answer.</span></div>
          {draft.options.map((o,i)=><div className="option-input" key={i}><input type="radio" name="correct" checked={Number(draft.answer)===i} onChange={()=>setDraft(d=>({...d,answer:i}))} aria-label={`Mark option ${String.fromCharCode(65+i)} correct`}/><span>{String.fromCharCode(65+i)}</span><input value={o} onChange={e=>setDraft(d=>({...d,options:d.options.map((v,j)=>i===j?e.target.value:v)}))} placeholder={`Option ${String.fromCharCode(65+i)}`}/></div>)}
          <label>FORMULA(S) (OPTIONAL)<textarea rows="2" value={draft.formula||""} onChange={e=>setDraft(d=>({...d,formula:e.target.value}))} placeholder="e.g. \sigma = nq\mu or \frac{1}{2}..."/></label><label>EXPLANATION (OPTIONAL)<textarea rows="4" value={draft.explanation||""} onChange={e=>setDraft(d=>({...d,explanation:e.target.value}))} placeholder="Step-by-step reasoning, why this option is correct, and a memory cue…"/></label>
          <div className="editor-actions"><button className="btn btn-red" type="submit">{editId?"Save changes":"Add question"} <Check size={16}/></button>{editId&&<button className="btn btn-outline" type="button" onClick={()=>{setEditId(null);setDraft({week:selectedWeek,question:"",options:["","","",""],answer:0,formula:"",explanation:""})}}>Cancel</button>}</div>
        </form>
        <div className="question-bank"><div className="bank-heading"><div><p className="eyebrow">ALL ENTRIES</p><h3>{filtered.length} questions</h3></div><button className="text-button" onClick={()=>{if(confirm("Reset all questions to the original Weeks 3–10 bank? This removes imported and edited questions.")){persist(initialQuestions);setNotice("Original question bank restored.");}}}><RotateCcw size={15}/> Reset bank</button></div>
          {filtered.length===0?<div className="empty-state"><CircleHelp size={28}/><strong>No questions found</strong><p>Try another search or import a Markdown file.</p></div>:filtered.map((q,i)=><article className="bank-item" key={q.id}><div className="bank-item-top"><span className="week-stamp">WEEK {String(q.week).padStart(2,"0")}</span><span className="bank-count">#{String(q.number || i+1).padStart(2,"0")}</span></div><div className="bank-question-title"><MathMarkdown>{q.question}</MathMarkdown></div><ol type="A">{q.options.map((o,j)=><li className={j===q.answer?"correct-option":""} key={j}><MathMarkdown option>{o}</MathMarkdown>{j===q.answer&&<Check size={13}/>}</li>)}</ol>{(q.formula||q.explanation||q.notes)&&<details className="bank-notes"><summary>Formula & explanation</summary>{(q.formula)&&<><b>Formula</b><MathMarkdown>{q.formula}</MathMarkdown></>}{(q.explanation||q.notes)&&<><b>Explanation</b><MathMarkdown>{q.explanation||q.notes}</MathMarkdown></>}</details>}<div className="bank-actions"><button onClick={()=>editQuestion(q)}><Pencil size={14}/> Edit</button><button className="delete-action" onClick={()=>deleteQuestion(q.id)}><Trash2 size={14}/> Delete</button></div></article>)}
        </div></div>
      </section>}
    </main>
    <footer>
      <div className="footer-brand">
        <div className="footer-logo"><span className="brand-shapes"><i/><b/><em/></span> SOLID STATELESS</div>
        <div className="footer-links">
          <a href="https://harsimran-singh" target="_blank" rel="noreferrer">Website</a>
          <a href="https://github.com/harsimran-singh" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <p>MADE FOR RECALL, NOT CRAMMING.</p>
      <span>LOCAL-FIRST · YOUR DATA STAYS IN THIS BROWSER</span>
    </footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App />);
