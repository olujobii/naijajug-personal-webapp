import "../styles/header.css";
import ProfilePic from "../assets/profile-pic.jpeg";
function Header() {
  return (
    <header>
      <img src={ProfilePic} alt='My Profile Picture' className='image' />
      <h1>Olujobi Ifeoluwa</h1>
      <p>Backend Developer (Java/Spring Boot)</p>
    </header>
  );
}

export default Header;
