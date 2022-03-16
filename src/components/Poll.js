import './Poll.css';

function Poll() {
  return (
    <div className='Poll'>
      <header>
        <h1 className='Title'>What is your favorite programming language?</h1>
        <p className='Description'>Description</p>
      </header>
      <main>
        <ul className='List'>
          <li>
            <button>Ruby</button>
          </li>
          <li>
            <button>Java</button>
          </li>
          <li>
            <button>PHP</button>
          </li>
          <li>
            <button>C#</button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Poll;
