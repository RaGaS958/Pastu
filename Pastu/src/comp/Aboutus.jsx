import React from 'react'
import { NavLink } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div id='aboutus'>
       
 <section class="hero">
        <div class="container">
            <h1>About Pastu</h1>
            <p>Empowering developers with seamless code sharing and collaboration</p>
        </div>
    </section>

    <main class="main-content container">
        <section class="section">
            <h2>What is Pastu?</h2>
            <p>Pastu is a modern, developer-friendly platform designed to revolutionize how you share, store, and collaborate on code snippets. Whether you're debugging with a colleague, sharing a quick solution, or storing code for future reference, Pastu makes it effortless and efficient.</p>
        </section>

        <section class="section">
            <h2>Why Choose Pastu?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h3>Easy Paste & Store</h3>
                    <p>Quickly paste your code snippets with our intuitive interface. No complicated setup - just paste and go.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔗</div>
                    <h3>Instant Sharing</h3>
                    <p>Share your code with anyone, anywhere. Generate shareable links instantly and collaborate seamlessly.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">✏️</div>
                    <h3>Real-time Editing</h3>
                    <p>Edit your pastes on the fly. Make changes, improvements, or corrections without losing your work.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Syntax Highlighting</h3>
                    <p>Beautiful syntax highlighting for all major programming languages makes your code readable and professional.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure & Private</h3>
                    <p>Your code is safe with us. Control who can access your pastes with privacy settings and expiration options.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>Built for speed. Load, save, and share your code snippets in milliseconds, not seconds.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="mission">
                <h2>Our Mission</h2>
                <p>We believe that code sharing should be simple, fast, and accessible to everyone. Our mission is to eliminate the friction in code collaboration, making it easier for developers to learn, share knowledge, and build amazing things together. Pastu is more than just a pastebin - it's a tool that connects the global developer community.</p>
            </div>
        </section>

        <section class="section">
            <div class="team-info">
                <h2>Built by Developers, for Developers</h2>
                <p>Pastu was created by passionate developers who understand the daily challenges of code sharing and collaboration. We've experienced the frustration of clunky tools and decided to build something better - a platform that just works, exactly how you'd expect it to.</p>
            </div>
        </section>

        <section class="cta">
            <h2>Ready to start sharing?</h2>
            <p>Join thousands of developers who trust Pastu for their code sharing needs.</p>
            <NavLink to='/' className="cta-button">Create Your First Paste</NavLink>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Pastu. Made with ❤️ for the developer community.</p>
        </div>
    </footer>

    </div>
  )
}

export default Aboutus