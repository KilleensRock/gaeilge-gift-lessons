import { Mic, BookText, Globe, Users, FileText, Video } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Pronunciation",
    description: "Master authentic Irish sounds with patient, expert guidance from native speakers.",
  },
  {
    icon: BookText,
    title: "Everyday Phrases",
    description: "Learn useful greetings, conversations, and expressions you'll actually use.",
  },
  {
    icon: Globe,
    title: "Irish Culture",
    description: "Discover the stories, music, and traditions woven into the language.",
  },
  {
    icon: Video,
    title: "Live Online",
    description: "Join from anywhere in the world. All you need is an internet connection.",
  },
  {
    icon: FileText,
    title: "Notes & Handouts",
    description: "Every lesson comes with downloadable materials to practise between sessions.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate class sizes so you get the attention and practice time you deserve.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm mb-3">What You'll Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            More Than Just a Lesson
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
