import style from "../landing/initialPage.module.css";

export default function Index() {
  return (
    <div className={style.container}>
      <div className={style.enterBtnDiv}> 
          <button className={style.enterBtn}><a href="#" >I wanna see lot of dogs!</a></button>
      </div>
    </div>
  );
}
