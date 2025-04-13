import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BackgroundPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
          Learn more about JIT Xoofoo W/Q/GIYOORGISII, our mission, vision, and values.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              JIT Xoofoo W/Q/GIYOORGISII is dedicated to serving our community through spiritual growth, educational
              programs, and social support. We aim to create a nurturing environment where individuals can develop
              their talents, deepen their faith, and contribute positively to society.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              We envision a community where every member is empowered to reach their full potential, where spiritual
              values guide actions, and where service to others is a way of life. We strive to be a beacon of hope
              and a catalyst for positive change in our society.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Our Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Faith</h3>
                <p className="text-muted-foreground">
                  We are guided by our spiritual beliefs in all that we do, seeking to deepen our understanding and practice.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Service</h3>
                <p className="text-muted-foreground">
                  We are committed to serving our community with compassion, humility, and dedication.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Unity</h3>
                <p className="text-muted-foreground">
                  We value the strength that comes from working together as one community with shared goals.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">
                  We believe in the transformative power of education and continuous learning.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Respect</h3>
                <p className="text-muted-foreground">
                  We treat all individuals with dignity and respect, honoring the diversity of our community.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Growth</h3>
                <p className="text-muted-foreground">
                  We encourage personal and spiritual growth, supporting each member's journey.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Our Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              JIT Xoofoo W/Q/GIYOORGISII is led by a dedicated team of individuals who are committed to our mission and values.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center mb-3">
                  <span className="text-3xl text-slate-500">DT</span>
                </div>
                <h3 className="font-semibold">Dn Dawwit Tammiruu</h3>
                <p className="text-sm text-muted-foreground">Dura Ta'aa Mana Galmee </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center mb-3">
                  <span className="text-3xl text-slate-500">AT</span>
                </div>
                <h3 className="font-semibold">Dn Addaamuu Taakkalee</h3>
                <p className="text-sm text-muted-foreground">Itti aanaa</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center mb-3">
                  <span className="text-3xl text-slate-500">DM</span>
                </div>
                <h3 className="font-semibold">Dammilee Mulunee</h3>
                <p className="text-sm text-muted-foreground">Barresituu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
