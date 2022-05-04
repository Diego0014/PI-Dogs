import style from "../landing/initialPage.module.css";

export default function Index() {
  return (
    <div className={style.container}>
      <h1>Welcome</h1>
      <div className={style.containerT}>
        <div className={style.typedOut}>To the jungle!</div>
      </div>
      <div className={style.enterBtnDiv}>
        <button className={style.enterBtn}>
          <a href="#">boton</a>
        </button>
      </div>
    </div>
  );
}
