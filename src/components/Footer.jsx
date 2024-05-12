import githubLogo from "../assets/svgs/github.svg";
import linkedInLogo from "../assets/svgs/linkedin.svg";
import stackOverflowLogo from "../assets/svgs/stackoverflow.svg";

export default function Footer() {
  return (
    <div className="container-fluid text-center p-4">
      <a
        className="m-4"
        href="https://www.linkedin.com/in/maury-hughes-251602286"
        target="_blank"
      >
        <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn logo" />
      </a>
      <a className="m-4" href="https://github.com/MauryIV.html" target="_blank">
        <img src={githubLogo} className="logo github" alt="Github logo" />
      </a>
      <a
        className="m-4"
        href="https://stackoverflow.com/users/22641565/mauryiv"
        target="_blank"
      >
        <img
          src={stackOverflowLogo}
          className="logo stackOverflow"
          alt="StackOverflow logo"
        />
      </a>
    </div>
  );
}
