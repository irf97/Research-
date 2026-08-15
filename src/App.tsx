import { useEffect, useMemo, useState } from 'react';
import { BookOpen, BrainCircuit, ChevronRight, Download, FlaskConical, GraduationCap, Network, Search, Sparkles, Target } from 'lucide-react';
import type { ResearchNode } from './domain';
import { db, ensureSeeded, exportCanonicalState } from './lib/db';
import './styles.css';

const agendaMeta: Record<string,{eyebrow:string,accent:string,question:string}> = {
  'agenda-lm': {eyebrow:'INFRASTRUCTURE',accent:'blue',question:'How can physical reality become safely readable and actionable?'},
  'agenda-prox': {eyebrow:'EMERGENCE',accent:'purple',question:'What changes when discovery and competition are constrained by physical proximity?'},
  'agenda-ui': {eyebrow:'INTERACTION GRAMMAR',accent:'violet',question:'How does nearby possibility become spontaneous real-world action?'}
};

function badge(state:string){ return <span className={`badge badge-${state}`}>{state.replaceAll('_',' ')}</span> }

export default function App(){
  const [nodes,setNodes]=useState<ResearchNode[]>([]);
  const [query,setQuery]=useState('');
  const [selected,setSelected]=useState<ResearchNode|null>(null);

  useEffect(()=>{ void (async()=>{ await ensureSeeded(); setNodes(await db.nodes.toArray()); })(); },[]);

  const northStar=nodes.find(n=>n.id==='programme');
  const agendas=nodes.filter(n=>n.type==='agenda');
  const thesis=nodes.filter(n=>n.type==='thesis');
  const projects=nodes.filter(n=>n.type==='project');
  const stages=nodes.filter(n=>n.type==='interaction_stage').sort((a,b)=>Number(a.payload.order)-Number(b.payload.order));
  const capabilities=nodes.filter(n=>n.type==='capability');
  const universities=nodes.filter(n=>n.type==='university');
  const experiments=nodes.filter(n=>n.type==='experiment');

  const results=useMemo(()=>{
    const q=query.trim().toLowerCase(); if(!q) return [];
    return nodes.filter(n=>[n.title,n.summary,n.tags.join(' ')].join(' ').toLowerCase().includes(q)).slice(0,12);
  },[nodes,query]);

  async function downloadJson(){
    const state=await exportCanonicalState();
    const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'})); a.download='research-canon.json'; a.click(); URL.revokeObjectURL(a.href);
  }

  return <div className="app-shell">
    <aside className="rail">
      <div className="brand"><Network size={18}/><strong>NEXUS</strong><span>research os</span></div>
      <nav>
        <a className="active"><Target size={17}/>Command Centre</a>
        <a><Network size={17}/>Research Map</a>
        <a><FlaskConical size={17}/>Thesis Lab</a>
        <a><BrainCircuit size={17}/>Capabilities</a>
        <a><GraduationCap size={17}/>Universities</a>
        <a><BookOpen size={17}/>Evidence</a>
      </nav>
      <div className="rail-foot">local canon<br/><span>{nodes.length} entities</span></div>
    </aside>

    <main>
      <header className="topbar">
        <div className="search-wrap"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the research world…" />{results.length>0&&<div className="search-popover">{results.map(n=><button key={n.id} onClick={()=>{setSelected(n);setQuery('')}}><span>{n.type}</span>{n.title}</button>)}</div>}</div>
        <button className="quiet" onClick={downloadJson}><Download size={16}/>Export canon</button>
      </header>

      <section className="hero">
        <div className="eyebrow">NORTH STAR · EDITABLE CANON</div>
        <h1>{northStar?.summary}</h1>
        <p>Rich structured reality underneath. Simple relevant projections above.</p>
      </section>

      <section>
        <div className="section-head"><div><span>01</span><h2>Research programme</h2></div><p>Three current agendas. Not permanent software categories.</p></div>
        <div className="agenda-grid">{agendas.map(a=>{const m=agendaMeta[a.id];return <button className={`agenda agenda-${m?.accent||'blue'}`} key={a.id} onClick={()=>setSelected(a)}><div className="agenda-top"><span>{m?.eyebrow}</span>{badge(a.evidenceState)}</div><h3>{a.title.split(' — ')[0]}</h3><p>{m?.question||a.summary}</p><div className="agenda-link">Open research world <ChevronRight size={16}/></div></button>})}</div>
      </section>

      <section className="grammar-section">
        <div className="section-head"><div><span>02</span><h2>Spontaneity interaction grammar</h2></div><p>The reusable bridge from local computational reality to human action.</p></div>
        <div className="grammar"><div className="grammar-underlay">LIVINGMESH → PROXIMITY → RELEVANCE → PROJECTION → SESSION ENGINE</div><div className="stage-row">{stages.map((s,i)=><button key={s.id} onClick={()=>setSelected(s)}><span>{String(i+1).padStart(2,'0')}</span><strong>{s.title}</strong>{i<stages.length-1&&<ChevronRight size={16}/>}</button>)}</div><div className="grammar-principle"><Sparkles size={16}/>Maximum infrastructural sophistication underneath; minimum cognitive burden above. The successful interface gets people out of the interface.</div></div>
      </section>

      <section>
        <div className="section-head"><div><span>03</span><h2>Domain experiments</h2></div><p>Projects instantiate agendas; they are not the ontology root.</p></div>
        <div className="project-grid">{projects.map(p=><button className="project-card" key={p.id} onClick={()=>setSelected(p)}><div><span>{p.status}</span>{badge(p.evidenceState)}</div><h3>{p.title}</h3><p>{p.summary}</p></button>)}</div>
      </section>

      <section className="two-col">
        <div><div className="section-head compact"><div><span>04</span><h2>Thesis laboratory</h2></div></div>{thesis.map(t=><button className="list-card" onClick={()=>setSelected(t)} key={t.id}><div><strong>{t.title}</strong><p>{t.summary}</p></div><ChevronRight size={18}/></button>)}</div>
        <div><div className="section-head compact"><div><span>05</span><h2>Active experiments</h2></div></div>{experiments.map(e=><button className="list-card" onClick={()=>setSelected(e)} key={e.id}><div><strong>{e.title}</strong><p>{e.summary}</p></div><ChevronRight size={18}/></button>)}</div>
      </section>

      <section className="two-col">
        <div><div className="section-head compact"><div><span>06</span><h2>Capability gaps</h2></div></div>{capabilities.map(c=><button className="mini-row" onClick={()=>setSelected(c)} key={c.id}><strong>{c.title}</strong><span>current: pending evidence</span></button>)}</div>
        <div><div className="section-head compact"><div><span>07</span><h2>Exchange candidates</h2></div></div>{universities.map(u=><button className="mini-row" onClick={()=>setSelected(u)} key={u.id}><strong>{u.title}</strong><span>verification pending</span></button>)}</div>
      </section>
    </main>

    {selected&&<aside className="drawer"><button className="drawer-close" onClick={()=>setSelected(null)}>×</button><div className="eyebrow">{selected.type}</div><h2>{selected.title}</h2><p className="lead">{selected.summary}</p><div className="drawer-grid"><div><span>Maturity</span>{badge(selected.status)}</div><div><span>Evidence state</span>{badge(selected.evidenceState)}</div><div><span>Provenance</span><strong>{selected.provenance.map(p=>p.kind).join(', ')||'unknown'}</strong></div></div><hr/><h3>Structured payload</h3><pre>{JSON.stringify(selected.payload,null,2)}</pre><hr/><div className="drawer-prompt"><strong>What is missing?</strong><p>This V1 surface intentionally exposes unknown state rather than fabricating detail. Relations, sources, evidence gaps and next actions will progressively attach here.</p></div></aside>}
  </div>
}
