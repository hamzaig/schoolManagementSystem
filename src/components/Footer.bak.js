import React from 'react'
import Classes from "./footer.module.css";
const Footer = () => {
    return (
        <>
            <div className={Classes.mainFooter}>
                <div className={Classes.container}>
                    <div className={Classes.row}>
                        {/* Coulumn 1 */}
                        <div className={Classes.col}>
                            <h4>Syed Abdul Aziz</h4>
                            <ul className={Classes.listUnstyled}>
                                <li>Hello</li>
                                <li>Hello1</li>
                                <li>Hello2</li>
                                <li>Hello3</li>
                            </ul>
                        </div>
                        {/* Coulumn 2 */}
                        <div className={Classes.col}>
                            <h4>Muhammad Hamza Munir</h4>
                            <ul className={Classes.listUnstyled}>
                                <li>Hello</li>
                                <li>Hello1</li>
                                <li>Hello2</li>
                                <li>Hello3</li>
                            </ul>
                        </div>
                        {/* Coulumn 3 */}
                        <div className={Classes.col}>
                            <h4>Hamza Ali Khalid</h4>
                            <ul className={Classes.listUnstyled}>
                                <li>Hello</li>
                                <li>Hello1</li>
                                <li>Hello2</li>
                                <li>Hello3</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className={Classes.row}>
                        <p className={Classes.colSm}>
                            &copy;{new Date().getFullYear()} School Management System | All right reserved | Terms of service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer