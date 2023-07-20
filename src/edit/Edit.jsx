import { useState } from "react";
import styles from "./Edit.module.scss";

const Edit = () => {
    const [enabled, setEnabled] = useState(true);
    const [loginVisible, setLoginVisible] = useState(false);
    const openEditClass = enabled && !loginVisible ? "" : "hidden";
    const loginVisibleClass = loginVisible ? "flex" : "hidden";

    const showLogin = () => {
        setLoginVisible(true);
    };

    const hideLogin = () => {
        setLoginVisible(false);
    };

    return (
        <>
            <div onClick={showLogin} className={`${styles.open} ${openEditClass}`}></div>

            <div className={`${styles.debug_login} ${loginVisibleClass}`}>
                <form className={styles.login}>
                    <p className={styles.title}>Log in<span onClick={hideLogin} className={styles.close}>x</span></p>

                    <input type="text" placeholder="Username" id="txtUsername"/>
                    <span className={`${styles.fa} ${styles.fa_user}`}></span>

                    <input type="password" placeholder="Password" id="txtPassword"/>
                    <span className={`${styles.fa} ${styles.fa_key}`}></span>

                    <button className={styles.login_btn} id="debugLoginBtn">
                        <span className={styles.spinner}></span>
                        <span className={styles.state}>Log in</span>
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
