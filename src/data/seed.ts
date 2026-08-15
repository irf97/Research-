import type { ResearchGraph, ResearchNode, ResearchRelation } from '../domain';

const now = '2026-08-15T14:00:00Z';
const n = (id: string, type: ResearchNode['type'], title: string, summary: string, status: ResearchNode['status']='exploring', evidenceState: ResearchNode['evidenceState']='proposed', tags: string[]=[], payload: Record<string, unknown>={}): ResearchNode => ({id,type,title,summary,status,evidenceState,tags,payload,provenance:[{kind:'USER_DECISION'}],createdAt:now,updatedAt:now});
const r = (id:string, sourceId:string, kind:ResearchRelation['kind'], targetId:string, note?:string):ResearchRelation => ({id,sourceId,targetId,kind,note,provenance:[{kind:'USER_DECISION'}]});

export const seedGraph: ResearchGraph = {
  version: 1,
  nodes: [
    n('programme','programme','I-Tech Research Programme','Human-centred computational infrastructure for physical reality.','exploring','proposed',['north-star']),
    n('agenda-lm','agenda','LivingMesh — Infrastructure','Make physical reality safely readable and actionable by humans, agents, robots, devices, places and institutions.','exploring','specified',['infrastructure']),
    n('agenda-prox','agenda','Proximity Ecology — Emergence','Study what changes when discovery, participation, competition, culture and talent development are constrained by physical proximity.','exploring','proposed',['proximity','emergence']),
    n('agenda-ui','agenda','Spontaneity Interface — Interaction Grammar','Design an interaction grammar that turns nearby possibility into spontaneous real-world action.','exploring','proposed',['interaction','ui']),
    n('project-fu','project','Football United','Experimental domain for proximity ecology, contextual rankings, local football cultures and spontaneity interfaces.','prototype','implemented',['football']),
    n('project-spectrum','project','Spectrum','Context/persona/relevance experiment for deciding what should surface for a person now.','exploring','unknown',['social','relevance']),
    n('project-grind','project','Grind','Students and organizations rapidly forming teams around real projects, problems, capabilities and resources.','idea','proposed',['projects','teams']),
    n('project-irftek','project','IrfTek Runtime','Reference implementation family for the LivingMesh runtime.','prototype','specified',['runtime']),
    n('thesis-lm','thesis','Human-Governed Embodied LivingMesh','Evaluate a bounded LivingMesh claim involving embodied agents, local authority, override and human control.','exploring','proposed',['thesis'],{scope:'bounded empirical claim; not the whole world system'}),
    n('thesis-prox','thesis','Proximity-Constrained Talent & Cultural Emergence','Compare global-search, strict-local and federated-proximity football worlds.','exploring','proposed',['thesis','football']),
    n('thesis-ui','thesis','Proximity-World Interaction Grammar','Evaluate whether a proximity-world interface better converts nearby possibility into real-world action.','exploring','proposed',['thesis','hci']),
    n('exp-ui','experiment','Directory vs Feed vs Proximity-World UI','Compare three discovery paradigms on real-world action formation.','specified','specified',['hci','spontaneity'],{conditions:['directory','feed','proximity-world'],metrics:['time to action','screen time before action','planning actions','successful spontaneous sessions','serendipity','agency','comprehension','social comfort','repeat physical participation','discovery diversity']}),
    n('exp-football-worlds','experiment','Football discovery world comparison','Compare globally searchable talent discovery, strict-local discovery and federated proximity discovery.','exploring','proposed',['football','simulation'],{conditions:['global-search','strict-local','federated-proximity'],metrics:['top-talent discovery rate','time to elite competition','local skill growth','style diversity','competitive parity','talent migration','spectator interest']}),
    n('claim-attention','hypothesis','Physical presence may gain relative value under digital abundance','As screen-mediated content becomes effectively abundant, scarce in-person presence and local experience may become relatively more valuable.','exploring','proposed',['attention','locality']),
    n('cap-hri','capability','HRI experimental design','Current level pending evidence assessment; target is sufficient capability to design and run defensible HRI studies.','exploring','unknown',['hri']),
    n('cap-embodied','capability','Embodied AI','Current level pending evidence assessment; target is advanced prototype/research capability.','exploring','unknown',['embodied-ai']),
    n('cap-rl','capability','Reinforcement learning for evaluator ecologies','Capability needed for multiple football evaluator agents/models optimized for different desirable outcomes.','exploring','unknown',['rl']),
    n('uni-tokyo','university','The University of Tokyo','Candidate exchange/research host. Exact eligibility, labs and course access remain pending verification.','exploring','unknown',['exchange']),
    n('uni-tsukuba','university','University of Tsukuba','Candidate exchange/research host. Exact 2027 access and assessment details remain pending verification.','exploring','unknown',['exchange']),
    n('uni-hanyang','university','Hanyang University','Candidate exchange host; future concrete English course package remains pending verification.','exploring','unknown',['exchange']),
    n('uni-melbourne','university','University of Melbourne','Candidate exchange host; 2027/28 availability and exchange access remain pending verification.','exploring','unknown',['exchange']),
    ...['Intent','Nearby Reveal','Possibility','Commitment','Session Formation','Real-World Execution','Reflection','Dissolution'].map((title,i)=>n(`stage-${i}`,'interaction_stage',title,'Stage of the reusable spontaneity interaction grammar.','specified','specified',['interaction-stage'],{order:i+1})),
    ...['Expected win contribution','Spectator enjoyment','Creative unpredictability','Tactical compatibility','Defensive intelligence','Development trajectory','Team chemistry','Evaluator-specific preference'].map((title,i)=>n(`eval-${i}`,'evaluator_model',title,'One independent football evaluation lens; no evaluator is the universal canonical talent score.','exploring','proposed',['football','evaluator']))
  ],
  relations: [
    r('r1','programme','contains','agenda-lm'), r('r2','programme','contains','agenda-prox'), r('r3','programme','contains','agenda-ui'),
    r('r4','agenda-prox','instantiated_by','project-fu'), r('r5','agenda-ui','instantiated_by','project-fu'), r('r6','agenda-ui','instantiated_by','project-spectrum'), r('r7','agenda-ui','instantiated_by','project-grind'),
    r('r8','agenda-lm','instantiated_by','project-irftek'), r('r9','thesis-prox','implemented_in','project-fu'), r('r10','thesis-ui','tests','exp-ui'), r('r11','thesis-prox','tests','exp-football-worlds'),
    r('r12','uni-tokyo','closes_gap','cap-embodied','candidate relation; exact lab path pending verification'), r('r13','uni-tsukuba','closes_gap','cap-hri','candidate relation; exact lab path pending verification'),
    ...Array.from({length:7},(_,i)=>r(`stage-rel-${i}`,`stage-${i}`,'precedes',`stage-${i+1}`))
  ]
};
