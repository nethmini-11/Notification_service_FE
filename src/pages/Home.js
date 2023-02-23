import React from "react";
import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          `Introducing our latest notification management system that allows you to easily keep track of all your mail, email, and push notifications in one place. With our system, you can easily manage all of your notifications with ease and stay on top of your communication. Say goodbye to the hassle of managing multiple channels of communication, and hello to a seamless, streamlined experience. Our notification management system is designed to make your life easier, so you can focus on what really matters. Try it out today and see the difference for yourself!`,
          
        ]}
        wrapper="div"
        speed="80"
      />
    </div>
  );
};

const Title = () => {
  const style = {
    fontSize: '60px',
      color: 'linear-gradient(to bottom, #0ac74a, #000000)',
  };

  return (
    <div>
      <TypeAnimation
        sequence={[
          'Manage Your Notifications with Ease',
          1000,
          'Manage Your Notifications with Convenience',
          1000,
          'Manage Your Notifications with Simplicity',
          1000,
          'Manage Your Notifications with Grace',
          1000,
        ]}
        speed={60}
        style={style}
        wrapper="span"
        repeat={Infinity}
        
       
      />
    </div>
  );
};

const Home = () => {
  return (
    <div >
      <h4 style={{ marginLeft: "22%", marginTop: "2%", fontWeight: "bold" }}>
        <Title className="title" />
      </h4>
      <div style={{ marginLeft: "18%", marginTop: "2%" ,textAlign: "justify" ,width:"80%"}}>
        <ExampleComponent />
      </div>
      <div className="home" >
        <div className="div2"></div>
      </div>
      
    </div>
  );
};

export default Home;
