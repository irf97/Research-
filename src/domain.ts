import { z } from 'zod';

export const provenanceKinds = ['USER_DECISION','SOURCE_FACT','AI_INFERENCE','HYPOTHESIS','EXPERIMENT_RESULT','CODE_EVIDENCE'] as const;
export const maturityStates = ['idea','exploring','specified','designed','prototype','implemented','tested','experimentally_validated','published','paused','rejected','superseded'] as const;
export const evidenceStates = ['proposed','specified','implemented','tested','empirically_evaluated','published','unknown'] as const;

export const nodeTypes = [
  'programme','agenda','question','hypothesis','thesis','experiment','project','system','capability','evidence','claim','institution','university','lab','course','person','opportunity','application','decision','risk','constraint','open_question','requirement','milestone','task','artifact','source','context_pack','interaction_stage','evaluator_model'
] as const;

export const relationKinds = [
  'contains','instantiated_by','instantiates','investigates','tests','implemented_in','requires','develops','hosts','produces','conceptual_basis_for','specifies','implementation_evidence_for','test_evidence_for','empirical_evidence_for','publication_evidence_for','contradicts','leaves_unresolved','advances','affects','threatens','extends','precedes','projects_to','closes_gap','relevant_to'
] as const;

export const ProvenanceSchema = z.object({
  kind: z.enum(provenanceKinds),
  sourceId: z.string().optional(),
  note: z.string().optional(),
});

export const BaseNodeSchema = z.object({
  id: z.string(),
  type: z.enum(nodeTypes),
  title: z.string().min(1),
  summary: z.string().default(''),
  status: z.enum(maturityStates).default('idea'),
  evidenceState: z.enum(evidenceStates).default('unknown'),
  importance: z.number().min(0).max(5).optional(),
  confidence: z.number().min(0).max(1).optional(),
  tags: z.array(z.string()).default([]),
  provenance: z.array(ProvenanceSchema).default([]),
  payload: z.record(z.unknown()).default({}),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const RelationSchema = z.object({
  id: z.string(),
  sourceId: z.string(),
  targetId: z.string(),
  kind: z.enum(relationKinds),
  note: z.string().optional(),
  provenance: z.array(ProvenanceSchema).default([]),
});

export type ResearchNode = z.infer<typeof BaseNodeSchema>;
export type ResearchRelation = z.infer<typeof RelationSchema>;

export type ResearchGraph = {
  version: number;
  nodes: ResearchNode[];
  relations: ResearchRelation[];
};

export const inverseLabels: Partial<Record<(typeof relationKinds)[number], string>> = {
  contains: 'part of',
  instantiated_by: 'instantiates',
  instantiates: 'instantiated by',
  investigates: 'investigated by',
  tests: 'tested by',
  implemented_in: 'implements',
  requires: 'required by',
  develops: 'developed by',
  hosts: 'hosted by',
  produces: 'produced by',
  advances: 'advanced by',
  threatens: 'threatened by',
  precedes: 'follows',
};
