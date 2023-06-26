import { AppContext } from "../AppContext";
import { useContext } from "react";
import styles from "../styles/Edit.module.css";

const Edit = () => {
    const { editToolEnabled } = useContext(AppContext);
    const completedClass = editToolEnabled ? "" : "hidden";

    return (
        <>
            <div className={`${styles.open} ${completedClass}`}></div>
        </>
    );
};

export default Edit;
