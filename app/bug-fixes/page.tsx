import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Directive 8020 Bug Fixes & Crashing Solutions',
  description:
    "Fix Directive 8020 crashing, black screen, won't launch, stuttering and save corruption issues on PC, PS5, and Xbox.",
  openGraph: {
    title: 'Directive 8020 Bug Fixes & Crashing Solutions',
    description:
      'Fix Directive 8020 technical issues on PC, PS5, and Xbox. Black screen, crashing, stuttering, and save corruption solutions.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function BugFixesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Bug Fixes & Crashing Solutions
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Fix common Directive 8020 technical issues — black screen, crashing,
            stuttering, and save corruption on PC, PS5, and Xbox.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 mdx-content">
        {/* PC Issues */}
        <section id="pc">
          <h2>PC Issues</h2>

          <h3>Black Screen on Launch</h3>
          <ul>
            <li>Update GPU drivers — <strong>NVIDIA</strong> (GeForce Experience) or <strong>AMD</strong> (Adrenalin)</li>
            <li>Run the game as administrator (right-click → Run as Administrator)</li>
            <li>Verify game files on Steam (Library → Directive 8020 → Properties → Installed Files → Verify integrity)</li>
            <li>Disable overlay apps: Discord overlay, GeForce Experience overlay, Steam overlay</li>
            <li>Set DirectX version to DX11 in Steam launch options: <code>-dx11</code></li>
          </ul>

          <h3>Game Won&apos;t Launch</h3>
          <ul>
            <li>Install or repair <strong>Visual C++ Redistributable</strong> (download from Microsoft)</li>
            <li>Temporarily disable antivirus — some AVs flag the game executable as a false positive</li>
            <li>Clear Steam download cache (Steam → Settings → Downloads → Clear Download Cache)</li>
            <li>Restart your PC and try launching before opening other applications</li>
          </ul>

          <h3>Stuttering / Low FPS</h3>
          <ul>
            <li>Lower <strong>shadow quality</strong> first — this has the biggest performance impact</li>
            <li>Disable motion blur in graphics settings</li>
            <li>Cap framerate to 60fps for stability (in-game or via GPU control panel)</li>
            <li>Close background applications (Chrome, Discord, etc.)</li>
          </ul>

          <h3>Recommended Specs</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Minimum</th>
                  <th>Recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GPU</strong></td>
                  <td>GTX 1060</td>
                  <td>RTX 2070</td>
                </tr>
                <tr>
                  <td><strong>RAM</strong></td>
                  <td>12GB</td>
                  <td>16GB</td>
                </tr>
                <tr>
                  <td><strong>Storage</strong></td>
                  <td>50GB SSD</td>
                  <td>50GB NVMe SSD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PS5 Issues */}
        <section id="console">
          <h2>PS5 Issues</h2>

          <h3>Crashing to Dashboard</h3>
          <ul>
            <li>Rebuild PS5 database: Boot into <strong>Safe Mode</strong> (hold power button for 7 seconds) → select <strong>Option 5: Rebuild Database</strong></li>
            <li>Delete saved data and re-download from cloud</li>
            <li>Check for game update: highlight game tile → Options → Check for Update</li>
            <li>Ensure system software is up to date</li>
          </ul>

          <h3>Save Corruption</h3>
          <ul>
            <li>Enable <strong>auto-upload to PS Plus cloud</strong> (Settings → Saved Data → Auto-Upload)</li>
            <li>Manually back up your save before using Turning Points extensively</li>
            <li>Keep at least 2 save slots — rotate between them</li>
          </ul>
        </section>

        {/* Xbox Issues */}
        <section>
          <h2>Xbox Issues</h2>
          <ul>
            <li>Try both <strong>Performance mode</strong> (60fps target) and <strong>Quality mode</strong> (4K/30fps) to see which is more stable</li>
            <li>Game Pass install issues: fully uninstall the game, clear Xbox cache (hold power button for 10 seconds), and reinstall</li>
            <li>Check for game updates in My Games & Apps → Manage → Updates</li>
          </ul>
        </section>

        {/* General Tips */}
        <section>
          <h2>General Tips</h2>
          <ul>
            <li>Always check for the <strong>latest patch</strong> before troubleshooting — Supermassive Games typically releases stability patches within the first week</li>
            <li>Current known issues are being tracked by Supermassive Games on their official channels</li>
            <li>For unrecoverable save issues, use the <strong>Turning Points</strong> system via chapter select to jump back without losing all progress</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">Having a different issue? Check our full guides:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/walkthrough" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Full Walkthrough →
            </Link>
            <Link href="/save-everyone" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              Save Everyone Guide →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
