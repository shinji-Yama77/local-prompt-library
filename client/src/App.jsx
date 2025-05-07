import './App.css';

export default function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">CodeSnips</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">My Snippets</a>
          <a href="#">Fav Snippets</a>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Welcome to Code Snippets</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  )
}