import React from 'react';
import {Link} from 'react-router-dom';
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={styles.notFound}>
            <div className={styles.error404}>
                <div className={styles.text404}> 404</div>   
                <div className={styles.sorry}> <span className="sorry">SORRY</span>,  THIS PAGE IS NOT FOUND</div>
                <div className={styles.link}><Link to ="/" style={{textDecoration:'none'}}>BACK TO HOME</Link></div>
            </div>
        </div>
    )
}

export default PageNotFound

