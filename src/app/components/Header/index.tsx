"use client"


import styles from "../../page.module.css"
import Link from "next/link";
import { Hea } from "./styles";

export default function Header() {
  return (
    <Hea className={styles.color}>Test Header</Hea>
  )
}