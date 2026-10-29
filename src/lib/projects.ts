import raw from '../data/projects.json';

export type Project = (typeof raw)[number];

const reachable = (url: string) =>
  fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(8000) })
    .then((r) => r.ok)
    .catch(() => false);

export async function loadProjects(): Promise<Project[]> {
  const gated = await Promise.all(
    raw.map(async (p) => (p.requireReachable ? Boolean(p.url) && (await reachable(p.url as string)) : true)),
  );
  return raw.filter((_, i) => gated[i]);
}
