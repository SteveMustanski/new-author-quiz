import React from 'react';
import './App.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue'
import Footer from './Footer';

function AuthorQuiz({turnData, highlight}) {
  return (
    <div className="container-fluid">
    <Hero />
    <Turn {...turnData} highlight={highlight} />
    <Continue />
    <Footer />
    </div>
  );
}

export default AuthorQuiz;
