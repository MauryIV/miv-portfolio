import githubLogo from '../assets/svgs/github-mark.svg';
import linkedInLogo from '../assets/svgs/linkedin-svgrepo-com.svg';

export default function Footer() {
  return (
    <div className="container-fluid text-center p-4">
      <a className="m-4" href="https://github.com/MauryIV.html" target="_blank">
        <img src={githubLogo} className="logo github" alt="Github logo" />
      </a>
      <a className="m-4" href="https://www.linkedin.com/in/maury-hughes-251602286" target="_blank">
        <img src={linkedInLogo} className="logo linkedIn" alt="LinkedIn logo" />
      </a>
    </div>
  );
}
