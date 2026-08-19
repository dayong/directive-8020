import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Directive 8020 Codes & Passwords — All Door Codes and Puzzle Solutions',
  description:
    'All Directive 8020 codes: Locker Room 13576, Carter\'s PC 0828, Food Storage 0402, Diazepam 168, Anomaly Log 3196, Charybdis Probe 2540 — with how to find each one.',
  openGraph: {
    title: 'Directive 8020 Codes & Passwords — All Door Codes and Puzzle Solutions',
    description:
      'Every door code and keypad password in Directive 8020, with the environmental clues that reveal each one.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const codes = [
  {
    location: 'Locker Room',
    episode: 'Episode 2 — Best Laid Plans',
    code: '13576',
    how: 'Leave the Locker Room and return to the Atrium. Climb the stairs to the upper level, use the Utility Strap to open the shutter across from the landing, then use the device again through the window to unlock the door. Inside, the security camera (CCTV) feed displays the code on screen.',
  },
  {
    location: "Carter's PC",
    episode: 'Episode 2 — Best Laid Plans',
    code: '0828',
    how: "A sticky note on Carter's monitor reads \"Luna\" with a party hat drawn next to it. Check the calendar in the adjacent room: Luna's birthday is August 28. Enter 0828 (US date format) — 2808 also works in some versions.",
  },
  {
    location: 'Food Storage Room',
    episode: 'Episode 3 — The Sample',
    code: '0402',
    how: "During the search of the Mess Hall, use the Wedge Tool to open the only wedge-accessible side room in the far corner. As you leave, look at the door frame — a handwritten note there gives the code. Enter it at the Kitchen pantry keypad to reveal a lore secret.",
  },
  {
    location: 'Diazepam Synthesis',
    episode: 'Episode 5 — Mr. Williams',
    code: '168',
    how: 'Match the three chemical structures shown on the Diazepam display to their numbered cabinet labels: Chloroacetyl chloride = 1, Ammonia = 6, Dimethyl sulphate = 8.',
  },
  {
    location: 'Anomaly Log',
    episode: 'Episode 5 — Mr. Williams',
    code: '3196',
    how: "While playing as Cernan in Bridge Ops, go through the door to the right of the locked terminal and follow the hallway to the cockpit. A note near the pilot's chair reads \"Anomaly log code: CAIF.\" Convert letters to alphabet positions: C=3, A=1, I=9, F=6.",
  },
  {
    location: 'Charybdis Probe Serial Number',
    episode: 'Episode 7 — Cycle 13',
    code: '2540',
    how: "The terminal requests the probe's serial number. Inspect the probe front (shows \"2\") and back (shows \"40\"), giving the pattern 2_40. The complete serial number is 2540.",
  },
];

export default function CodesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Directive 8020 Codes &amp; Passwords
          </h1>
          <p className="text-violet-300 font-medium text-lg mb-2">
            All 6 door codes and keypad passwords, with the clues that reveal each one.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Codes are fixed across every playthrough. Most unlock lore,
            secrets, and collectibles rather than story progression.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Quick Reference Table */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Quick Reference — Every Code
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 pr-4 text-slate-400 font-medium">Location</th>
                  <th className="py-3 pr-4 text-slate-400 font-medium">Episode</th>
                  <th className="py-3 text-slate-400 font-medium">Code</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {codes.map((c) => (
                  <tr key={c.location} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 pr-4 font-medium">{c.location}</td>
                    <td className="py-3 pr-4 text-slate-400">{c.episode}</td>
                    <td className="py-3">
                      <code className="px-2 py-1 rounded bg-violet-900/40 text-violet-300 font-bold">
                        {c.code}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per-code solutions */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            How to Find Each Code
          </h2>
          <div className="space-y-6">
            {codes.map((c) => (
              <div
                key={c.location}
                className="border border-slate-700 rounded-lg p-5 bg-slate-800/30"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-slate-100">{c.location}</h3>
                  <span className="text-xs text-slate-500">{c.episode}</span>
                  <code className="px-2 py-0.5 rounded bg-violet-900/40 text-violet-300 font-bold text-sm">
                    {c.code}
                  </code>
                </div>
                <p className="text-sm text-slate-400">{c.how}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cheats */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Does Directive 8020 Have Cheats?
          </h2>
          <p className="text-slate-300">
            <strong>No.</strong> There are no cheat codes or console commands
            in Directive 8020. If you want an easier run, your legitimate
            options are:
          </p>
          <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
            <li><strong>Explorer mode</strong> — more generous QTE timers and clearer telegraphing of dangerous choices</li>
            <li><strong>Turning Points</strong> — jump back to any major decision via chapter select to fix mistakes without a full replay</li>
            <li>The <Link href="/walkthrough" className="text-violet-400 hover:underline">full walkthrough</Link> — every choice and consequence, episode by episode</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">Need the surrounding context for a code&apos;s episode?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/walkthrough" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Full Walkthrough →
            </Link>
            <Link href="/collectibles" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              Collectibles Guide →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
