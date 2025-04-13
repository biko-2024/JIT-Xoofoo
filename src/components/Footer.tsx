import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">JIT Xoofoo W/Q/GIYOORGISII</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Serving the community with dedication and passion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-muted-foreground hover:text-primary">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-muted-foreground hover:text-primary">
                  History
                </Link>
              </li>
              <li>
                <Link href="/background" className="text-muted-foreground hover:text-primary">
                  Background
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="text-muted-foreground">Email: info@jitxoofoo.org</li>
              <li className="text-muted-foreground">Phone: +251 912 345 678</li>
              <li className="text-muted-foreground">Address: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} JIT Xoofoo W/Q/GIYOORGISII. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
