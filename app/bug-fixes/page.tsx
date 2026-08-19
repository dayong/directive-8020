import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Directive 8020 Crashing or Fatal Error? How to Fix It',
  description:
    'Directive 8020 crashing, fatal error or save bug? The June 2026 patch fixed the Fatal Error crash, save corruption and loading freezes. Fixes for PC, PS5, Xbox.',
  openGraph: {
    title: 'Directive 8020 Crashing or Fatal Error? How to Fix It',
    description:
      'Directive 8020 crashing, fatal error or save bug? The June 2026 patch fixed the Fatal Error crash, save corruption and loading freezes. Fixes for PC, PS5, Xbox.',
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
            Directive 8020 Crashing or Fatal Error?
          </h1>
          <p className="text-violet-300 font-medium text-lg mb-2">
            Most crash and save bugs are already fixed — update to the latest patch first.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Symptom-by-symptom fixes for crashing, Fatal Error, save bugs,
            black screen, and stuttering on PC, PS5, and Xbox.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 mdx-content">
        {/* Update First */}
        <section>
          <h2>Update First — the Latest Patch Fixes Most Crash &amp; Save Bugs</h2>
          <p>
            Before trying anything else: make sure you&apos;re on the{' '}
            <a
              href="https://store.steampowered.com/news/app/2255370/view/673997481174894605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              June 2026 patch
            </a>
            . Supermassive Games fixed the most-reported crash and save issues
            in it, including:
          </p>
          <ul>
            <li>The <strong>&ldquo;Fatal Error&rdquo; crash</strong> when returning to the Main Menu from exploration areas</li>
            <li><strong>Infinite loading screens</strong> when resuming a save after using Turning Points</li>
            <li><strong>Save corruption</strong> on PS5 (PlayGo install and DualSense Touch Pad triggers)</li>
            <li>The infamous <strong>&ldquo;Missing Legs&rdquo;</strong> character model bug on console</li>
          </ul>
        </section>

        {/* Fatal Error */}
        <section id="pc">
          <h2>Fatal Error Crash on PC — Fixed, but Here&apos;s What to Do If It Persists</h2>
          <p>
            The June 2026 patch fixed the &ldquo;Fatal Error&rdquo; crash that
            occurred when returning to the Main Menu from exploration areas. If
            you still see Fatal Error crashes:
          </p>
          <ul>
            <li>Verify game files on Steam (Library → Directive 8020 → Properties → Installed Files → Verify integrity)</li>
            <li>Update GPU drivers — <strong>NVIDIA</strong> (GeForce Experience) or <strong>AMD</strong> (Adrenalin)</li>
            <li>Disable overlay apps: Discord overlay, GeForce Experience overlay, Steam overlay</li>
            <li>Set DirectX version to DX11 in Steam launch options: <code>-dx11</code></li>
          </ul>
        </section>

        {/* Save Bug */}
        <section>
          <h2>Save Bug &amp; Infinite Loading Screens</h2>
          <p>
            Two save-related bugs were officially fixed in the June 2026 patch:
            an <strong>infinite loading screen when resuming a save</strong>{' '}
            after specific interactions and Turning Point rewinds, and{' '}
            <strong>PS5 save corruption</strong> triggered by the PlayGo
            install feature or by interacting with secrets using the
            DualSense Touch Pad.
          </p>
          <p>If your save is still acting up:</p>
          <ul>
            <li>Confirm the latest patch is installed (the fix is patch-side, not save-side)</li>
            <li>On PS5: enable <strong>auto-upload to PS Plus cloud</strong> (Settings → Saved Data → Auto-Upload)</li>
            <li>Keep at least 2 save slots and rotate between them</li>
            <li>For unrecoverable saves, use <strong>Turning Points</strong> via chapter select to jump back without losing all progress</li>
          </ul>
        </section>

        {/* Won't Launch */}
        <section>
          <h2>Game Crashes or Won&apos;t Launch</h2>
          <ul>
            <li>Install or repair <strong>Visual C++ Redistributable</strong> (download from Microsoft)</li>
            <li>Temporarily disable antivirus — some AVs flag the game executable as a false positive</li>
            <li>Run the game as administrator (right-click → Run as Administrator)</li>
            <li>Clear Steam download cache (Steam → Settings → Downloads → Clear Download Cache)</li>
            <li>Restart your PC and try launching before opening other applications</li>
          </ul>

          <h3>Black Screen on Launch</h3>
          <ul>
            <li>Update GPU drivers first — this fixes most black screen cases</li>
            <li>Verify game files (see above)</li>
            <li>Disable overlays: Discord, GeForce Experience, Steam</li>
            <li>Try <code>-dx11</code> in Steam launch options</li>
          </ul>
        </section>

        {/* Performance */}
        <section>
          <h2>Stuttering &amp; Low FPS</h2>
          <p>
            The May 2026 patch optimized ray tracing and path tracing
            performance. The June 2026 patch also fixed an FPS drop when
            switching screen aspect ratio with Frame Generation &lsquo;On&rsquo;.
          </p>
          <ul>
            <li>Lower <strong>shadow quality</strong> first — this has the biggest performance impact</li>
            <li>Disable motion blur in graphics settings</li>
            <li>If you use Frame Generation, avoid switching aspect ratio mid-session</li>
            <li>Cap framerate to 60fps for stability (in-game or via GPU control panel)</li>
            <li>Close background applications (Chrome, Discord, etc.)</li>
          </ul>
        </section>

        {/* Console */}
        <section id="console">
          <h2>PS5 &amp; Xbox Issues</h2>
          <p>
            The &ldquo;Missing Legs&rdquo; / missing body parts bug (caused by
            PlayGo/FastStart partial installs) is fixed in the June 2026 patch.
            If you still see it, finish the full install or reinstall the game.
          </p>

          <h3>PS5 — Crashing to Dashboard</h3>
          <ul>
            <li>Rebuild PS5 database: Boot into <strong>Safe Mode</strong> (hold power button for 7 seconds) → select <strong>Option 5: Rebuild Database</strong></li>
            <li>Check for game update: highlight game tile → Options → Check for Update</li>
            <li>Ensure system software is up to date</li>
          </ul>

          <h3>Xbox</h3>
          <ul>
            <li>Try both <strong>Performance mode</strong> (60fps target) and <strong>Quality mode</strong> (4K/30fps) to see which is more stable</li>
            <li>Game Pass install issues: fully uninstall the game, clear Xbox cache (hold power button for 10 seconds), and reinstall</li>
            <li>Check for game updates in My Games &amp; Apps → Manage → Updates</li>
          </ul>
        </section>

        {/* Official Patch History */}
        <section>
          <h2>Official Patch History</h2>
          <ul>
            <li>
              <a
                href="https://store.steampowered.com/news/app/2255370/view/673997481174894605"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                June 15, 2026 — Bug Fixes to Improve Player Experience
              </a>{' '}
              — Fatal Error crash, save corruption, infinite loading, Missing Legs, and more fixed
            </li>
            <li>
              <a
                href="https://store.steampowered.com/news/app/2255370/view/671743778889926052"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                May 26, 2026 — Ray Tracing, DLSS, UI Fixes and Steam Deck Improvements
              </a>{' '}
              — ray/path tracing performance, DLSS fixes, HDR settings, Steam Deck UI
            </li>
          </ul>
          <p>
            Still stuck? Report it on the{' '}
            <a
              href="https://supermassivegamesltd.zendesk.com/hc/en-gb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              official Supermassive Games support portal
            </a>
            .
          </p>
        </section>

        {/* Official Specs */}
        <section>
          <h2>Official System Requirements</h2>
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
                  <td><strong>CPU</strong></td>
                  <td>Intel Core i5-8400 / AMD Ryzen 5 1600</td>
                  <td>Intel Core i5-12400F / AMD Ryzen 5 5600</td>
                </tr>
                <tr>
                  <td><strong>GPU</strong></td>
                  <td>NVIDIA RTX 2070 Super / AMD RX 5700</td>
                  <td>NVIDIA RTX 3070 / AMD RX 6800</td>
                </tr>
                <tr>
                  <td><strong>RAM</strong></td>
                  <td>16GB</td>
                  <td>16GB</td>
                </tr>
                <tr>
                  <td><strong>Storage</strong></td>
                  <td>70GB (SSD recommended)</td>
                  <td>70GB (SSD recommended)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">Back to the game? Check our full guides:</p>
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
