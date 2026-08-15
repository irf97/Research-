import Dexie, { type Table } from 'dexie';
import type { ResearchNode, ResearchRelation } from '../domain';
import { seedGraph } from '../data/seed';

class ResearchConsoleDB extends Dexie {
  nodes!: Table<ResearchNode, string>;
  relations!: Table<ResearchRelation, string>;

  constructor() {
    super('research-operating-console');
    this.version(1).stores({
      nodes: 'id,type,title,status,evidenceState,*tags,updatedAt',
      relations: 'id,sourceId,targetId,kind'
    });
  }
}

export const db = new ResearchConsoleDB();

export async function ensureSeeded() {
  if (await db.nodes.count()) return;
  await db.transaction('rw', db.nodes, db.relations, async () => {
    await db.nodes.bulkPut(seedGraph.nodes);
    await db.relations.bulkPut(seedGraph.relations);
  });
}

export async function exportCanonicalState() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    nodes: await db.nodes.toArray(),
    relations: await db.relations.toArray()
  };
}
