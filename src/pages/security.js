import Change_Password from "./change_Password";
import styles from "@/styles/Dashboard.module.css";
import Link from "next/link";
import LockOpenIcon from "@mui/icons-material/LockOpen";
export default function Security() {
  return (
    <div className={styles.security}>
      <i>
        <LockOpenIcon />
      </i>
      <Link href="/change_Password" legacyBehavior>
        <a className={styles.anchor}>
          <h4>Manage Password</h4>
        </a>
      </Link>
    </div>
  );
}