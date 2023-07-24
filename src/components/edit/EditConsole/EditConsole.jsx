import { useState } from "react";
import styles from "./EditConsole.module.scss";
import { useEditContext } from "../../../context/EditContext";

const EditConsole = () => {
    const [consoleItems, setConsoleItems] = useState([
        {
            id: 0,
            title: "Notes",
            img: "notes",
            active: false,
        },
        {
            id: 1,
            title: "Pages",
            img: "pages",
            active: false,
        },
        {
            id: 2,
            title: "History",
            img: "history",
            active: false,
        },
        {
            id: 3,
            title: "New Work Item",
            img: "devops",
            active: false,
        },
        {
            id: 4,
            title: "DevOps Work Item",
            img: "devops",
            active: false,
        },
        {
            id: 5,
            title: "Update Content",
            img: "notes",
            active: false,
        },
        {
            id: 6,
            title: "Settings",
            active: false,
        },
    ])

    const renderItems = () => {
        return  (
            consoleItems.filter((item) => item.id < 6).map((item, index) => (
                <li onClick={() => handleActiveItem(index)} key={index} className={`${styles.editConsoleItem} ${item.active ? styles.active : ""}`}>
                    <img src={`/img/pm/${item.img}.svg`} alt="" />
                    <p>{item.title}</p>
                </li>
            ))
        )
    }

	const handleActiveItem = (itemIndex) => {
        if(consoleItems[itemIndex].active){
            const newConsoleItems = [ ...consoleItems ];

            newConsoleItems[itemIndex].active = false;
            setConsoleItems(newConsoleItems);
        } else {
            setConsoleItems([ ...consoleItems.map((item, index) => {
                index == itemIndex ? item.active = true : item.active = false;
                return item;
            })])
        }
    }

    const { test, userLoggedIn } = useEditContext();

    return (
        <>
            <div className={styles.editConsole}>
                <img className={styles.editConsoleClose} src="/img/pm/close.png" alt="" />
                <div className={styles.editConsoleItems}>
                    <ul className={styles.editConsoleTop}>
                        {renderItems()}
                    </ul>
                    <div className={styles.editConsoleBottom}>
                        <div onClick={() => handleActiveItem(6)} className={`${styles.editConsoleItem} ${consoleItems[6].active ? styles.active : ""}`}>
                            <img src={`/img/pm/settings.svg`} alt="" />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditConsole;
