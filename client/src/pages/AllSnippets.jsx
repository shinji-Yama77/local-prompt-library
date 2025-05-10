

const snippets = [
    {
      id: 1,
      title: "React useState Hook",
      description: "Basic usage of the React useState hook for component state management",
      language: "JavaScript",
      tags: ["react", "hooks", "frontend"],
      preview: "const [state, setState] = useState(initialState);",
      date: "2 days ago",
      isFavorite: true
    },
    {
      id: 2,
      title: "CSS Flexbox Layout",
      description: "Common flexbox patterns for responsive layouts",
      language: "CSS",
      tags: ["css", "layout", "frontend"],
      preview: ".container { display: flex; justify-content: space-between; }",
      date: "1 week ago",
      isFavorite: false
    },
    {
      id: 3,
      title: "Python List Comprehension",
      description: "Concise way to create lists in Python",
      language: "Python",
      tags: ["python", "list", "backend"],
      preview: "squares = [x**2 for x in range(10)]",
      date: "2 weeks ago",
      isFavorite: true
    },
    {
      id: 4,
      title: "Node.js File System Operations",
      description: "Reading and writing files asynchronously in Node.js",
      language: "JavaScript",
      tags: ["nodejs", "filesystem", "backend"],
      preview: "fs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
      date: "3 weeks ago",
      isFavorite: false
    },
    {
      id: 5,
      title: "PostgreSQL Query",
      description: "Example of a simple JOIN query in PostgreSQL",
      language: "SQL",
      tags: ["database", "postgresql", "backend"],
      preview: "SELECT u.name, p.title FROM users u JOIN posts p ON u.id = p.user_id WHERE u.active = true;",
      date: "1 month ago",
      isFavorite: true
    },
    {
      id: 6,
      title: "React useEffect Hook",
      description: "Managing side effects in React functional components",
      language: "C#",
      tags: ["react", "hooks", "frontend"],
      preview: "useEffect(() => {\n  // Side effect code\n  return () => {\n    // Cleanup function\n  };\n}, [dependency]);",
      date: "1 month ago",
      isFavorite: false
    }
  ];

  const distinctColor = "#E8A317";

export default function AllSnippets() {
    // Sample data


    return (
        <div className="grid grid-cols-2 gap-4">
            {snippets.map((snippet) => (
                <div key={snippet.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer group">
                    <div className="p-4">
                        <span className="px-2 py-1 font-medium bg-blue-900 text-blue-200">
                            {snippet.language}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}  