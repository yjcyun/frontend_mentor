import { Button } from './components/Button';

function App() {
  return (
    <div>
      <h1>Jived fox nymph grabs quick waltz</h1>
      <Button adornment>Button</Button>
      <Button adornment disabled>
        Button
      </Button>
      <Button variant='secondary'>GO TO PORTFOLIO</Button>
      <Button variant='secondary'>contact me</Button>
    </div>
  );
}

export default App;
