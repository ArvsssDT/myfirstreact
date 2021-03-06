import '../App.css';
import Greet from './Greet';
import Button from './Button';
import Hello from './Hello';
import Message from './Message';
import Employee from './Employee';

const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
      
        &nbsp;&nbsp;&nbsp;
        
        <img src="https://ih1.redbubble.net/image.919133172.0514/st,small,507x507-pad,600x600,f8f8f8.jpg" className="App-logo" alt="logo" />
        <p>

        &nbsp;

        <Greet greeter = "Greetings, " name = "Visitor"/>
          <h2>Let's support 
          <a
          className="App-link"
          href="https://www.youtube.com/c/CherryBulletofficial"
          target="_blank"
          rel="noopener noreferrer"
          > Cherry Bullet</a>🍒</h2>
        </p>

        &nbsp;

        <Greet greeter = "Hello, "name = "New Lullet"/>
        <Message/> 
        <iframe width="852" height="480" src="https://www.youtube.com/embed/9OZPwJdl_4w" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
         
        &nbsp;

        <Greet greeter = "Hello, "name = "Lullet"/>
        <Message/> 
                
        <iframe width="852" height="480" src="https://www.youtube.com/embed/0It6vWbGOX0" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>

        &nbsp;

        <p>{Hello()}
        </p>

        <Button/>
        
        &nbsp;
        
      </header>
    </div>
  );
}

export default Home;