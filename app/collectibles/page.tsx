import type { Metadata } from 'next';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title: 'Directive 8020 Collectibles Guide | All Recording & Document Locations',
  description:
    'Complete collectibles guide for Directive 8020. Find all 65 recordings, documents, and secrets across all 8 episodes of the Cassiopeia.',
  openGraph: {
    title: 'Directive 8020 Collectibles Guide | All Locations',
    description:
      'Find every collectible in Directive 8020 — recordings, documents, and hidden secrets across all 8 episodes.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const collectiblesByEpisode = [
  {
    episode: 'episode-1',
    items: [
      { name: 'Simms Recording #1', location: 'Stairs to the left of the Medical Complex objective door', type: 'Recording' },
      { name: 'Crew Quarters Secret #1', location: 'Behind the locker in the eastern Crew Quarters', type: 'Secret' },
      { name: 'Crew Quarters Secret #2', location: 'Under the bunk in the western Crew Quarters', type: 'Secret' },
      { name: 'Hull Breach Log', location: 'Terminal near the breach site', type: 'Document' },
      { name: 'Cassiopeia Crew Manifest', location: 'Medical Complex reception desk', type: 'Document' },
    ],
  },
  {
    episode: 'episode-2',
    items: [
      { name: "Stafford's Personal Log", location: "Commander's quarters, on the desk", type: 'Recording' },
      { name: 'Alien Signal Recording', location: 'Communications array, after the first alarm', type: 'Recording' },
      { name: 'Science Lab Notes', location: "Eisele's workstation in the Science Lab", type: 'Document' },
      { name: 'Engine Room Schematic', location: 'Wall panel in the engine room corridor', type: 'Document' },
    ],
  },
  {
    episode: 'episode-3',
    items: [
      { name: 'Sample Analysis Report', location: 'Containment Lab terminal after studying the sample', type: 'Document' },
      { name: "Cernan's First Recording", location: 'Cargo Bay, on a crate near the starting point', type: 'Recording' },
      { name: 'Briefing Room Minutes', location: 'Tablet on the briefing room table', type: 'Document' },
    ],
  },
];

export default function CollectiblesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Collectibles Guide
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            All recordings, documents, and hidden secrets across the Cassiopeia.
            Currently tracking {collectiblesByEpisode.reduce((sum, ep) => sum + ep.items.length, 0)} collectibles — more coming as episodes are fully mapped.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {collectiblesByEpisode.map((epData) => {
          const ep = episodes.find((e) => e.id === epData.episode);
          return (
            <section key={epData.episode}>
              <h2 className="text-xl font-bold text-slate-100 mb-4">
                Episode {ep?.number}: {ep?.title}
                <span className="text-sm text-slate-500 ml-2">
                  ({epData.items.length} collectibles)
                </span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-left">
                      <th className="py-3 pr-4 text-slate-400 font-medium">Item</th>
                      <th className="py-3 pr-4 text-slate-400 font-medium">Type</th>
                      <th className="py-3 text-slate-400 font-medium">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {epData.items.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30">
                        <td className="py-3 pr-4 font-medium">{item.name}</td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            item.type === 'Recording'
                              ? 'bg-violet-900/40 text-violet-300'
                              : item.type === 'Secret'
                              ? 'bg-amber-900/40 text-amber-300'
                              : 'bg-slate-700/40 text-slate-300'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-3 text-slate-400 text-xs">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <p className="text-slate-400 text-sm">
            Episodes 4-8 collectible locations are being mapped and will be added soon.
            Check individual episode walkthroughs for collectible hints in the meantime.
          </p>
        </div>
      </div>
    </>
  );
}
