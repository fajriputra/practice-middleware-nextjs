import styles from "../styles/Home.module.css";

export default function Login() {
  const storeCookies = () => {
    document.cookie = "token=1234; path=/";
  };

  return (
    <div className={styles.container}>
      <button onClick={storeCookies}>Login</button>
    </div>
  );
}
