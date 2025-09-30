import profilePic from "../assets/images/thisIsMe.jpeg";

export default function AboutMe() {
  return (
    <div className="container pt-4">
      <h2>About Me</h2>
      <div id="about-me">
        <div className="col-3 mb-4">
          <img
            src={profilePic}
            alt="Maury Hughes IV"
            className="img-fluid"
            id="profile-pic"
          />
        </div>
        {[
          "Welcome to my portfolio! I'm so happy that you are here to see some of my capabilities.",
          "A little about me now. I am 35 years old and am relatively new to programming but have enjoyed every bit of it. It isn't something I had ever even considered as a possibility until I started meeting up with a few of my close friends for board game nights every other Friday. All three of them work in this field and I would often talk to them about my frustrations in the construction industry. It has treated me well, but I wanted something that was more mentally challenging. My friends suggested working as a computer programmer. They noticed how I tend to analyze fine detail in the games we play for a better, more complete experience. Because of that, they believed I would enjoy the field of programming.", 
          "I decided to see what all I could achieve on my own, learning a bit of Python. I found great joy in a new way to create something from nothing. It inspired me in a manner I haven't experienced in a long time. I then decided to take a bootcamp class to get into the field as soon as I could. I must say I'm extremely excited to continue my education in the industry. I think my attention to detail and perspective on this as a challenging and creative outlet will serve me well.",
          "Thank you so much for taking the time to learn more about me. I hope you have a wonderful day.",
        ].map((paragraph, index) => (
          <p
            key={index}
            className="paragraph fade-in"
            style={{ animationDelay: `${index * 2}s` }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
