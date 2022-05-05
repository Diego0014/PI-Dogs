import style from "../landing/initialPage.module.css";

export default function Index() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome</h1>
      <div className={style.containerT}>
        <div className={style.typedOut}>To my individual project!</div>
      </div>
      <div className={style.enterBtnDiv}>
        <button className={style.enterBtn}>
          <a href="#">Shut up! I want to see dogs!</a>
        </button>
      </div>
    </div>
  );
}
