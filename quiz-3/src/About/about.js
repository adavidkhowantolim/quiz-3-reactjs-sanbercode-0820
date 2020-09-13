/*
  4. about component (5 poin)
  ubahlah about.html dari Tugas-2 menjadi jsx ke dalam reactjs
  gunakan function component soal ini
*/
import React from 'react';
import "./about.css";

function About() {
  return (
    <section className="about-container">
      <section className="about-section">
        <h1 className="about-h1">Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
          <li><b>Nama</b>                           : David Khowanto</li>
          <li><b>Email</b>                          : adavidkhowantolim@gmail.com</li>
          <li><b>Sistem Operasi yang digunakan</b>  : Windows 10</li>
          <li><b>Akun GitHub</b>                    : https://github.com/adavidkhowantolim</li>
          <li><b>Akun Telegram</b>                  : DavidK </li>
        </ol>
      </section>
    </section>
  );
}

export default About;

    