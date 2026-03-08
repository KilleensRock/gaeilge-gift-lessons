import { MessageCircle, HandshakeIcon, Coffee, BookOpen } from "lucide-react";

const topics = [
  {
    irish: "Dia duit!",
    english: "Hello!",
    icon: HandshakeIcon,
    title: "Meeting New People",
    description: "Learn how to greet someone in Irish — from a casual 'Dia duit' to responding with 'Dia is Muire duit'. You'll feel confident saying hello in no time.",
  },
  {
    irish: "Is mise…",
    english: "I am…",
    icon: MessageCircle,
    title: "Introducing Yourself",
    description: "Tell people your name, where you're from, and a little about yourself. Master phrases like 'Is mise Seán' and 'Is as Éirinn dom'.",
  },
  {
    irish: "Conas atá tú?",
    english: "How are you?",
    icon: Coffee,
    title: "Small Talk",
    description: "Navigate everyday conversation with ease — ask how someone is, talk about the weather ('An aimsir'), and share simple opinions.",
  },
];

const LessonPreviewSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm mb-3">Your First Lesson</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lessons at Your Pace to Enjoy
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Your first session covers the essentials — greeting people, introducing yourself, and having a real conversation as Gaeilge.
          </p>
        </div>

        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="bg-card rounded-2xl border border-border p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-10 items-start hover:shadow-lg transition-shadow duration-300"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <topic.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <h3 className="font-display text-2xl font-bold text-foreground">{topic.title}</h3>
                  <span className="font-body text-sm text-muted-foreground">Lesson {index + 1} of 3</span>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">{topic.description}</p>
                <div className="inline-flex items-baseline gap-2 bg-primary/5 rounded-lg px-4 py-2 border border-primary/10">
                  <span className="font-display text-lg font-semibold text-primary italic">{topic.irish}</span>
                  <span className="font-body text-muted-foreground text-sm">— {topic.english}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-6 py-3">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="font-body text-sm text-muted-foreground">All covered in your 45-minute beginner lesson</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonPreviewSection;
