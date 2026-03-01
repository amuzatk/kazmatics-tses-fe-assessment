export interface Lesson {
  key: string;
  title: string;
  body: string;
}

export interface Module {
  key: string;
  title: string;
  lessons: Lesson[];
  isQuiz?: boolean;
}

// reusable large body generator
const largeBody = (title: string) => `
${title}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum in porttitor sapien. Donec finibus nisl vel 
mauris luctus, vel feugiat elit varius.

Curabitur et sapien nec arcu facilisis tincidunt. 
Praesent dignissim, tortor sed facilisis ultricies, 
erat justo scelerisque nibh, sed laoreet risus 
nunc sed sapien.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium, totam rem aperiam, 
eaque ipsa quae ab illo inventore veritatis et quasi architecto 
beatae vitae dicta sunt explicabo.

Ut enim ad minima veniam, quis nostrum exercitationem ullam 
corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
`;

export const courseModules: Module[] = [
  {
    key: "introduction",
    title: "Introduction",
    lessons: [
      { key: "welcome", title: "Welcome Message", body: largeBody("Welcome Message") },
      { key: "note-style", title: "A Note on Style", body: largeBody("A Note on Style") },
      { key: "what-learn", title: "What You'll Learn", body: largeBody("What You'll Learn") },
      { key: "instructor", title: "Meet Your Instructor", body: largeBody("Meet Your Instructor") },
    ],
  },
  {
    key: "setup",
    title: "Setting Up Your Workspace",
    lessons: [
      { key: "setup-1", title: "Workspace Basics", body: largeBody("Workspace Basics") },
      { key: "setup-2", title: "Tools & Notifications", body: largeBody("Tools & Notifications") },
    ],
  },
  {
    key: "assessment",
    title: "Assessment",
    isQuiz: true,
    lessons: [],
  },
];